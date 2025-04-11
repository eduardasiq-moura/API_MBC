// models/user.js
import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        nome: Sequelize.STRING,
        data_nascimento: Sequelize.DATE,
      },
      {
        sequelize,
        tableName: 'users',
        timestamps: false,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Contas, {foreignKey: 'cpf', as: 'contas',});
  }
}

export default User;
