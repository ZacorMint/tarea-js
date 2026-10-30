let num_lineas = 5;
let asterisco =" ";
for (let fila=1; fila<=num_lineas; fila++) {
    for (let e=num_lineas-fila; e>0; e--) {
    }
    for (let x = 1; x < 2*fila; x++) {
        asterisco += "*";
    }
    console.log(asterisco);
    asterisco = " ";
}
