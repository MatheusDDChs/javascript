let dolar = 5.1 //Variável que vamos usar para multiplicar, tem como requerir em outro sistema que atualiza diariamente...

let usdInput = document.querySelector("#usd") //Variável que vai buscar no documento a ID do input do Dolar

let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => { //Aqui vai um observador de Keyup, que quando acontecer vai executar a função seguinte.
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("keyup", () => {
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
    //utilizar a função de formatar
    //retornar o valor formatado


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
        //Ajustar o valor
        //Converter o valor
        //Mostrar o valor no campo de real
    }

    if (type=="brl-to-usd") {
        //Ajustar o valor
        //Converter o valor
        //Mostrar o valor no campo de real
    }
}