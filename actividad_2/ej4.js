let num_lineas = 5;
let espacio = " ";
let asterisco =" ";
for (let fila=1; fila<=num_lineas; fila++) {
for (let e=num_lineas-fila; e>0; e--) {
espacio += " ";
}
for (let x = 1; x < 2*fila; x++) {
asterisco += "*";
}
console.log(espacio + asterisco);
espacio =  " ";
asterisco = " ";
}for (let fila=num_lineas; fila>=1; fila--) {
for (let e=num_lineas-fila; e>0; e--) {
espacio += " ";
}
for (let x = 1; x < 2*fila; x++) {
asterisco += "*";
}
console.log(espacio + asterisco);
espacio = " ";
asterisco = " ";
}