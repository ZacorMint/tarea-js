const prompt = require("prompt-sync")();
let nun = parseInt(prompt("Digite un entero: "));
while (isNaN(nun) || nun < 0) {
 nun = parseInt(prompt(nun+" no es un entero valido. digite otro numero: "));
}
let factorial = 1n;
for (let i = 2n; i <= BigInt(nun); i++) {
 factorial *= i;
}
console.log(nun + "! = " + factorial + " for");
let fact2 = 1n;
let k = BigInt(nun);
while (k > 1n) {
 fact2 *= k;
 k--;
}
console.log(nun + "! = " + fact2 + " while");