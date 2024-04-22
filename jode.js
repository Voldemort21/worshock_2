let list={}


while (true) {

    var name_articulo=prompt("introduce el nombre del articulo");
    const articulo_1= Number(prompt("costo del articulo"));

    const key= `${name_articulo}`;

    list[key]=articulo_1;

    x=confirm("quieres agregar un articulo?")
    if (x===false){
        break
    }
}

console.log(list)