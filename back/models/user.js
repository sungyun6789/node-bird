module.exports = (sequlize, DataTypes) => {
  const User = sequlize.define(
    'User', // MYSQL에는 users 테이블 생성
    {
      // id가 기본적으로 들어있음(mysql)
      email: {
        type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
        allowNull: false, // 필수, true로 설정할 경우 선택
        unique: true, // 고유한 값
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글 저장
    },
  );
  User.associate = (db) => {
    db.User.hashMany(db.Post);
    db.User.belongsTo(db.Comment);
    db.Post.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
    db.Post.belongsToMany(db.Post, {
      through: 'Follow',
      as: 'Followers',
      foreignKey: 'FollowingId',
    });
    db.Post.belongsToMany(db.Post, {
      through: 'Follow',
      as: 'Followings',
      foreignKey: 'FollowerId',
    });
  };

  return User;
};
