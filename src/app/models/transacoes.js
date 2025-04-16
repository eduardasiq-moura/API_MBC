import Sequelize, { Model } from 'sequelize';

class Transacao extends Model {
  static init(sequelize) {
    super.init(
      {
        transacao_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        cpf: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        instituicao_id: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        valor: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        tipo_transacao: {
          type: Sequelize.ENUM('entrada', 'saida'),
          allowNull: false,
        },
        data: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        tableName: 'transacoes',
        timestamps: false,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Contas, {
      foreignKey: 'cpf',
      targetKey: 'cpf',
      as: 'conta',
    });

    this.belongsTo(models.Instituicao, {
      foreignKey: 'instituicao_id',
      targetKey: 'instituicao_id',
      as: 'instituicao',
    });
  }
}

export default Transacao;
