import Sequelize, { Model } from 'sequelize';

class Instituicao extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        codigo: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'instituicoes',
        timestamps: false,
      }
    );

    return this;
  }
}

export default Instituicao;
