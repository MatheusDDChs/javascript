document.addEventListener("DOMContentLoaded", function() {
    let now = new Date()
    let nyear = now.getFullYear()
    let nday = now.getDay()

    let anon = document.querySelector("#anon")

    anon.addEventListener("change", function() {
        let inputniver = new Date(anon.value)
        let anoniver = inputniver.getFullYear()

        if (anoniver) {
            let idade = nyear - anoniver
            console.log(`Sua idade é de ${idade}`)
        } else {
            console.log("Insira uma data válida")
        }
    })

    window.enviar = function() {
        let tidade = document.querySelector("#pidade")

        if (idade > 0) {
            tidade 
        }
    }
})

