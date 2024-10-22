function verificar() {
    let now = new Date()
    let nyear = Number(now.getFullYear())
    let nday = now.getDay()
    let data1 = document.querySelector("#data1")
    let res = document.querySelector("#pres")

        if (data1.value.length == 0 || data1.value > nyear){
            window.alert("[ERRO] Verifique os dados e tente novamente!")
        } else {
            window.alert("DEU CERTO!!!")
        }
}
