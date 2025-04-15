// models/instituicao.js
import Sequelize, { Model } from 'sequelize';

class Instituicao extends Model {
  static init(sequelize) {
    super.init(
      {
        instituicao_id: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true,  
        },
        nome: Sequelize.STRING,
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
