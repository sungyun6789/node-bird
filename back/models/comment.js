module.exports = (sequlize, DataTypes) => {
  const Comment = sequlize.define(
    "Comment",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 이모티콘 저장
    }
  );
  Comment.associate = (db) => {};

  return Comment;
};
