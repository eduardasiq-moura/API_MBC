import Sequelize, { Model } from 'sequelize';

class Contas extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        saldo: {
          type: Sequelize.FLOAT,
          allowNull: false,
          defaultValue: 0,
        },
        instituicao_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'contas',
        timestamps: false,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuarios, {
      foreignKey: 'cpf',
      as: 'usuario',
    });

    this.belongsTo(models.Instituicao, {
      foreignKey: 'instituicao_id',
      as: 'instituicao',
    });
  }
}

export default Contas;
