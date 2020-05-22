//AJAX
// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/lucasrrocha');
// xhr.send(null);

// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4) {
//     console.log(JSON.parse(xhr.responseText));
//   }
// };

//PROMISES

// var minhaPromisse = function() {
//   return new Promise(function(resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api.github.com/users/lucasrrocha');
//     xhr.send(null);

//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         } else {
//           reject('Erro na requisição');
//         }
//       }
//     };
//   });
// };

// minhaPromisse()
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.warn(error);
//   });

//AXIOS

// axios
//   .get('https://api.github.com/users/lucasrrocha')
//   .then(function(response) {
//     console.log(response.data.avatar_url);
//   })
//   .catch(function(error) {
//     console.warn(error);
//   });

//Exercicio 1

// Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2 segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de idade o resultado deve cair no .then, caso contrário, no .catch

// function checaIdade(idade) {
//   // Retornar uma promise
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       return idade >= 18 ? resolve() : reject();
//     }, 2000);
//   });
// }

// checaIdade(17)
//   .then(function() {
//     console.log('Maior que 18');
//   })
//   .catch(function() {
//     console.log('Menor que 18');
//   });

//Exercicio 2 e 3

// Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar onome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conformeURL abaixo) os dados de repositórios do usuário e mostrá-los em tela:

// URL de exemplo: https://api.github.com/users/diego3g/repos
// Basta alterar "diego3g" pelo nome do usuário.

var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepositories(repositories) {
  listElement.innerHTML = '';

  for (repo of repositories) {
    const textElement = document.createTextNode(repo.name);
    const liElement = document.createElement('li');

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}

function renderLoading(loading) {
  listElement.innerHTML = '';

  var textElement = document.createTextNode('Carregando...');
  var loadingElement = document.createElement('li');

  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);
}

function renderError(loading) {
  listElement.innerHTML = '';

  var textElement = document.createTextNode('Error! - User not found');
  var errorElement = document.createElement('li');

  errorElement.appendChild(textElement);
  listElement.appendChild(errorElement);
}

function listRepositories() {
  var user = inputElement.value;

  if (!user) return;

  renderLoading();

  axios
    .get('https://api.github.com/users/' + user + '/repos')
    .then(function(response) {
      renderRepositories(response.data);
    })
    .catch(function() {
      renderError();
    });
}
