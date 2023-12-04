function bucle() {
    var texto = document.getElementById("texto").value;
    var multi = document.getElementById("multi").value;
    var parrafo = document.getElementById("vacio");
    

    if (isNaN(texto) || texto.trim() === "" || isNaN(multi) || multi.trim() === "")
    {
        alert("Debe introducir un número");
        parrafo.innerHTML = ""; // limpia el output antes de cada entrada
    } else {

        parrafo.innerHTML = ""; // limpia el output antes de cada entrada

        for (let i = 0; i <= multi; i++) {
        	var resultado = texto * i; // almacena el resultado en una variable
            parrafo.innerHTML += texto + " x " + i + " = " + resultado + "<br>"; // muestra la línea correspondiente de la tabla
                       
            console.log(texto); // debug
        }
    }
}