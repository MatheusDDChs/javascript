const numeros = [ 
    5, 10, 30, 50
]


function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}

console.log(numeros.reduce(somar))
console.log(numeros.reduce(subtrair))
console.log(numeros.reduce(multiplicar))
console.log(numeros.reduce(dividir))

