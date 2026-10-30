const prompt = require("prompt-sync")();
let n = 26; 

for (let i = 1; i <= n; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        let codigoLetra = 90 - (j - 1);
        linea += String.fromCharCode(codigoLetra);
    }
    console.log(linea);
}