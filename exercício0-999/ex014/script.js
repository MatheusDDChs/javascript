document.addEventListener("DOMContentLoaded", function(){
    let now = new Date()
    let hour = now.getHours()
    let minutes = now.getMinutes()

    function day(){
        let img = document.querySelector("#img")
        let p1 = document.querySelector("#now1")

            p1.innerHTML = (`Agora são ${hour} horas e ${minutes} minutos`)
    }

        if (hour >= 6 && hour < 12){
        main.style.backgroundColor = '##CBBB8D'
        img.src = 'foto-manha.jpg'
    }
    if (hour >= 12 && hour < 18) {
        main.style.backgroundColor = '##A47661'
        img.src = 'foto-tarde.jpg'
    } else {
        main.style.backgroundColor = '#464948'
        img.src = 'foto-noite.jpg'
    }
    day()
})