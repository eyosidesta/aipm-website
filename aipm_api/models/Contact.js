const Sequelize = require('sequelize');
const db = require('../config/database');

const Contact = db.define('contacts', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    reason: {
        type: Sequelize.STRING,
    },
    message: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

module.exports = Contact;
