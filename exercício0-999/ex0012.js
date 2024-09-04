let now = new Date()
let hours = now.getHours()
let minutes = now.getMinutes()

console.log(`Agora são exatamente ${hours} horas e ${minutes} minutos`)

if (hours >= 6 && hours < 12) {
    console.log("Receba um ótimo dia!!!")
} 
if (hours >= 12 && hours <= 18) {
    console.log("Uma boa tarde!!")
}
if (hours >= 19 && hours <= 23) {
    console.log("Tenha uma boa noite!!")
} else {
    console.log("Está madrugando senhor??")
}