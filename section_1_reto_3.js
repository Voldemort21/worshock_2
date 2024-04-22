//planificación de itinerario

let presupuesto_julian= Number(prompt("ingresa tu presupuesto"));

let costos=Number(prompt("ingresa los costos de alojamiento,transporte y comida"));

const umbral=Number(prompt("ingresa la cantidad para gastos imprevistos"));

const sub_total= presupuesto_julian-(costos+umbral);


let diccionario={}


while (true) {

    var name_articulo=prompt("introduce el nombre del articulo");
    const articulo_1= Number(prompt("costo del articulo"));

    const key= `${name_articulo}`;

    diccionario[key]=articulo_1;

    x=confirm("quieres agregar un articulo?")
    if (x===false){
        break
    }
}

console.log(diccionario)

const name_articles=Object.keys(diccionario)



const articles_cost=Object.values(diccionario) 


count=0

for (const i of articles_cost){
    parametro=sub_total-i;
    console.log(parametro)

    if (parametro<0){
        delete  diccionario[name_articles[count]]
      }
      count+=1;
}


console.log(`estos son los productos que puedes comprar y el resto de dinero que te queda si los compras.`)
console.log(diccionario)

// tomando el mejor valor ajustado.

let new_var=Object.values(diccionario)

new_var.sort()
new_var.reverse()




for (const l in diccionario ){
    
    if (diccionario[l]<new_var[0]){
        delete diccionario[l]
    }
}

console.log("este es o son los productos que se ajustan a su presupuesto")
console.log(Object.keys(diccionario))


