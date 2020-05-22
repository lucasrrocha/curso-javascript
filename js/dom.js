//A DOM basicamente é a arvore de elementos dentro do nosso HTML. Todos os elementos visualmente dispostos em tela

// function mostraAlerta() {
//   alert('Botão clicado');
// }

// var inputElement = document.getElementById('nome');
// var inputElement = document.getElementsByTagName('input')[0];
// var inputElement = document.getElementsByClassName('nome')[0];
// var inputElement = document.querySelector('input[name = nome]');
// var inputElement = document.querySelector('input[name = nome]');
// var btnElement = document.querySelector('button.botao');

// btnElement.onclick = function() {
//   var text = inputElement.value;
//   alert(text);
// };

// var linkElement = document.createElement('a');
// linkElement.setAttribute('href', 'https://google.com');
// // linkElement.setAttribute('class', 'ancora');

// var textElement = document.createTextNode('Acesse o Google');
// linkElement.appendChild(textElement);

// var containerElement = document.querySelector('#app');
// containerElement.appendChild(linkElement);

// var inputElement = document.querySelector('#nome');
// containerElement.removeChild(inputElement);

// var boxElement = document.querySelector('.box');

// boxElement.style.width = '100px';
// boxElement.style.height = '100px';
// boxElement.style.backgroundColor = '#000';

//Exercicios módulo 2
//Exercicio 1
//Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadradovermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deveaparecer na tela.

// var buttonElement = document.querySelector('.botao');
// var divElement = document.querySelector('#app');

// buttonElement.onclick = function() {
//   var createBox = document.createElement('div');
//   var boxElement = createBox.setAttribute('class', 'box');

//   createBox.style.width = '100px';
//   createBox.style.height = '100px';
//   createBox.style.backgroundColor = '#F00';

//   divElement.appendChild(createBox);
// };

//Exercicio 2
//Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima dealgum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
// var newColor = getRandomColor(); // #E943F0

// var buttonElement = document.querySelector('.botao');
// var divElement = document.querySelector('#app');

// buttonElement.onclick = function() {
//   var createBox = document.createElement('div');

//   createBox.style.width = '100px';
//   createBox.style.height = '100px';
//   createBox.style.backgroundColor = '#F00';

//   createBox.onmouseover = function() {
//     createBox.style.backgroundColor = newColor;
//   };
//   createBox.onmouseleave = function() {
//     createBox.style.backgroundColor = '#F00';
//   };

//   divElement.appendChild(createBox);
// };

//Exercicio 3
//A partir do seguinte vetor:

// var nomes = ['Diego', 'Gabriel', 'Lucas'];

// var listElement = document.querySelector('ul');

// for (nome of nomes) {
//   var liElement = document.createElement('li');
//   var textElement = document.createTextNode(nome);

//   liElement.appendChild(textElement);
//   listElement.appendChild(liElement);
// }

//Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
//• Diego
//• Gabriel
//• Lucas

//Exercicio 4
//Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:

//<input type="text" name="nome">
//<button onClick="adicionar()">Adicionar</button>
//Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
// nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aosdemais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.

// var nomes = ['Diego', 'Gabriel', 'Lucas'];

// var listElement = document.querySelector('ul');
// var inputElement = document.querySelector('input');

// function addItem(text) {
//   var liElement = document.createElement('li');
//   var textElement = document.createTextNode(text);

//   liElement.appendChild(textElement);
//   listElement.appendChild(liElement);
// }

// function adicionar() {
//   addItem(inputElement.value);
//   inputElement.value = '';
// }

// for (nome of nomes) {
//   addItem(nome);
// }
