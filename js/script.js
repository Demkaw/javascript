const name = "Dem Escamilla";

let age = 20; 

age = 21;

let color = "Morado";

let proyecto = "Diseño Web";

function mostrarcolor() {
    console.log("Color favorito: " + color);
}

function mostrarVariable(Variable) {
    console.log("Variable mostrada: " + Variable)
}

function evaluarEdad(age) {
    if (age > 18) {
        console.log("Cumple con la mayoría de edad")
    }
    else if (age < 18) {
        console.log("No cumple con la mayoría de edad")
    }
    else if (age === 18) {
        console.log("Tienes exactamente 18")
    }
    else {
        console.log("No cumple los requisitos")
    }
}

function mostrarNumeros() {
   
  let i = 0;
    do {
        console.log(i);
        i++;
    }
    while (i < 11);

     
    let numero = 2;

    while (numero <= 10) {
    console.log(numero);
    numero += 2;
    }

     
    let Proyectos = ["Principios de la animación 2d", "Principios de la animación 3d", "Womp 3d", "Inktober"];

    for (let k = 0; k < Proyectos.length; k++) {
        console.log(Proyectos[k]);
    }

    
    let countdown = 5;

    while (countdown > 0) {
    console.log(countdown);
    countdown--;
    }
}