# aparecida

https://ap-lyart.vercel.app/#

---------------------------------------------------Front--------------------------------------------------------------

---------------------------------------------------Front--------------------------------------------------------------

---------------------------------------------------Backend------------------------------------------------------------

Este projeto é uma API construída usando Java, Java Spring, Migrações Flyway, PostgresSQL como banco de dados, e Spring Security e JWT para controle de autenticação.

Instalação
Instale as dependências com o Maven.
Instale o PostgresSQL.
Uso
Inicie a aplicação com o Maven.
A API estará acessível em http://localhost:8080.
Endpoints da API
A API fornece os seguintes endpoints:

GET /x* - Recupera uma lista de todos os x*. (todos os usuários autenticados) 

POST /x* - Registra um novo x* (acesso ADMIN requerido).

POST /auth/login - Realiza login no aplicativo.

POST /auth/register - Registra um novo usuário no aplicativo.
Autenticação
A API utiliza o Spring Security para controle de autenticação. As seguintes funções estão disponíveis:

USER -> Função padrão para usuários logados.
ADMIN -> Função de administrador para gerenciar parceiros (registrar novos parceiros).
Banco de Dados
O projeto utiliza o PostgresSQL como banco de dados.



---------------------------------------------------Backend------------------------------------------------------------
