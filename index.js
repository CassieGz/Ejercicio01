function cambiarTipo(){
    var seguroElegido = document.getElementById("tipoSeguro");
    var elementoSeleccionado = seguroElegido.value;

    document.getElementById("precioTotal").innerHTML ="El precio del seguro contratado es de $" + elementoSeleccionado;
    limpiarCampo();
}

function limpiarCampo(){
    document.getElementById("tipoSeguro").innerHTML ="";
}