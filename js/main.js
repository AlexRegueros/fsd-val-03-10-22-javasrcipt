

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



// let number ="";
// let resultado = "";

// number = parseInt(prompt("Dime el precio del producto"));

// resultado = ((number * 0.21) + number);

// console.log("El precio total con Iva es de ",resultado,"€");

// // ¿Por qué falla al meterle un número decimal?



// CREAMOS UN ARRAY
// let y1 = ["x","x","o"];
// let y2 = ["x","o","x"];
// let y3 = ["o","","o"];

// let matriz = [y1,y2,y3];

// for(let i = 0; i < matriz.length; i++){

//     // console.log(matriz[i]);

//     if(matriz[2][1] == "" ){
//         console.log("Aqui se podría marcar una casilla");
//     };
  

    
// }
//   // para pintar la posición que yo quiera utilizo if(queremos acceder a la x de y3)
// // console.log(matriz[2][1]);


// let y1 = ["x","x","o"];
// let y2 = ["x","o","x"];
// let y3 = ["o","","o"];

// let matriz = [y1,y2,y3];

// for(let i = 0; i < matriz.length; i++){

//     // console.log(matriz[i]);

//     if(matriz[2][1] == "" ){
//         console.log("Aqui se podría marcar una casilla");
//     };
// };


////////////////////////////////////////

// let frutas = ["manzana", "platano", "pera", "melon", "melocoton"];
// let bebidas = ["agua","fanta","cerveza","vino","ron"]


// // METER UN ARRAY DENTRO DE OTRO :CONCATENAR.
// let bebidasFrutas = frutas.concat(bebidas)



    // NOS DAN NUMERO DE DNI Y LETRA Y COMPROBAR SI COINCIDE, EL NUMERO DE DNI ENTRE 23 TIENE QUE 
    // DAR DE RESTO 0


// let array = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H",
//     "L","C","K","E","T"];
// let number = parseInt(prompt("Dame el numero"));
// let letra = parseInt(prompt("Dame el numero"));
// letra = letra.toUpperCase();

// function DNI(number,letra) {
//     let modulo = number % 23;
//     if (letra == array[modulo]) {
//         console.log("es correcto")
//     } else {
//          console.log("no es correcto")
//     }

//     }
    

// // Aqui comprobamos nosotros que letra debería de tener con ese número de Dni
//     let dniNumber = parseInt(prompt("Introduce el número del dni, sin letra"));
//     let modulo = dniNumber % 23;
//     let letter = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"]
//     let dniLetter = letter[modulo];
//     console.log("La letra es " + dniLetter);


// Array

// let carlos = ["carlos","27","valencia","videojuegos"];

// console.log(carlos[1]);


// // OBJETOS


// let alumnoCarlos = {
//     nombre : "carlos",
//     edad: 27,
//     ciudad: "valencia",
//     hobbie: ["musica","videojuegos","leer"], 
//     amigos: {                                   
//         amigo1: "jose",
//         amigo2: "alberto",
//     }
// };

// console.log(alumnoCarlos.ciudad);
// console.log(alumnoCarlos.hobbie[0]);
// console.log(alumnoCarlos.amigos.amigo2);

// -------------------------


// let objetoPeliculas = {

//     pelicula1 : {
//         titulo : "El Rey Leon",
//         edad : 3
//     },

//     pelicula2 : {
//         titulo : "300",
//         edad : 18
//     },

//     pelicula3 : {
//         titulo : "Titanic",
//         edad : 8
//     },

//     pelicula4 : {
//         titulo : "Gladiator",
//         edad : 16
//     }  

// }

// let peli = prompt("¿Qué película quieres ver?");
// let edad = parseInt(prompt("¿Que edad tines?"));
// switch


// let cantidadDados = parseInt(prompt("¿Cuantos dados quieres tirar?"));
// let cantidadCaras = parseInt(prompt("¿Cuantas caras por dado?"));

// let dado1 = parseInt((Math.random() * 6) + 1) ;
// let dado2 = parseInt((Math.random() * 6) + 1) ;
// let dados = [];

// for (let i = 0; i < cantidadDados ; i ++) {
//     dados.push(parseInt(Math.random() * cantidadCaras) +1)
// }

// console.log("el primer dado",dado1);
// console.log("el segundo dado",dado2);

// Propuesta de Ejercicio - Crea una variable con un número del 1 al 9, despues sírvete de un bucle while para generar su tabla de multiplicar por console.log

// let contador = 1;

// let tabla = parseInt(prompt("quiero la table del..."));

// while(contador<=10){

//     console.log(tabla , "por" , contador , "es", contador * tabla);

//     contador++;
// }

// let cantidadNumeros = parseInt(prompt("Cuantos numeros quieres meter"));
// let numeros = parseInt(prompt("que numeros"));
// let contador = 0;
// let array = [];

// while(contador <= cantidadNumeros) {
    
//     console.log(numeros);

//     contador ++;
// }


// for (let i = 0; i < array.length; i++) {
//     array.push(parseInt (numeros));
    
// }

// let max = Math.max(...array);
// let min = Math.min(...array);

// console.log("El máximo es ", max);
// console.log("El mínimo es ", min);




// let dia = "jueves";

// let mes = "octubre";

// function Fecha {

//     let dia = "Miercoles";
//     let mes = "Noviembre";

//     console.log = (dia);
//     console.log (mes);

// };

// Fecha();

// console.log(dia);


//// FUNCTIONS VS  ARROW-FUNCTIONS



