let n = 5;
for (let fila = 1; fila <= 2 * n - 1; fila++) {
 let k = fila <= n ? fila : 2 * n - fila;
 console.log(" ".repeat(n - k) + "*".repeat(2 * k - 1));
}
