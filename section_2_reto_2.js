// reto de calculadora

// salir a comer, comprar un libro nuevo o ahorrar algo de dinero. 

while(true){

    const daily_budget=Number(prompt("Introduce tu presupuesto diario"))
    const minimum_savings=Number(prompt("¿cual es el minimo de ahorro que deseas alcanzar? Introducelo como número"))

    list_activiti={};
    
    while(true){
        let activity=prompt("introduzca la actividad que desea realizar")
        const cost=Number(prompt("introduca el costo de la actividad que desea realizar"))
        let question=confirm("¿desea agregar más actividades?")

        const key= `${activity}`;

        list_activiti[key]=cost;

        if (question===false){
            break
        }
    }


    list=Object.values(list_activiti);

    sum=list.reduce((acumulador, valorActual) => acumulador + valorActual, 0); // aprender esta forma mas sofistica de sumar los elementos de la lista
    console.log(sum);

    sum=list.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    presupuesto_real=daily_budget-minimum_savings-sum; 

    while(true){
    console.log(list_activiti);

    console.log(presupuesto_real)
    if (presupuesto_real<0){
        alert("debes eliminar una actividad ya que tu presupuesto no se ajusta con el umbral de ahorro")
        word=prompt();
        presupuesto_real+=list_activiti[word];
        delete list_activiti[word]
        
    }

    else{
        break
    }
        
    }
    ciclo=confirm("¿quieres volver a realizar el analisis presupuestal?")
    if(ciclo===false){
        break
    }
}