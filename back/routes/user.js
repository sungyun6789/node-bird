const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User } = require('../models');

const router = express.Router();

router.post('/login', (req, res, next) => {
  passport.authenticator('local', (error, user, info) => {
    if (error) {
      console.error(error);
      return next(error);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      return res.status(200).json(user);
    });
  })(req, res, next);
});

router.post('/', async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 이메일입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send('ok');
  } catch (error) {
    console.log(error);
    next(error); // status 500
  }
});

// 로그아웃은 쿠키와 세션을 지우면 끝나는 작업, 로그인에 비해 상당히 간단한 편
router.post('/user/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;
