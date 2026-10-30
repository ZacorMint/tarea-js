for (let nun=2; nun <=1000; nun++){
    let primo = true;

for (let i=2; i <nun; i++){
    if (nun % i===0){
        primo= false;
        break;
    }
}
    if (primo){
        console.log(nun);
    }
}