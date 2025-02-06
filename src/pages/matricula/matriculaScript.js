document.getElementById("formMatricula").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    document.getElementById("mensagem-sucesso").innerText = "Matrícula enviada com sucesso!";
    document.getElementById("mensagem-sucesso").style.display = "block";

    
    this.reset();
});