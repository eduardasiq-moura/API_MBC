// models/contas.js
import Sequelize, { Model } from 'sequelize'

class Contas extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        nome: Sequelize.STRING,
        saldo: Sequelize.FLOAT,
      },
      {
        sequelize,
        tableName: 'contas',
        timestamps: false,
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.User, {foreignKey: 'cpf', as: 'users',
    }),
    this.belongsTo(models.Instituicao, {foreignKey: 'instituicao_id', as: 'instituicao',
    })
  }
}

export default Contas
