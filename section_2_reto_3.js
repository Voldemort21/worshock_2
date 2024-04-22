// desiciones de ultima hora.



// consiciones

/*
 condiciones, como el clima, el espacio disponible en su maleta, y el peso total permitido
*/



//lluvia para-aguas


// espacio adicional: cámara u otro articulo no esencial pero deseable.


// espacio limitado: priorización de articulos por restricciones de peso,clima y duración del viaje.


console.log(["soleado", "lluvioso"])
let weather = prompt("Julian introduce el pronostico del clima según los presentados anteriormente")

let weight = Number(prompt("se introducira el peso en kg de la mataleta con un rango de (0-100): por favor introduzca un número que se encuentre en ese rango."))


// toma de desiciones de articulos: restriciones de peso y espacio.


suitcase = {}

//prioritize_item={}

let available_weight = weight; // peso que le queda a la maleta.
let available_space = 100;  // porcentaje  de espacio libre

while (true) {

   // definición del nombre y peso del artículo


   while (true) {

      var item = prompt("escriba el nombre del artículo");
      var weight_item = Number(prompt("porfavor introduzca el peso del artículo como un número, tenga encuenta que el peso debe estar en kg(no introduzca la unidad)"));


      // tiempo en el que se usa el objeto:

      console.log(["soleado", "lluvioso", "cualquier condicion"])


      var weather_item = prompt("Julian introduce el estado en el que se puede usar el artículo")
      if (weather_item === weather || weather_item === "cualquier condicion") {
         break
      }

      else { alert("debes elegir un articulo que se ajuste con el estado del clima") }
   }

   //priorización

   console.log(`["alta=1","media=2","baja=3"]`)
   let prioritize = Number(prompt("introduce la priorización del artículo según lo mostrado, elije un número"))


   // espacio : la maleta se modela como un cubo al igual que los objetos que se introducen en ella


   let space = Number(prompt("Ingresa el espacio en porcetaje, que ocupa en la maleta. Elija un número entre 0  y 100"))



   if (weight_item <= available_weight && space <= available_space) {
      //debe viajar con más de un articulo esencial.
      const key = `${item}`;
      suitcase[key] = [weather_item, prioritize, weight_item, space];
      available_weight -= weight_item;
      available_space -= space;


   }


   else {

      console.log(`no puede meter este articulo a la maleta, el espacio y peso disponible son: [${available_space},${available_weight}] y los de tu articulo son [${space},${weight_item}]`)


      let replace_new = confirm("¿deseas ocupar el lugar con otro articulo?")
      var (replace_new === false){
         break
      }
      }
      if (replace_new === false) {
         let replace_item = confirm("¿desea sacar algunos o algun artículo de la maleta para introducir este?")

         // lista ss(lista de sugerencia y selección)

         if (replace_item === true) {

            var copy_of_suitcase = suitcase;

            // creacción de lista con sugerencia
            var selection = []
            for (const l in copy_of_suitcase) {

               object = {}
               let variable = `${l}`;
               object[variable] = copy_of_suitcase[l]

               //articulos con peso y espacio <= que las de articulo a añadir
               if (copy_of_suitcase[l][2] <= weight_item && copy_of_suitcase[l][3] <= space) {
                  selection.push(object)
               }

            }


            //alert(`Elija un artículo de los siguientes: ${selection}`)

            var list = []

            // sumo espacio disponible con el del artículo

            var sum_space_available = available_space
            var sum_weight_available = available_weight
         }





         etiqueta_bucle_externo:
         while (true) {
            console.log(` ${JSON.stringify(list)}`)
            //evaluacion de peso y espacio

            count = 0
            count_1 = 0

            for (const index of list) {


               let key_x = Object.keys(index)

               count += copy_of_suitcase[key_x][2];
               count_1 += copy_of_suitcase[key_x][3];

               if (count > weight_item || count_1 > space) {

                  console.log("la suma de espacio o peso supera el peso del articulo que se desea añadir: vuelva a escoger los artículos")
                  var sum_space_available = available_space
                  var sum_weight_available = available_weight
                  list = [];
                  console.log(sum_space_available, sum_weight_available)
                  break
               }
            }
            //

            //seleccionando artículos

            console.log(`Elija un artículo de los siguientes para cambiarlo por ${item}: ${JSON.stringify(selection)}`)
            console.log(`articulos seleccionados: ${JSON.stringify(list)}`)

            var name_item = prompt("introduzca el nombre del articulo")



            for (const i of selection) {

               for (const k in i) {

                  if (k === name_item) {



                     if (copy_of_suitcase[name_item][1] <= prioritize) {
                        sum_space_available += copy_of_suitcase[name_item][3];
                        sum_weight_available += copy_of_suitcase[name_item][2];
                        console.log("Jonathan", sum_space_available, sum_weight_available, copy_of_suitcase[name_item][3])

                        //condicion de peso y espacio del articulo a añadir

                        if (sum_space_available === space && sum_weight_available === weight_item) {

                           //remplazar
                           if (list.length === 0) {
                              delete copy_of_suitcase[name_item]

                              const key_1 = `${item}`;
                              copy_of_suitcase[key_1] = [weather_item, prioritize, weight_item, space];

                              break etiqueta_bucle_externo
                           }

                           else {
                              for (reto in list) {
                                 for (m in reto) {
                                    delete copy_of_suitcase[m]
                                    const key_1 = `${item}`;
                                    copy_of_suitcase[key_1] = [weather_item, prioritize, weight_item, space];
                                    break  etiqueta_bucle_externo
                                 }
                              }
                           }
                        }

                        else {
                           let llave = {}

                           const key_2 = `${name_item}`;
                           llave[key_2] = copy_of_suitcase[name_item]
                           //console.log( `${JSON.stringify(llave)}`)
                           list.push(llave)
                        }
                     }
                  }
               }
            }
         }
      }

      alert("estos son los cambios que se le hicieron a la maleta")
      console.log(` ${JSON.stringify(copy_of_suitcase)}`)

      let my_wish = confirm("¿desea conservarlos?");

      if (my_wish === true) {
         suitcase = copy_of_suitcase;
      }

   }


   // confirmación de ciclo

   let enter_item = confirm("¿quieres introducir un nuevo artículo o volver a ajustar el que estabas introduciendo?")

   if (enter_item === false) {
      console.log(`asi quedo tu maleta: ${JSON.stringify(suitcase)}`)
      break
   }

   else {
      console.log(`sigamos organizando la maleta: ${JSON.stringify(suitcase)}`)
   }

}






// se empacan una serie de articulos esenciales que ocupan un pequeño espacio del espacio reducido.


// cada espacio acepta(definición de parametros):



/*
   espacio reducido:  1 objeto grande y dos pequeños(1 objeto escencial)
   espacio normal: 3 objetos grandes y dos pequeños(3 objetos escensiales)
   mucho espacio: 5 objetos grandes y uno pequeño(4 objetos escensiales)
   articulos pequeños
*/



