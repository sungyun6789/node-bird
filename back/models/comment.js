module.exports = (sequlize, DataTypes) => {
  const Comment = sequlize.define(
    'Comment',
    {
      // id가 기본적으로 들어있음
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // UserId: 1
      // PostId: 2
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 저장
    },
  );
  Comment.associate = (db) => {};
  db.Comment.belongsTo(db.User);
  db.Comment.belongsTo(db.Comment);

  return Comment;
};
