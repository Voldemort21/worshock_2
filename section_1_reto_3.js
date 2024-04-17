//planificación de itinerario

let presupuesto_julian= Number(prompt("ingresa tu presupuesto"));

let costos=Number(prompt("ingresa los costos de alojamiento,transporte y comida"));

const umbral=Number(promot("ingresa la cantidad para gastos imprevistos"));

const sub_total= presupuesto_julian-costos-umbral;

let name_articulo=prompt("introduce el nombre del articulo");
const articulo_1= Number("costo del articulo");

let name_articulo_2=prompt("introduce el nombre del articulo");
const articulo_2= Number("costo del articulo");

let name_articulo_3=prompt("introduce el nombre del articulo");
const articulo_3= Number("costo del articulo");


let x=sub_total-articulo_1;
let y=sub_total-articulo_2;
let z=sub_total-articulo_3;




list_0=[]

if (x>=0){
    list_0.push(x);
}

if (y>=0){
    list_0.push(y);
}

if (z>=0){
    list_0.push(z);
}

if (z==y==x){
    console.log(`los productos adecuados que se ajustan a tu presupuesto son: ${articulo_1}, ${articulo_2},${articulo_3}`)
}

if (z==y){
    console.log(`los productos adecuados que se ajustan a tu presupuesto son:${articulo_2},${articulo_3}`)

}
list=[name_articulo,articulo_1]
list_1=[name_articulo_2,articulo_2]
list_2=[name_articulo_3,articulo_3]

list_global=[list,list_1,list_2]

let articulo_barato=Math.min(list_0);

if (list.include(articulo_barato)){
    console.log(`el articulo más economico`)
}



if (presupuesto_julian-costo>umbral){
    console.log("el presupuesto te alcanza para comprar el articulo")
}
else{
    console.log("Julian ten cuidado!, no puedes llevar el articulo, el presupuesto no te alcanza")
}


