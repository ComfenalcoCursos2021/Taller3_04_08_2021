// 2.	Realice un programa que calcule el máximo de 
// N números leídos desde teclado.

let condicion=0;
parar:
while(true){
    let opcion = parseInt(prompt("Quieres ingresar un numero \n1.SI \n2.NO"));
    switch (opcion) {
        case 1:
            let numero = parseInt(prompt("Ingrese el numero"));
            if(numero>=condicion){
                condicion = numero;
            }
            break;
        default:
            alert("Gracias por usar nuestro sistema");
            break parar;
    }
}
console.log(condicion);
