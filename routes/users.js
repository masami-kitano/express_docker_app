var express = require('express');
var router = express.Router();

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql_db', 'root', 'root', {
    host: 'db',
    dialect: 'mysql',
});

router.get('/', async(req, res, next) => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    res.send('respond with a resource');
});

module.exports = router;