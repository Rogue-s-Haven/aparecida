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


## Entidades e relacionamentos:

### Entidades (Tabelas)
- Users: Representa os usuários do sistema, que podem ser administradores ou coordenadores.
- Onibus: Representa os ônibus da frota.
- Poltrona: Representa as poltronas dentro de cada ônibus.
- Passageiro: Representa os passageiros que utilizam o serviço.
- Passagem: Representa as passagens compradas pelos passageiros.
- ListaEspera: Representa a lista de espera para as passagens.
- Embarque: Representa o processo de embarque dos passageiros.
### Relacionamentos
- Users e Onibus: Um coordenador (tipo de usuário) é responsável por um ou mais ônibus. Relação de um para muitos.
- Onibus e Poltrona: Um ônibus possui muitas poltronas. Relação de um para muitos.
- Poltrona e Passagem: Uma poltrona pode ser reservada por uma única passagem. Relação de um para um.
- Passageiro e Passagem: Um passageiro pode comprar várias passagens. Relação de um para muitos.
- Passagem e ListaEspera: Uma passagem pode estar na lista de espera. Relação de um para muitos.
- Passagem e Embarque: Uma passagem pode ter um embarque associado. Relação de um para um.



---------------------------------------------------Backend------------------------------------------------------------
