# 🏦  **ATIVIDADE - API (Mini Banco Central)**
Esta API REST simula um banco central no contexto de Open Finance. O objetivo é consolidar informações bancárias de um usuário, permitindo visualizar saldos e extratos de diferentes instituições financeiras, além de um total consolidado.

## 🚀 **Funcionalidades**
- Criar instituições financeiras

- Criar contas bancárias vinculadas a instituições e usuários

- Registrar transações

- Visualizar saldo por instituição ou consolidado

- Consultar extrato por instituição ou consolidado

## 🛠️ **Tecnologias**

- Node.js

- Express

- Sequelize (ORM)

- PostgreSQL

## ⚙️ **Configurando o ambiente**
  
### 1. Clone o repositório
````
git clone https://github.com/seu-usuario/API_MBC.git

cd API_MBC

````

### 2. Instale as dependências

````
npm install
````

### 3. Instale o Sequilize CLI e o driver do PostgreSQL

````
npm install --save sequelize pg pg-hstore
npm install --save-dev sequelize-cli
````

### 4. Configurando o banco de dados.
As credenciais do banco de dados estão configuradas no arquivo `config/database.js`. 

Edite esse arquivo com as seguintes informações:
````
export default {
  username: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_banco',
  host: '127.0.0.1',
  dialect: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
  },
}
````
Substitua os valores de `seu_usuario`, `sua_senha` e `nome_do_banco` pelas suas credenciais de banco de dados.

Crie o banco com:

````
createdb nome_do_banco
````

### 5. Rode as migrations

Para criar as tabelas definidas nos arquivos de `src/app/database/migrations`

````
npx sequelize-cli db:migrate
````

### 6. Subindo os dados
Para facilitar os testes e simulações, você pode popular o banco com dados pré-definidos executando o comando:

````
npx sequelize-cli db:seed:all`
````
Esse comando irá rodar os arquivos localizados em `src/app/database/seeders`

### 7. Inicie o servidor
Com o ambiente configurado e o banco pronto, inicie o servidor em modo de desenvolvimento com:
````
npm run dev
````
O ponto de entrada principal é o arquivo `src/server.js`

## 📌 **Endpoints da API**


### Instituições

| Método | Rota                         | Descrição                                      |
|--------|------------------------------|------------------------------------------------|
| POST   | `/instituicoes`             | Cadastra uma nova instituição                  |
| GET    | `/instituicoes`             | Lista todas as instituições cadastradas        |
| GET    | `/instituicoes/:id`         | Retorna os dados de uma instituição específica |

---

### Usuários

| Método | Rota                  | Descrição                              |
|--------|-----------------------|----------------------------------------|
| POST   | `/usuarios`          | Cadastra um novo usuário               |
| GET    | `/usuarios`          | Lista todos os usuários cadastrados    |
| GET    | `/usuarios/:cpf`     | Retorna os dados de um usuário pelo CPF|

---

### Contas

| Método | Rota                                                       | Descrição                                                                 |
|--------|------------------------------------------------------------|---------------------------------------------------------------------------|
| POST   | `/contas`                                                 | Cadastra uma nova conta                                                   |
| GET    | `/contas`                                                 | Lista todas as contas                                                     |
| GET    | `/usuarios/:cpf/saldo/:instituicao_id`                    | Retorna o saldo de um usuário em uma instituição específica              |
| GET    | `/usuarios/:cpf/saldo`                                    | Retorna o saldo total do usuário em todas as instituições                |
| GET    | `/contas/:cpf`                                            | Retorna todas as contas de um usuário pelo CPF                           |

---

### **Transações**

| Método | Rota                                             | Descrição                                                       |
|--------|--------------------------------------------------|-----------------------------------------------------------------|
| POST   | `/transacoes`                                   | Realiza uma nova transação - entrada ou saída              |
| GET    | `/transacoes/id/:transacao_id`                  | Retorna os dados de uma transação específica pelo ID           |
| GET    | `/transacoes/:cpf`                              | Retorna todas as transações de um usuário                      |
| GET    | `/transacoes/:cpf/extrato`                      | Retorna o extrato detalhado (transações) de um usuário         |
