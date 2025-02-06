// Carrossel HTML
const cursos = [
    {
        titulo: "Curso de Inglês",
        subtitulo: "Comece hoje sua jornada para fluência!",
        descricao: "Nosso curso de inglês foi desenvolvido para garantir sua fluência de forma prática e personalizada.",
        imagem: "img/index/estudante01.png"
    },
    {
        titulo: "Curso de Espanhol",
        subtitulo: "Domine o idioma e expanda seus horizontes!",
        descricao: "Aprenda espanhol com um método prático e eficaz para se comunicar com fluência.",
        imagem: "img/index/estudante02.jpg"
    },
    {
        titulo: "Curso de Francês",
        subtitulo: "Explore a cultura e a língua francesa!",
        descricao: "Comunique-se em francês com naturalidade e desenvolva sua fluência com nosso curso personalizado.",
        imagem: "img/index/estudante03.jpg"
    }
];

let index = 0;
const img = document.getElementById("carrossel-img");
const titulo = document.getElementById("carrossel-titulo");
const subtitulo = document.getElementById("carrossel-subtitulo");
const descricao = document.getElementById("carrossel-descricao");
const botaoNext = document.getElementById("carrossel-next");

botaoNext.addEventListener("click", () => {
    index = (index + 1) % cursos.length; 
    titulo.textContent = cursos[index].titulo;
    subtitulo.textContent = cursos[index].subtitulo;
    descricao.textContent = cursos[index].descricao;
    img.src = cursos[index].imagem;
});


function getMatricula() {
    location.href = "../src/pages/matricula/matricula.html";
}

function getCurso() {
    location.href = "../src/pages/cursos/cursos.html"
}