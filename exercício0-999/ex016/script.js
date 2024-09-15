function calc() {
    //Puxa os elementos do HTML para o JS
    let kim = document.querySelector("#km1").value
    let val = document.querySelector("#num1").value
    let resultado = document.querySelector("#resultado")

    //Alterar as variaveis para valores
    kmNum = parseFloat(kim)
    valNum = parseFloat(val)

    //Verifica se valores são válidos
    if (isNaN(kmNum) || isNaN(valNum)) {
        resultado.innerHTML = "Por favor, escolha um número válidos."
        return false;
    }

    //Cálcula o resultado
    let res = kmNum * valNum;

    if (kmNum > 0 &&  kmNum < 100) {
        resultado.innerHTML = `O valor deste frete será de R$ ${res.toFixed(2)}`

    } 

    else if (kmNum >= 100 && kmNum <= 200) {
        resultado.innerHTML = `Você está utilizando a faixa <strong>2</strong>. O valor deste frete será de R$ ${res.toFixed(2)}`
    } 

    else if (kmNum > 200 && kmNum <= 300) {
        resultado.innerHTML = `Você está utilizando a faixa <strong>3</strong>. O valor deste frete será de R$ ${res.toFixed(2)}`
    }

    else if (kmNum > 300) {
        resultado.innerHTML = `Você está utilizando a faixa <strong>4</strong>. O valor deste frete será de R$ ${res.toFixed(2)} `
    }

    else {
        resultado.innerHTML = "Insira uma distância válida. Insira uma distância entre 1 e 99 Km."
    }

    return false
}