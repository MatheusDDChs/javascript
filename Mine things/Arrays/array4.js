const ipefs = [
    "E-Frete", "Sem Parar", "Extrata", "Target"
]

ipefs.forEach(ipef => {
    console.log(ipef) // MOSTRA NO CONSOLE COM PARÁGRAFO
})

// console.log(IPEF.join("\n")) => sai isso:
/* 
E-Frete
Sem Parar
Extrata
Target 
*/
// const IPEF = ipefs.map(ipef => ipef) só lançar .log(IPEF) pra sair o array

ipefs.push("Sem Parar") // ADICIONA NO FINAL DO ARRAY
console.log(ipefs)

ipefs.pop() //  REMOVE O ÚLTIMO ELEMENTO DO ARRAY
console.log(ipefs)

ipefs.unshift("PagBem") // ADICIONA UM ELEMENTO AO COMEÇO 
console.log(ipefs)

ipefs.shift() // REMOVE O PRIMEIRO ELEMENTO

