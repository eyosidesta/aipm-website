require('dotenv').config();
const { Sequelize } = require('sequelize');

const sslEnabled = process.env.DB_SSL === 'true';
const commonOptions = {
  dialect: 'postgres',
  logging: process.env.NODE_ENV === 'production' ? false : console.log,
  pool: {
    max: parseInt(process.env.DB_POOL_MAX || '5', 10),
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: sslEnabled
    ? { ssl: { require: true, rejectUnauthorized: false } }
    : {},
};

// Either set DATABASE_URL (e.g. the connection string a managed host like
// Render/Heroku/Supabase gives you), or set the discrete DB_* vars below.
const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, commonOptions)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432', 10),
        ...commonOptions,
      }
    );

module.exports = sequelize;
