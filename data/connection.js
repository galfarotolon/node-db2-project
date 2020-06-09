const knex = require('knex');

const knexfile = require('../knexfile.js')

const config = knexfile.development;

module.exports = knex(config); 