const prompt = require("prompt-sync")();
let n = parseInt(prompt("Digite n: "));
for (let i = 1; i <= n; i++) {
 let espacios = "";
 let numeros = "";
 for (let e = 0; e < n - i; e++) espacios += " ";
 for (let j = 1; j <= i; j++) numeros += j;
 for (let j = i - 1; j >= 1; j--) numeros += j;
 console.log(espacios + numeros);
}
