    function bucle() {
    var iniTabla = document.getElementById("iniTabla").value;
    var finTabla = document.getElementById("finTabla").value;
    var multi = document.getElementById("multi").value;
    var parrafo = document.getElementById("vacio");


    if (!iniTabla || !finTabla || !multi) { //comprobación de que el valor es numérico
        alert("Debe introducir un número");
        parrafo.innerHTML = ""; // limpia el output antes de cada entrada
    } else if (iniTabla > finTabla){ //comprobación de que no sea mayor el primero que el segundo
        alert("El primer multiplicando no puede ser mayor que el segundo");
        } else {

        parrafo.innerHTML = ""; // limpia el output antes de cada entrada
        for (let i = iniTabla; i <= finTabla; i++) {
            for (let j = 0; j <= multi; j++) {
                var resultado = i * j; // almacena el resultado en una variable
                parrafo.innerHTML += i + " x " + j + " = " + resultado + "<br>"; // muestra la línea correspondiente de la tabla

                console.log(iniTabla); // debug
                console.log(finTabla); // debug
            }
            
            parrafo.innerHTML = parrafo.innerHTML + "<br>";
        }
    }
}