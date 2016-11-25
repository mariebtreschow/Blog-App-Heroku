'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
     queryInterface.addColumn('Users', 'passwordResetToken', Sequelize.STRING);

  },
  down: function (queryInterface, Sequelize) {
     queryInterface.removeColumn('Users', 'passwordResetToken');
  }
};
