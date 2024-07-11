let usdInput = document.querySelector("#usd")

let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    console.log(usdInput.value)
})

brlInput.addEventListener("keyup", () => {
    console.log("Apertou no campo de BRL")
})