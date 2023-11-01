function cambiarTipo(){
    var seguroElegido = document.getElementById("tipoSeguro");
    var elementoSeleccionado = seguroElegido.value;

    if (elementoSeleccionado === ""){
        document.getElementById("precioSeguro").innerText ="";
    }else{
    document.getElementById("precioSeguro").innerText =" El precio del seguro contratado es de $" + elementoSeleccionado;
    }
}