// //// FUNCTIONS
// function Multiplicar (numero1,numero2){
//     return numero1 * numero2;

// };

// /////ARROW-FUNCTIONS

// const Multiplicar = (numero1,numero2) => {
//     return numero1 * numero2;
// };

// const Dividir = (numero1,numero2) => numero1/numero2;



// Aqui declaramos la función de un objeto.
// const Pokemon = nombre => ({monster : nombre});

// let boton = Pokemon ("Charmander");

// console.log(boton);



//USO PRÁCTICO DE ARROW FUNCTIONS... te recorre el array, lo modifica y lo sube a una nueva variable [array].

// let fruta = ["manzana", "pera", "fresa", "platano", "albaricoque"];

// let frutasPlurales = fruta.map(postre => postre + "s");

// console.log(frutasPlurales);


// let numeros = [25,38,42,57,112]

// let numerosMapeados = numeros.map(cifra=> cifra * 3);
   
// console.log(numerosMapeados);



// const PrecioFinalImpuesto = (precio,impuesto = 1.21) => precio + (precio * impuesto)

// console.log(PrecioFinalImpuesto(1200));



//SACAR NUMEROS ALEATORIOS CON PREFIJO RX.
// const Robot = (nombre = "RX-") => nombre + (parseInt(Math.random() * 999));

// console.log(Robot());


// *SPREAD
// const Esparcir = (name, ps, atk, def, speed) => {
//     console.log("Nombre: ", name);
//     console.log("Vida: ", ps);
//     console.log("Ataque: ", atk);
//     console.log("Defensa: ", def);
//     console.log("Velocidad: ", speed);
//     }

//  let Pokemon = ["Pikachu", 35, 55, 40, 90]

//  //mal
//  // Esparcir(Pokemon[0],Pokemon[1],Pokemon[2],Pokemon[3],Pokemon[4]);


//  //bien
//     Esparcir(...Pokemon)
//     *le mete el array pokemon a toda la constante Esparcir.



 //*REST

//  Const Agrupar = (...argumentos) =>{
//     console.log(argumentos);
//     };

//     Agrupar(1, 2, 3, 4, 5); 
//     Agrupar(1,2);
//     Agrupar(1,0,1,0,1,0,1,1,1,);


//  Se propone generar una funcion que usando REST, le pasamos varios argumentos correspondientes a las habilidades de un luchador o luchadora, 
//  y posteriormente las mostrará por console.log , a cada habilidad le sumará un valor random del 1 al 10.
  
// const Agrupar = (...argumentos) => {
//     let aleatorio =(Math.floor(Math.random() *10));

//     let nuevoArgumentos= argumentos.map (numeros => numeros + aleatorio);

//     console.log(nuevoArgumentos);
// };


// Agrupar(50,45,60,90);



// *PARA METER EN UN STRING UNA VARIABLE
// let favorito = prompt ("dime tu compañero favorito")

// console.log(`HOLA ${favorito}`);



// let comida = ["spaghetti","sushi","paella","arroz","pizza"];

// let [uno,dos,tres,cuatro,cinco] = comida;

// console.log(dos);


// let musica = {
//     grupo1: "Pink Floyd",
//     grupo2: "Joan Macarra",
//     grupo3: "Bad Bunny",
// };


//creo la destrucuración del objeto

// let {grupo1: rock, grupo2: punk, grupo3: trap_latino} = objeto;

// console.log(rock, punk, trap_latino);




// Crea una lista vacía, rellénala.
// Añade 3 funciones que realicen:
//     - Añadir la lista
//     - Mostrar el valor más pequeño
//     - Multiplicar por 3 cada valor


// let lista = [23,345,1,34756,2,3,4,5,6,7,8,9];

// const AnadirLista = (valor) => {
//     lista.push(valor)
//     console.log("Valor añadido", lista)
// }

// const ValorMin = () => {
//     console.log("El valor más bajo es", Math.min(...lista))
// }

// const Multiplicar = (num) => { 
//     let result = lista.map(elemento => elemento * num)
//     console.log("La nueva lista es:", result)
// }

// let opcion = prompt("Elige la funcion que quieres, AnadirLista, ValorMin o Multiplicar")

// switch (opcion) {
//     case "AnadirLista":
//         AnadirLista(10)
//         break
//     case "ValorMin":
//         ValorMin()
//         break
//     case "Multiplicar":
//         Multiplicar(10)
//         break
// }




////BUCLE FOR SIMPLE

// for(let i=0; i<= 10; i++){

// };


// ///BUCLE FOR OF ( para recorrer un array con for mejor este)

// let videojuegos = ["dota2", "quake" , "doom"];

// for(let joc of videojuegos){
//     console.log(joc);
// };



//BUCLE FOR IN (se utiliza muy poco)
// let videojuegos = ["wow","diable II", "overwatc"];

// for(let indice in videojuegos){
//     console.log(indice);
// };


// ///BUCLE FOR EACH (es muy similar al .map, se utiliza más el .map)

// let videojuegos = ["fifa 98", "cod", "buscaminas"]

// videojuegos.forEach(xoc => console.log(xoc));






//OBJETOS LITERALES (la clase el plano del objeto,el objeto es lo que quiero crear y 
// la instancia es el proceso)

// let jose = {
//     edad : 21,
//     nacionalidad : "Española",
//     nombre : "Jose",
//     hobbies : {
//         hobbie1 : "anime",
//         hobbie2 : "lol",
//         hobbie3 : "mascotas",
//         hobbie4 : "cocinar"

//     }

// }