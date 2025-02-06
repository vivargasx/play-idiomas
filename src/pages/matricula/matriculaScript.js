document.getElementById("formMatricula").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    document.getElementById("mensagem-sucesso").innerText = "Matrícula enviada com sucesso!";
    document.getElementById("mensagem-sucesso").style.display = "block";

    
    this.reset();
});


document.getElementById("telefone").addEventListener("input", function(event) {
    let value = this.value.replace(/\D/g, "");

    if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 10) {
        value = `${value.slice(0, 10)}-${value.slice(10, 15)}`;
    }

    this.value = value.slice(0, 15); 
});