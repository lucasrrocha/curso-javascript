// Variáveis e dados

// var nome = "Lucas";
// var idade = 26;
// var peso = 75.6;
// var humano = true;

// var alunos = ["Lucas", "Gabriel", "Diego"];

// var aluno = {
//   nome: alunos[0],
//   idade: 26,
//   peso: 75.6,
//   humano: true,
// };

// console.log(alunos[0]);
// console.log(aluno.nome );

// Operações matematicas

// var x = 14,
//   y = 5;

// x += 3;
// x -= 3;
// x *= 3;
// x /= 3;

// var resultado = x + y;

// console.log(x);
// console.log(resultado);

// Funções

// function soma(numero1, numero2) {
//   var resultado = numero1 + numero2;

//   return resultado;
// }
// var resultado = soma(1, 2);
// console.log(resultado);

// Condicionais

// function retornaSexo(sexo) {
// M, F
//Masculino, Feminino

// if (sexo === "M") {
//   return "Masculino";
// } else if (sexo === "F") {
//   return "Feminino";
// } else {
//   return "Outro";
// }

//   switch (sexo) {
//     case "M":
//       return "Masculino";
//     case "F":
//       return "Feminino";
//     default:
//       return "Outro";
//   }
// }

// var resultado = retornaSexo("F");
// console.log(resultado);

//Operadores Lógicos

//AND, OR, NOT

// var sexo = "F",
//   idade = 17;

// if (sexo === "M" || idade >= 18) {
//   console.log("OK");
// }

// var sexo = "F";

// if (sexo !== "M") {
//   console.log("OK");
// }

// var sexo = "F";
// var masculino;

// if (sexo === "M") {
//   var masculino = true;
// } else {
//   var masculino = false;
// }

// Isso é igual a isso

// var sexo = "M";

// var masculino = sexo === "M";

// console.log(masculino);

// Condição ternária

// var sexo = 'M';

// if (sexo === 'M') {
//   return 'Masculino';
// } else {
//   return 'Feminino';
// }

// Isso é a mesma coisa disso

// var retorno = sexo === 'M' ? 'Masculino' : 'Feminino';

// console.log(retorno);

// Estruturas de repetição

//for, while

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

// var j = 0;
// while (j <= 8) {
//   console.log(j);

//   j++;
// }

// intervalo e timeout
// function exibeAlgo() {
//   console.log('Hello World');
// }

// setTimeout(exibeAlgo, 5000);

//Exercicios: Módulo 1
//1º Exercicio
//Crie uma função que dado o objeto a seguir:

// var endereco = {
//   rua: 'Rua dos pinheiros',
//   numero: 1293,
//   bairro: 'Centro',
//   cidade: 'São Paulo',
//   uf: 'SP',
// };

//Retorne o seguinte conteúdo:
//O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" comnº 1293.

// console.log(
//   'O usuário mora em ' +
//     endereco.cidade +
//     ' / ' +
//     endereco.uf +
//     ', no bairro ' +
//     endereco.bairro +
//     ', na rua ' +
//     endereco.rua +
//     ' com o nº ' +
//     endereco.numero + '.'
// );

// Exercicio 2
//Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

// function pares(x, y) {
//   // código aqui
//   while (x <= y) {
//     if (x % 2 == 0) {
//       console.log(x);
//     }
//     x++;
//   }
// }
// pares(32, 321);

//Exercicio 3
//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"e retorna um booleano true/false caso exista ou não.

// function temHabilidade(skills) {
//   // código aqui
//   //Esse eu fiz
//   // var habilidade = skills.indexOf('Javascript');
//   // // if (habilidade >= 0) {
//   // //   console.log('true');
//   // // } else {
//   // //   console.log('false');
//   // // }
//   // var skill = habilidade >= 0 ? 'true' : 'false';
//   // console.log(skill);
//   //Solução Diego
//   // return skills.indexOf('Javascript') !== -1;
// }
// var skills = ['Javascript', 'ReactJS', 'React Native'];
// console.log(temHabilidade(skills));
// // true ou false

//Exercicio 4
//Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

// function experiencia(anos) {
//   // código aqui
//   if (anos >= 0 && anos <= 1) {
//     return 'Iniciante';
//   } else if (anos > 1 && anos <= 3) {
//     return 'Intermediário';
//   } else if (anos > 3 && anos <= 6) {
//     return 'Avançado';
//   } else {
//     return 'Jedi Master';
//   }
// }

// var anosEstudo = 8;
// var exp = experiencia(anosEstudo);
// console.log(exp);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

//Exercicio 5
//Dado o seguinte vetor de objetos:

// var usuarios = [
//   { nome: 'Diego', habilidades: ['Javascript', 'ReactJS', 'Redux'] },
//   { nome: 'Gabriel', habilidades: ['VueJS', 'Ruby on Rails', 'Elixir'] },
// ];

//Escreva uma função que produza o seguinte resultado:
//O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
// function skills(array) {
//   for (let retorno of array) {
//     console.log(
//       'O ' +
//         retorno.nome +
//         ' possui as habilidades: ' +
//         retorno.habilidades.join(','),
//     );
//   }
// }

// skills(usuarios);
