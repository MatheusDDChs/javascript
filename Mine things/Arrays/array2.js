const cidades = [
    "Sorocaba", "Imbituva", "Ponta Grossa", "Curitiba", "São Paulo"
]

cidades.push("Palmeiras") // Adiciona em último lugar

cidades.shift() // Tira a primeira cidade



console.log(cidades.length)
console.log(cidades.forEach(cidade => {
    console.log(cidade)
}))