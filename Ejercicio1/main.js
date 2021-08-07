// 1.Realizar un programa que permita leer 2 números diferentes y 
// nos diga cual es el mayor de los 2 números.

let num1 = parseInt(prompt("Ingrese el numro 1 para realizar su verificacion"));
let num2 = parseInt(prompt("Ingrese el numro 2 para realizar su verificacion"));
const condicion = (num1,num2)=>{
    return (num1>=num2)
            ? `El numero ${num1} es mayor que el numero ${num2}`
            : `El numero ${num2} es mayor que el numero ${num1}`;
}
console.log(condicion(num1,num2));
