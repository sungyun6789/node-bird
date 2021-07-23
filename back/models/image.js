module.exports = (sequlize, DataTypes) => {
  const Image = sequlize.define(
    'Image',
    {
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );

  Image.associate = (db) => {
    db.Image.hasMany(db.Post); // 포스트가 이미지를 여러개 가짐 1 : N
  };

  return Image;
};
