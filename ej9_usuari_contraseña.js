let user="admin";
let password="contrasena";
let userin="admin";
let passwordin="contrasena";
if (user==userin){
    if (password===passwordin){
        console.log("acceso concedido");
    } else {
        console.log("contraseña incorrecta");
   } 
}else {
    console.log("usuario no encontrado");
}
