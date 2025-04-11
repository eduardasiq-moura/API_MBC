module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'open-finance',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
