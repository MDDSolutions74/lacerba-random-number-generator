// console.log('Ciao a tutti')


//* Questa è la classica funzione per generare dei numeri randomici tra 0 e il numero che è inserito nel calcolo, escluso per cui se il numero è 10 avremo un numero randomico tra 0 e 9
// function randomNumberGenerate() {
//   const randomNumber = Math.trunc(Math.random() * 10);
//   return randomNumber;
// }
// for (let i = 0; i < 10; i++) {
//     console.log(`My number`, randomNumberGenerate());
//   }
  

//* Altro modo con utilizzo dinamico di un massimo
// function RNG(max: number): number {
//   const randomNumber = Math.trunc(Math.random() * max);
//   return randomNumber;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(`My number`, RNG(10));
// }

//* Altro modo con utilizzo dinamico di un massimo e di un minimo con il massimo escluso
function RNG(min: number,max: number) {
  const rng = Math.random();
  return Math.trunc(rng * (max-min) + min);

}

for (let i = 0; i < 10; i++) {
  console.log(`My number`, RNG(0, 10));
}
