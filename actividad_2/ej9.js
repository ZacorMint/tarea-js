let sum = 0;
let par = 2;
let contador = 0;
while (contador < 30) {
 sum += par;
 par += 2;
 contador++;
}
console.log("Suma de los 30 primeros números pares es", sum);