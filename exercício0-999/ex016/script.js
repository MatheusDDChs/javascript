function calc() {
    let kim = document.Number.querySelector("#km1")
    let val = document.Number.querySelector("#num1")
    let resultado = document.querySelector("#resultado")

    let res = kim * val

    if (kim > 0 && kim < 100) {
        val = 1

        resultado.innerHTML = (`O valor deste frete será de ${res}`)
    }
}