    /*
            INTRO
            
Ubicacion del script. Abajo antes del cierre de la etiqueta del body

            OBJETIVO
           
Cambiar el css de body con una apariencia de noche/dia
          SCRIPTS
           Modelo A
Onclick en etiqueta
Funciones en el script
Acceso al CSS desde javascript
     MODELO B
Acceso al CSS con metodos de clases (add, toggle)
Objeto Event. Captura del ID

AMBITOS IMPLICADOS
-Eventos
-DOM
-Funciones
-Metodos acceso CSS

*/

/* MODELO A
 function apariencia(){

// alert("Dia y noche");

const botonApariencia=document.getElementById("btn1");
const cuerpoPagina=document.querySelector("body");
const contenedor=document.querySelector(".contenedor");

cuerpoPagina.style.backgroundColor="black";
contenedor.style.opacity="0.4";
botonApariencia.style.color="white";

botonApariencia.style.opacity="1";
botonApariencia.innerText="Dia";

}
*/

/* MODELO B */

function apariencia(event) {

    // console.log (event); //el objeto event recoge los datos del evento y los muestra en console
    let idBoton=event.target.id; //creamos una variable idBoton y le asignamos el valor de target.id del evento
    let nombreBoton=event.target.nodeName; //creamos una variable nombreBoton y le asignamos el valor target.nodeName del evento
    
    // alert(idBoton+"  "+nombreBoton); //muestra una ventana con los valores de las dos variales separados por un espacio
    
    //Creamos tres variales con valores fijos que ya se lo damos a través del =. Uno de ellos tiene el valor que viene de otra variable
      const botonApariencia=document.getElementById(idBoton);
      const cuerpoPagina=document.querySelector("body");
      const contenedor=document.querySelector(".contenedor");
    
      cuerpoPagina.classList.toggle ("noche_body");
      contenedor.classList.toggle ("noche_contenedor");
      botonApariencia.classList.toggle ("noche_boton");
    
      let estadoBoton=botonApariencia.innerText;
      
      //alert (estadoBoton);
    
     botonApariencia.innerText="Día";
    
      if (estadoBoton=="Día") { botonApariencia.innerText="Noche"};
      if (estadoBoton=="Noche") {botonApariencia.innerText="Día"};
    
    }
    
    