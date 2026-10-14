let totalCompra =52000;
let esCliente = true;
let descuento = 0;

if (totalCompra > 100000) {
    if (esCliente) {
    descuento = totalCompra * 0.2;
} else {
    descuento = totalCompra * 0.1;
    }
} else {
    if (esCliente) {
    descuento = totalCompra * 0.05;
} else {
    descuento = 0;
    }
}
let vap=totalCompra - descuento;
console.log("Descuento aplicado: " + descuento);
console.log("Total a pagar: " + vap);