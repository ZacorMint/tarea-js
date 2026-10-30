const prompt = require("prompt-sync")();
let nun = parseInt(prompt("Digite un numero mayor que 6: "));
while (isNaN(nun) || nun <= 6) {
 nun = parseInt(prompt("es menor a 6 digite otro numero: "));
}
let multiplos = "";
for (let i = 6; i <= nun; i++) {
 if (i % 3 === 0) {
 if (multiplos !== "") multiplos += " ";
 multiplos += i;
 }
}
console.log(multiplos);