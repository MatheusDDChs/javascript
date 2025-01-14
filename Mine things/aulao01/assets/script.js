let dolar = 5.43 //Variável que vamos usar para multiplicar, tem como requerir em outro sistema que atualiza diariamente...

let usdInput = document.querySelector("#usd") //Variável que vai buscar no documento a ID do input do Dolar

let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => { //Aqui vai um observador de Keyup, que quando acontecer vai executar a função seguinte.
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "100,00" //Adicionei um valor daquela variável que está buscando o ID do input...
convert("usd-to-brl")

// Funções

function formatCurrency(value) {    //ajustar o valor
    let fixedValue = fixValue(value);
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)
}


function fixValue(value) {
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if (floatValue == NaN) {
        floatValue = 0 
    }
    return floatValue
}   

function convert(type) {
    if (type=="usd-to-brl") {
        let fixedValue = fixValue(usdInput.value)
        
        let result = fixedValue * dolar
        result = result.toFixed(2)

        brlInput.value = formatCurrency(result)
    }

    if (type=="brl-to-usd") {
        let fixedValue = fixValue(brlInput.value)

        let result = fixedValue / dolar
        result = result.toFixed(2)

        usdInput.value = formatCurrency(result)
    }
}