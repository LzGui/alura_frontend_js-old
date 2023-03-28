console.log(`Trabalhando com listas`)
const salvador = `Salvador`
const sp = `São Paulo`
const rj = `Rio de Janeiro`
const bh = `Belo Horizonte`

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belo Horizonte`,
)
listaDestinos.push(`Curitiba`)

console.log("Destinos Possíveis")
console.log(listaDestinos)

listaDestinos.splice(1, 1)
console.log(listaDestinos)

console.log(listaDestinos[2])