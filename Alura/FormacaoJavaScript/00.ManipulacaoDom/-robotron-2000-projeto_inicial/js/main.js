// console.log ("oi");
// const robotron = document.querySelector("#robotron");
const somar = document.querySelector("#somar")
const subtrair = document.querySelector("#subtrair")
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const coresRobo = document.querySelector(".robo")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
//console.log(this);
// //Função anônima - O parametro evento captura o objeto que é clicado.
// robotron.addEventListener("click", (evento) => {
//     console.log (evento);
// })

// // Função anônima
// robotron.addEventListener("click", function (){
//     console.log ("Cliquei no robô!");
// })

// // //funcao declarada
// function dizOi(nome){ 
// console.log("Oi " + nome);
//     console.log("Bem vindo ao Robortro");
// }

controle.forEach ((elemento) => {
    elemento.addEventListener ("click" , (evento) => {
        manipulaDados(evento.target.dataset.controle,evento.target.parentNode);
        atualizaEstatisticas (evento.target.dataset.peca)
        //console.log (evento.target.parentNode);
    })
})

function manipulaDados (operacao,controle){
    const peca = controle.querySelector("[data-contador]");
    if (operacao === "-"){
        peca.value = parseInt(peca.value ) -1 ;
    } else {
        peca.value = parseInt(peca.value ) + 1 ;
    }
 }

function atualizaEstatisticas (peca){

    console.log(pecas[peca]);

    estatisticas.forEach ((elemento) =>{
        // console.log(elemento.dataset.estatistica)
        // console.log(elemento.textContent)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
    })
}

function trocaImagem (cor){
    coresRobo.src = "img/Robotron 2000 - " + cor + ".png";
}

// somar.addEventListener("click", () => {manipulaDados("somar")}) 
// subtrair.addEventListener("click", () => {manipulaDados("subtrair")}) 


