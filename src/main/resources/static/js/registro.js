function cadastrarUsuario() {
    // Obtendo os valores dos campos do formulário
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const email = document.getElementById('email').value;
    const nomeUsuario = document.getElementById('nomeUsuario').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;   
  
  
    // Validando as informações (adicione mais validações conforme necessário)
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }
  
    // Criando o objeto com os dados a serem enviados
    const dados = {
      nomeCompleto,
      email,
      nomeUsuario,
      senha
    };
  
    // Configurando a requisição POST
    fetch('/seu-servidor-java/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }
      return response.json();
    })
    .then(data => {
      // Processar a resposta do servidor (ex: mostrar mensagem de sucesso)
      console.log(data);
      alert('Usuário cadastrado com sucesso!');
    })
    .catch(error => {
      // Tratar erros (ex: mostrar mensagem de erro)
      console.error('Erro:', error);
      alert('Ocorreu um erro ao cadastrar o usuário.');
    });
  }