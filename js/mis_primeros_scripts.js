function ocultarMostrarImagen(){
    var estadoActualImagen = document.getElementById('idImagen').style.display;
    if(estadoActualImagen == 'none'){
        estadoActualImagen = 'block';
    }else{
        estadoActualImagen = 'none';
    }
 }

 function enciende(){
     var valorSRC = document.getElementById('idFoco').src;
     console.log(valorSRC);
     document.getElementById('idFoco').src="../img/encendido.png";
 }

 function apagar(){
    var valorSRC = document.getElementById('idFoco').src;
    console.log(valorSRC);
    document.getElementById('idFoco').src="../img/apagado.png";

 }

 function encenderApagar(){
     var estadoActual = document.getElementById('idFoco').className;
     var srcApagado = "../img/apagado.png";
     var srcEncendido= "../img/encendido.png";
     if(estadoActual == 'apagado'){
        document.getElementById('idFoco').src = srcEncendido;
        document.getElementById('idFoco').className = 'encendido';
     }else{
        document.getElementById('idFoco').src = srcApagado;
        document.getElementById('idFoco').className = 'apagado';
     }
 }

 function cambiarTextosClase(){
     const elementos = document.getElementsByClassName('nuevo');

     /*
     elementos[0].innerHTML = "1er texto";
     elementos[1].innerHTML = "2do texto";
     elementos[2].innerHTML = "3er texto";
     */

     for(valor of elementos){
         valor.innerHTML = "A";
     }
 }

 function cambiarTextosElemento(){
     const elementos = document.getElementsByTagName('h1');
     elementos[0].innerHTML = "A";
     elementos[1].innerHTML = "B";
 }

 /*
 Forma tradicional para acceder a un elemento

 function mouseOver(){
     var elemento = document.getElementById('div1');
     elemento.innerHTML = "Nuevo texto";
     elemento.style.backgroundColor = "orange";
 }

 function mouseOut(){
    var elemento = document.getElementById('div1');
    elemento.innerHTML = "Texto para nuevos elementos";
    elemento.style.backgroundColor = "purple";
 }
*/

function mouseOver(element){
    element.innerHTML = "Nuevo texto";
    element.style.backgroundColor = "orange";
}

function mouseOut(element){
   element.innerHTML = "Texto para nuevos elementos";
   element.style.backgroundColor = "purple";
}

function imprimirPersona(){
    //Declaracion objetos
    const persona = {nombre:"Erick", apellido:"Zambrano", edad:"24"};
    console.log(persona);

    //Declaraciones de arreglos
    const colores = ["red", "blue", "yellow", "cian"];
    console.log(colores[0]);
    console.log(colores[1]);
    console.log(colores[2]);

    //Desestructuracion
    const [p1, p2, p3] = ["red", "blue", "yellow"];
    console.log(p1);
    console.log(p2);
    console.log(p3);

    //Desestructurar un elemento ya declarado (arreglo)
    const [c1, c2, c3, c4] = colores;
    console.log(c1);
    console.log(c2);
    console.log(c3);
    console.log(c4);

    //Desestructurar un elemento ya declarado (objeto)
    const {nombre, apellido, edad} = persona;
    console.log(nombre);
    console.log(apellido);
    console.log(edad);

    const {marca,  modelo, año} = {marca:"Audi", modelo:"Jaguar", año:"1998"};
    console.log(marca);
    console.log(modelo);
    console.log(año);

    //declarar objeto dentro de otro objeto
    const persona2 = {nombre:"Erick", apellido:"Zambrano", edad:"24", direccion:{calle:"Mariscal Sucre", numero:"Oe-127"}};
    console.log(persona2)
}