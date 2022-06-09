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
