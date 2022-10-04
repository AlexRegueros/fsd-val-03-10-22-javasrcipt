
// var academia = "Geeks Hub"

// console.log(academia)

// var edad = 30

// console.log(edad)


// var experiencia = true

// console.log(experiencia)




// var numero1 = 50;

// var numero2 = 73;

// var resultado = numero1 + numero2;

// console.log(resultado);


// var edad = 25;

// if( edad >= 18){
//  console.log("puedes ver la pelicula")

// }else{
//     console.log("no puedes verla")

// }
// ()

// var mes ="agosto";

// switch(temporada){

//     case "Diciembre":
//     case "Enero":
//     case "Febrero":
//         console.log("Estamos en invierno");
//         break;
    
//     case "Marzo":
//     case "Abril":
//     case "Mayo":
//         console.log("Estamos en Primavera");
//         break;

//     case "Junio":
//     case "Julio":
//     case "Agosto":
//         console.log("Estamos en Verano");
//         break;

//     case "Septiembre":
//     case "Octubre":
//     case "Noviembre":
//         console.log("Estamos en Otoño");
//         break;
// }

// var nombre = "Manuel";
// var edad = 26;

// if((nombre == "Jesus") && (edad == 26)){
//     console.log("Que bien me cae este chico");
    
    
// }else{
//     console.log("me cae fatal");
// }




//  var numero1 = 10;
//  var numero2 = 20;
//  var resultado = numero1 > numero2

//  console.log(resultado);


//  Este esta mejor que el de arriba

// var numero1 = 10;
// var numero2 = 20;

// if(numero2 > numero1){
//     console.log ("Numero 2 es mayor");
// }
//  else if (numero2 == numero1) {
//         console.log ("son iguales")
//     }
//     else {
//         console.log ("Numero1 es mayor");
//     }



// var nombre = "Alejandro";

// if(nombre== "Alejandro"){
//     console.log("Bienvenido Alejandro");
// }


// Este está mejor que el de arriba
// var nombre = "Alejandro";

// console.log("Bienvenid@", nombre);
// console.log("Bienvenido" + nombre);
// console.log(`Bienvenido ${nombre}`);



// var nombre = prompt ("¿Cuál es tu nombre?")

// if(nombre== "Alex"){
//     console.log("Bienvenido Ana");
// }



// Ternaria , lo que observamos detrás del interrogatorio se guardará si es true, 
// si no es true se guardará lo que va detrás de los :

// let edad = 16;

// let resultado = (edad <= 16) ? "no puedes conducir en USA" : "Si puedes";





// let dinero = 50;

// while(dinero >= 0){

//     console.log("Estoy comprando.... y me quedan", dinero, "euros");

//     dinero --; 
// }


// Propuesta de Ejercicio - Crea una variable con un número del 1 al 9, despues sírvete de un bucle while para generar su tabla de multiplicar por console.log

// let contador = 1;

// let tabla = parseInt(prompt("quiero la table del..."));

// while(contador<=10){

//     console.log(tabla , "por" , contador , "es", contador * tabla);

//     contador++;
// }




// DO WHILE : La primera vez siempre entra en el bucle aunque la condición no se cumpla.

// let numero = 36;

// do{


//     console.log("David es un genio")
// }while ( numero < 36);




// BUCLE FOR (Tabla de multiplicar del 3)


// let tabla = 3;

// for(let i = 1; i<=10; i++){

// console.log(tabla * i);

// }


//FUNCIONES: (La funcion simpre la primera en mayusculas)

//esto es la declaración de la función
// function Sumar(num1,num2){

//     let resultado = num1 + num2;

//     return resultado;

// };

//aquí es donde se ejecuta: 

// let resultadoDeSumar = Sumar(3,4);
// let resultadoDeSumarDeNuevo = Sumar(6,7);

// console.log(resultadoDeSumar);





// copiar aqui lo de david de report que coincida con esta linea






// FUNCIÓN QUE SE LLAME DIVIDIR PASANDOLE DOS PARÁMETROS.

// function Dividir(num1 num2){

//     let resultado = num1 / num2
//     return resultado;
// }

// let resultadoDeDividir = Dividir(8,2)

// console.log(resultadoDeDividir);



// FUNCIÓN QUE pregunte el numero y a cuanto lo quieres elevar.

// function Elevar(){
//     let num1 = parseInt(prompt("Dime el numero base"));
//     let num2 = parseInt(prompt("Dime el exponente"));

//     let resultado = num1 ** num2;

//     return console.log(resultado);

// };

// Elevar();



// SERIA OTRA FORMA DE PONER LO DE ARRIBA

// function Elevar (pepe,manolo){
//     return console.log(pepe ** manolo);

// }

// let num1 = parseInt(prompt("Dime el numero base"));
// let num2 = parseInt(prompt("Dime el exponente"));

// Elevar(num1,num2);






// ARRAY!!!

// let manelHobbie1 = "Tocar el bajo";
// let manelHobbie2 = "Leer";
// let manelHobbie3 = "cine";
// let manelHobbie4 = "programar";

// let manelArrayHobbies = ["tocar el bajo", "leer", "cine", "programar"]

// console.log(manelArrayHobbies[2]);



// METER UN FOR EN ARRAY!!!
// let numeros = [];

// for(let i=1; i <=100; i++){


//     numeros.push(i);
// };

// console.log(numeros);


// let alumnosAmigos = ["Alex Lopez", "Joan", "Marta", "Elvis", "Jesus", "Julio Cesar"];

// for( let i = 0; i < alumnosAmigos.length; i++){
//     console.log("Hola", alumnosAmigos[i]);
// };




// EJERCICIO 5
// Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
// también debemos indicarlo.

// let number = 9;

// if(number % 2 == 0){
//     console.log(number,"es divisible entre 2");
// }else{
//     console.log(number, "no es divisible entre 2")
// }


// Lee un número por teclado que pida el precio de un producto (puede tener
//     decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
//     del 21%



let number = "";
let resultado = "";

number = parseInt(prompt("Dime el precio del producto"));

resultado = ((number * 0.21) + number);

console.log("El precio total con Iva es de ",resultado,"€");

// ¿Por qué falla al meterle un número decimal?