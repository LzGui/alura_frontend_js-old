console.log(`\n Trabalhando com loops`)

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belo Horizonte`,
)
listaDestinos.push(`Curitiba`)

const idadeComprador = 17
const acompanhada = true
let passagemComprada = false
const destino = "São Paulo"

console.log("\n Destinos Possíveis")
console.log(listaDestinos)

const podeComprar = idadeComprador >= 18 || acompanhada == true

let n = 0
let destinoExiste = false

for (n = 0; listaDestinos.length; n++) {
    if (listaDestinos[n] == destino) {
        console.log("Destino existe")
        destinoExiste = true
        break
    } else {
        console.log("Destino NÃO existe")
    }
}

console.log(n)

if (destinoExiste && podeComprar) {
    console.log("Boa viagem!!")
} else {
    console.log("ERRO!")
}