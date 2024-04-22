//La evaluación de desiciones de julian


// nivel de energia, clima  y su caraga de trabajo actual.



//nivel de energia null 0 0=== tomarse un dia libre

// dia con mal clima== undefines o false: podrían influir en su decisión de quedarse en casa trabajando en proyectos personales o simplemente relajarse.


// 
function date(){

    let nivel_de_energia= Number(prompt("introduzca su nivel de energia, elija un número entre 0 y 100"))

    console.log(["soleado","lluvioso"])
    let estado_del_clima=prompt("introduzca el estado del clima que según lo que se presenta:")
    
    
    console.log(["mucho trabajo","nada de trabajo"])
    let carga_de_trabajo=prompt("Introduzca la opción que se acomoda a usted")


}
//correr, trabajr en proyectos personales o tener un día libre.

 
while(true){
    
    let nivel_de_energia= Number(prompt("introduzca su nivel de energia, elija un número entre 0 y 100"))

    console.log(["soleado","lluvioso"])
    let estado_del_clima=prompt("introduzca el estado del clima que según lo que se presenta:")
    
    
    console.log(["mucho trabajo","nada de trabajo"])
    let carga_de_trabajo=prompt("Introduzca la opción que se acomoda a usted")

    if (nivel_de_energia!==0 &&  estado_del_clima==="lluvioso" && carga_de_trabajo==="nada de trabajo"){
        console.log("¡Julian tomate el dia libre!")
    }

    if (nivel_de_energia!==0 && estado_del_clima==="soleado" && carga_de_trabajo==="nada de trabajo"){
        console.log("¡Julian sal a correr! el dia esta para eso")
    }

    if (nivel_de_energia===0 && estado_del_clima==="lluvioso" && carga_de_trabajo==="nada de trabajo"){
        console.log("¡Julian tomate el dia libre!")
    }

    if(nivel_de_energia===0 && estado_del_clima==="soleado" && carga_de_trabajo==="nada de trabajo"){
        console.log("¡Julian tomate el dia libre!")
    }

    if(nivel_de_energia!==0 && estado_del_clima==="lluvioso" && carga_de_trabajo==="mucho trabajo"){
        console.log("Julian, es hora de que trabajes es tus proyectos personales")
    }

    if(nivel_de_energia!==0 && estado_del_clima==="soleado" && carga_de_trabajo==="mucho trabajo"){
        console.log("Julian, es hora de que trabajes es tus proyectos personales")
    }

    if (nivel_de_energia===0 && estado_del_clima==="lluvioso" && carga_de_trabajo==="mucho trabajo"){
        console.log("¡Julian tomate el dia libre! Debes descansar")
    }

    if(nivel_de_energia===0 && estado_del_clima==="soleado" && carga_de_trabajo==="mucho trabajo"){
        console.log("¡Julian tomate el dia libre! Debes descansar")
    }

    const x=confirm("¿Deseas saber nueva mente la desicion que debes tomar?")

    if (x===false){
        break
    }
}