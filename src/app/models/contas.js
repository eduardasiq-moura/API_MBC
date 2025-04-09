import Sequelize, { Model } from 'sequelize';

class Contas extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        codigo: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'contas',
        timestamps: false,
      }
    );

    return this;
  }
}

export default Contas;
