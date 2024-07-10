
function avisar () {
    window.alert("Opa disparei!!!")
}

let botao = document.querySelector("#botao")

botao.addEventListener("click", () => {
    avisar()
})

let arco = () => {
    avisar
}