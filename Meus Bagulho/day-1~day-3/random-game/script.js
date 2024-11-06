let resposta = document.querySelector("#palpite")
let Nresposta = Number(resposta)
let feed = document.querySelector("#feedback")
let trys = document.querySelector("#tentativas")
let reiniciar = document.querySelector("#restart")

let numeroatual = 0

let one = 1

let aleatorio = Math.floor(Math.random() * 101);
feed.innerHTML = aleatorio

function enviar() {
    if (resposta.value > 100 || resposta.value < 0) {
        window.alert("[ERRO] Não é permitido número acima de 100 ou menor que 0. Tente novamente.") 
        resposta.value = 0
    } 
    else if (resposta.value != aleatorio) {
        window.alert("Você errou tente novamente")
        let numeroatual = Number(trys.textContent)

        numeroatual += 1

        trys.innerHTML =`algum texto ${numeroatual}`
    } 
    else if (resposta.value == aleatorio) {
        window.alert("Parabéns você acertou!!!")
    }
}
