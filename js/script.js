const teclas = document.querySelectorAll(".tecla");
const checkbox = document.querySelector('.checkbox_teclas');
const switcher = document.querySelector('.switcher');
const teclas2 = document.querySelector(".teclas")

const playNota = (nota) => {
    const audio = new Audio(`../notas/${nota}.wav`)
    audio.play();
}


//adiciona um noovo estilo na tecla
const handleMousedown = (tecla) => {
    playNota(tecla.getAttribute("data-nota"))

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

checkbox.addEventListener("change", ({ target }) => {
    if (target.checked){
        switcher.classList.add("switcher_ativa");
        teclas2.classList.remove("desabilitar")
        
    }else{
        switcher.classList.remove("switcher_ativa")
        teclas2.classList.add("desabilitar")
    }
})