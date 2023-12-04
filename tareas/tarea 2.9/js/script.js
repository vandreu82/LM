function intro() { // Al presionar Intro llama a la función como si se presionara el botón
    if (event.key === "Enter") {
        getText();
    }
}

function getText() { // 
    var element = document.getElementById("input").value;
    if (element === "") { // Comprobador de campo vacío
        document.getElementById("input").style.border = "2px solid red";
    } else {
        document.getElementById("input").style.border = "0"; // devuelve el borde a su estilo original al rellenar el input
        console.log(element); // debug

        var nElement = document.createElement("li"); // crea un nuevo elemento de lista y lo agrega
        nElement.innerHTML = element;
        document.getElementById("lista").appendChild(nElement);

        document.getElementById("input").value = ""; // resetea el input y pone el foco sobre él
        document.getElementById("input").focus();
    }
}