'use strict';
module.exports = (sequelize, DataTypes) => {
  const projets = sequelize.define('projets', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    technologie: DataTypes.STRING,
    price: DataTypes.FLOAT,
    duration: DataTypes.INTEGER,
    categorie: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  projets.associate = function(models) {
    // associations can be defined here
  };
  return projets;
};