import { q1 } from "./questao1";
import { q2 } from "./questao2";
import { q3 } from "./questao3";
import { q4 } from "./questao4";
import { q5 } from "./questao5";
import { q6 } from "./questao6";

let a = ["Banana", "Maçã", "Abacaxi"];
let b = ["Banana", "Maçã", "Abacaxi"];

const array1 = ["abc", "def", "ghi"];
const array2 = ["abc", "def", "ghi"];

const frutas = ["maçã", "banana"];
const cores = ["verde", "azul", "laranja"];

let cidade = {
  alcunha: "A terra que ensinou a Paraíba a ler.",
  coodenadas: {
    latitude: [6, 53, 24],
    longitude: [38, 33, 43],
  },
  nome: "Cajazeiras",
  estado: "Paraíba",
};

const restaurantes = [
  { cidade: "Cajazeiras", nome: "Burgdega" },
  { cidade: "Sousa", nome: "Dino's" },
  { cidade: "Cajazeiras", nome: "Avenida" },
];

// questão 1
console.log(`Questão 1: ` + q1({ a, b }));

// questao 2
console.log(`Questão 2: ` + q2({ a, b }));

//questao 3
console.log(`Questão 3: ` + q3(array1, array2));

// questao 4
console.log(`Questão 4: ` + q4(frutas, cores));

// questao 5
console.log(`Questão 5: ` + q5(cidade));

// questao 6
console.log(`Questão 6: ` + JSON.stringify(q6(restaurantes)));
