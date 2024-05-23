
//ejercicios clase 8
let nombre = "Pedro";
let apellido = "Reta";
console.log(nombre + " " + apellido);

//otro ejercicio clase 8
let numberone=120;
let numbertwo=20;
let resultsuma= numberone + numbertwo;
let resultresta = numberone - numbertwo;
let resultmulti = numberone * numbertwo;
let resultdivision = numberone / numbertwo;
console.log("Suma:", resultsuma);
console.log("Resta:", resultresta);
console.log("Multiplicacion:", resultmulti);
console.log("Division:", resultdivision);



//tarea clase 11

let topping = "Oreo";
let precio = 0;
let precioFinal = 0;
let helado = 200;

if(topping == "Oreo") {
    precio = 10;
} else if(topping == "KitKat") {
    precio = 15;
} else if(topping == "Kinder") {
    precio = 25;
} else {
    console.log("No tenemos este topping");
}

precioFinal = helado + precio;
console.log ("El helado cuesta $" + precioFinal);

//segunda tarea clase 11

let pedido = "Carne"; 

switch (pedido) {
    case "Carne" :
        console.log("Bebida vino tinto");
    break;
    
    case "Pescado" :
        console.log("Bebida vino blanco");
    break;

    case "Verdura" :
        console.log("Bebida agua");
    break;
    default:
        console.log("Elija carne, pescado o verdura");
}

//tercera tarea clase 11

let flores = ["Margaritas", "Rosas", "Azar"];
console.log(flores);
console.log(flores[0]);
console.log(flores[2]);
console.log("Cantidad de flores:", flores.length);

flores.push ("Malvon");

for(let i=0; i< flores.length; i++){
    console.log(flores[i])
}


// cuarto tarea clase 11

// Declarar variables
let numero = 1;  // Número inicial
let suma = 0;    // Variable para almacenar la suma

// Bucle while
while (numero <= 10) {
  suma += numero;  // Sumar el valor actual de 'numero' a 'suma'
  numero++;        // Incrementar 'numero' en 1
}

// Mostrar el resultado
console.log("La suma de los números del 1 al 10 es: " + suma);


// clase 12

let resultado;
let plan = 3;
let finde =5;
function plan_y_finde(){
    resultado=plan+finde;
    alert("El resultado es "+resultado);
}
plan_y_finde();

//ejercicio clase 12

// Solicita al usuario que introduzca un número entero
let num = prompt("Introduce un número entero");

// Llama a la función parImpar y guarda el resultado
let resul = parImpar(num);

// Muestra el resultado en una alerta
alert("El número " + num + " es " + resul);

// Define la función parImpar
function parImpar(num) {
  if (num % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

//segundo ejercicio
let nom = prompt("Introduce un nombre");
function saludo() {
    if (nom) {
        alert ("Bienvenido " + nom)
    }
    else {
        alert ("Para continuar debe ingresar un nombre");
    }
} 

saludo();