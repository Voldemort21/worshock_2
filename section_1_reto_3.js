//planificación de itinerario

let presupuesto_julian= Number(prompt("ingresa tu presupuesto"));

let costos=Number(prompt("ingresa los costos de alojamiento,transporte y comida"));

const umbral=Number(promot("ingresa la cantidad para gastos imprevistos"));

const sub_total= presupuesto_julian-costos-umbral;

let name_articulo=prompt("introduce el nombre del articulo");
const articulo_1= Number("costo del articulo");

let name_articulo_2=prompt("introduce el nombre del articulo");
const articulo_2= Number("costo del articulo");




let x=sub_total-articulo_1;
let y=sub_total-articulo_2;





list_0=[]

if (x>=0){
    list_0.push([articulo_1,x]);
}

if (y>=0){
    list_0.push([articulo_2,y]);
}





if (list_0.length===2){
    list_1=[list_0[0][1],list_0[1][1]]
    if (list_0[0][1]===list_0[1][1]){
        console.log(`los productos adecuados que se ajustan a tu presupuesto son: ${articulo_1}, ${articulo_2}`)
    }
    else{
        const numero=Math.max(...list_1.map(e=>e)) ;   
        if    (list_0.indexOf(numero)!== -1){
            console.log(`el producto adecuado para usted es: ${list_0[0][0]}`)        
        } 
        else{
            console.log(`el producto adecuao para su presupuesto es: ${list_0[1][0]}`)
        }
    }
}

else{
    console.log(`el producto adecuado para su presupuesto es: ${list_0[0][0]}`)
}




