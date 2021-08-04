const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');

const dotenv = require('dotenv');
const userRouter = require('./routes/user');

const db = require('./models');
const passport = require('passport');
const passportConfig = require('./passport');

const path = require('path');

const morgan = require('morgan');

dotenv.config();

const app = express();
db.sequelize
  .sync()
  .then(() => console.log('db 연결 성공'))
  .catch(console.error);
passportConfig();

app.use(morgan('dev'));
app.use(
  cors({
    // origin을 *로 모든것을 허용할 경우 보안 때문에 에러가 발생할 수 있음
    origin: 'http://localhost:3060',
    credentials: true,
  }),
);
app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/', (req, res) => {
  res.send('hello api');
});

app.use('/posts', postsRouter);
app.get('/posts', (req, res) => {
  res.json([
    { id: 1, content: 'hello1' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' },
  ]);
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => console.log('서버 실행 중'));

/* 
get - 가져오다
post - 생성하다 
put - 전체 수정 
delete - 제거 
patch - 부분 수정 
options - 찔러보기 (보낼 수 있는지)
head - 헤더만 가져오기 (header/body)
*/
