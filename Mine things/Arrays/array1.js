let car1 = "Saab"
let car2 = "Herrera"
let car3 = "Volvo"

const cars = [
    "Volkswagen", "Opel", "Audi"
]
let cLen = cars.length

let para1 = "<ul>"
for (let i = 0; i < cLen; i++) {
    para1 += "<li>" + cars[i] + "</li>"
}
para1 += "</ul>"

document.querySelector("#p1").innerHTML = para1





// IDEIA PARA LOOPAR O ARRAY
/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>"; */