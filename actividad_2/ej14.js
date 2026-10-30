const prompt = require("prompt-sync")();
let m = parseInt(prompt("Numero de Filas: "));
let n = parseInt(prompt("Numero de Columnas: "));
let car = prompt("Carácter: ");
for (let fila = 1; fila <= m; fila++) {
 let linea = "";
 for (let col = 1; col <= n; col++) {
 linea += car;
 }
 console.log(linea);
}