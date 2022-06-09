function ocultarMostrarImagen(){
    var estadoActualImagen = document.getElementById('idImagen').style.display;
    if(estadoActualImagen == 'none'){
        estadoActualImagen = 'block'
    }else{
        estadoActualImagen = 'none'
    }
 }

 function enciende(){
     var valorSRC = document.getElementById('idFoco').src;
     console.log(valorSRC);
     document.getElementById('idFoco').src="../img/encendido.png"
 }

 function apagar(){
    var valorSRC = document.getElementById('idFoco').src;
    console.log(valorSRC);
    document.getElementById('idFoco').src="../img/apagado.png"

 }
