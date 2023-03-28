console.log(`Trabalhando com condicionais`)

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belo Horizonte`,
)
listaDestinos.push(`Curitiba`)

const idadeComprador = 17
const acompanhada = true

console.log("Destinos Possíveis")
console.log(listaDestinos)

if (idadeComprador >= 18 || acompanhada == true) {
    console.log("Passagem comprada")
    listaDestinos.splice(1, 1)

    if (idadeComprador < 18) {
        console.log("Menor de idade, mas está acompanhada")
    }
}

else {
    console.log("Não é maior de idade")
}
const passagemComprada = true
if (passagemComprada == true) {
    console.log("Boa viagem!")
    console.log(listaDestinos)
}

else {
    console.log("Não pode embarcar, compre uma passagem")
}
