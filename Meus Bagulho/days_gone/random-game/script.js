let Benviar = document.querySelector("#Enviar");
let resposta = document.querySelector("#palpite");
let feed = document.querySelector("#feedback");
let trys = document.querySelector("#tentativas");
let reiniciar = document.querySelector("#restart");

resposta.value = 0;
let tentativas = 0;
let aleatorio = Math.floor(Math.random() * 101);

function enviar() {
    let palpite = Number(resposta.value);

    // Verifica se o número está fora do intervalo permitido
    if (palpite > 100 || palpite < 0) {
        window.alert("[ERRO] Não é permitido número acima de 100 ou menor que 0. Tente novamente.");
        resposta.value = 0;
        return;
    }

    // Verifica se o palpite é um número
    if (isNaN(palpite)) {
        window.alert("Por favor, insira um número válido.");
        resposta.value = 0;
        return;
    }

    // Incrementa tentativas e verifica se atingiu o limite
    tentativas++;
    trys.textContent = tentativas;

    if (tentativas > 10) {
        window.alert("Infelizmente atingiu o limite de tentativas.");
        finalizarJogo("Alcançou o limite de tentativas. Tente novamente!");
        return;
    }

    // Lógica para verificar o palpite
    if (palpite > aleatorio) {
        feed.innerHTML = "Quase! O resultado é um número Menor."
    } else if (palpite < aleatorio) {
        feed.innerHTML = "Quase! O resultado é um número Maior."
    } else {
        window.alert("Parabéns, você acertou!!!")
        finalizarJogo("Você acertou! Pode tentar novamente.")
    }
}

// Função para finalizar o jogo e ajustar o estado do botão
function finalizarJogo(mensagem) {
    feed.innerHTML = mensagem
    resposta.value = 0
    Benviar.style.opacity = "0.5";
    Benviar.disabled = true
    Benviar.style.cursor = "not-allowed"
} 

// Função para reiniciar o jogo
function Restart() {
    aleatorio = Math.floor(Math.random() * 101);
    resposta.value = 0;
    tentativas = 0;
    trys.textContent = 0;
    feed.innerHTML = "FeedBack";
    ajustaEstadoBotao(true)
}

// Função para ajustar o estado do botão (ativar/desativar)
function ajustaEstadoBotao(ativado) {
    Benviar.style.opacity = ativado ? "1" : "0.5" ;
    Benviar.disabled = !ativado;
    Benviar.style.cursor = ativado ? "pointer" : "not-allowed"
}