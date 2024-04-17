let name = window.prompt('Ingrece su nombre porfavor');

const destino = window.prompt('Ingrese su destino');

let duracion = window.prompt('¿cuantos dias tendra su viaje?'); // cambian

let presupuesto = window.prompt('¿cual es su presupuesto?'); //cambian

console.log(destino, duracion, presupuesto);

let valor_dia = 2000000;
let gasto_real = valor_dia * duracion;
let total = presupuesto - gasto_real;

total < 0
  ? console.log(`${name} por favor ajusta tu presupuesto`)
  : console.log(`${name} tu presupuesto alcanza`);

if (total < 0) {
  duracion = window.prompt('¿cuantos dias tendra su viaje?');
  presupuesto = window.prompt('¿cual es su presupuesto?');
}

