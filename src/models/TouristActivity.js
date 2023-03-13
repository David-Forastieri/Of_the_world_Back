const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('touristActivity', {
    touristActivity: {
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5')
    },
    duration: {
      type: DataTypes.INTEGER
    },
    season: {
      type: DataTypes.ENUM('Summer', 'Spring', 'Winter', 'Fall')
    }
  })
}