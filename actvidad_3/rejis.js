const prompt = require("prompt-sync")();

let precio;
let ac=0;
let i=0;
let pago;
let cambio;
console.log("Bienvenido a C-MARK");
do {
    precio= Number(prompt("ingrese el precio del producto o 0 para finalizar "));
    
    if(isNaN(precio)){
        console.log("no es un numero");
    }else if(precio<0){
            console.log("el precio no puede ser negativo");    
    } else if(precio>0) { 
        ac=ac+precio;
    i++;    
} 
   
}while(precio!==0);
 console.log("total a pagar por "+i+" productos es "+ac+"$");
    do {
        pago= Number(prompt("ingrese con cuanto dinero va a pagar "));
     if (isNaN(pago)){
        console.log("no es un numero");
    }
    else if (pago<ac){
        console.log("pago insuficiente");
    }
    else{
        cambio=pago-ac;
        console.log("su cambio es "+cambio+"$");
    } 
} while (isNaN(pago) || pago < ac);