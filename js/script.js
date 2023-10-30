const teclas = document.querySelectorAll(".tecla");

const playNota = (nota) => {
    
}


//adiciona um noovo estilo na tecla
const handleMousedown = (tecla) => {
//identifica quando a tecla preta é pressionada
    if (tecla.className.includes('preta')){
        tecla.classList.add("pressionado")
        return;
    }
    tecla.style.background = "#ddd";
}

//Remove um noovo estilo na tecla
const handleMouseup = (tecla) => {
    if (tecla.className.includes('preta')){
        tecla.classList.remove("pressionado")
        return;
    }
    tecla.style.background = "white";
}

//Percorre a class e retonar um elemento "tecla"
teclas.forEach((tecla) => {

    tecla.addEventListener("mousedown", () => handleMousedown(tecla))
    tecla.addEventListener("mouseup", () => handleMouseup(tecla))
});