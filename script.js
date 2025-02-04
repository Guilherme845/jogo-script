document.addEventListener("keydown", function() {
    let personagem = document.getElementById("personagem");
    
    if (!personagem.classList.contains("pulo")) {
        personagem.classList.add("pulo");
        
        setTimeout(function() {
            personagem.classList.remove("pulo");
        }, 500);
    }
});
