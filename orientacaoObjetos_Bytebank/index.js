import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

const diretor = new Diretor('Gui', 15000.01, 11616615656)
diretor.cadastrarSenha('72379*')

const gerente = new Gerente('Luiz', 7000.41, 11515515655)
gerente.cadastrarSenha('123456')

const cliente = new Cliente('Luiz Guilherme', 66116615656, '789456')

const diretorLogado = SistemaAutenticacao.login(diretor, '72379*')
const gerenteLogado = SistemaAutenticacao.login(gerente, '123456')
const clienteLogado = SistemaAutenticacao.login(cliente, '789456')

console.log(clienteLogado, gerenteLogado, diretorLogado)














/* import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js"
import { ContaSalario } from "./Conta/ContaSalario.js"

const cliente1 = new Cliente('Gui', 11616615656, 13968752)

const cliente2 = new Cliente('Luiz', 11216615656, 13968777)

const contaCorrenteGui = new ContaCorrente(cliente1, 1002)
contaCorrenteGui.depositar(1000)
contaCorrenteGui.sacar(100)
//console.log(contaCorrenteGui)

const contaCorrenteLuiz = new ContaPoupanca(0, cliente2, 1001)
contaCorrenteLuiz.depositar(154241.24)
contaCorrenteLuiz.sacar(1584.47)

//contaCorrenteLuiz.transferir(10000, contaCorrenteGui)

//console.log(contaCorrenteLuiz)
//console.log(contaCorrenteGui)
//console.log(`Quantidade de Contas Corrente é: ${ContaCorrente.numeroContas}`)

const contaSalario = new ContaSalario(cliente1)
contaSalario.depositar(100)
contaSalario.sacar(10)

console.log(contaSalario)
 */
//contaCorrenteGui._saldo = 100.00
//console.log(`Saldo em conta é ${contaCorrenteGui._saldo}`)

//const contaCorrenteLuiz = new ContaCorrente(2005, cliente2)
//contaCorrenteLuiz._saldo = 45124.12
//console.log(`Saldo em conta é ${contaCorrenteLuiz._saldo}`)

//console.log(contaCorrenteLuiz.cliente)

//console.log(`Saldo em conta do ${cliente1.nome} é $//{contaCorrenteGui._saldo}`)
//console.log(`Saldo em conta do ${cliente2.nome} é $//{contaCorrenteLuiz._saldo}`)

// contaCorrenteGui.depositar(157.00)
// console.log(`Saldo em conta do ${cliente1.nome} é ${contaCorrenteGui._saldo}`)

// contaCorrenteGui.sacar(24.00)
// console.log(`Saldo em conta do ${cliente1.nome} é ${contaCorrenteGui._saldo}`)

// contaCorrenteGui.depositar(500.00)
// console.log(`Saldo em conta do ${cliente1.nome} é ${contaCorrenteGui._saldo}`)

// contaCorrenteGui.depositar(-157.00)
//console.log(`Saldo em conta do ${cliente1.nome} é ${contaCorrenteGui._saldo}`)


// contaCorrenteLuiz.depositar(157.00)
// console.log(`Saldo em conta do ${cliente2.nome} é ${contaCorrenteLuiz._saldo}`)

// contaCorrenteLuiz.sacar(24.00)
// console.log(`Saldo em conta do ${cliente2.nome} é ${contaCorrenteLuiz._saldo}`)

// contaCorrenteLuiz.depositar(51400.00)
// console.log(`Saldo em conta do ${cliente2.nome} é ${contaCorrenteLuiz._saldo}`)

// contaCorrenteLuiz.depositar(-157.00)
// console.log(`Saldo em conta do ${cliente2.nome} é ${contaCorrenteLuiz._saldo}`)

// const valorSacado = contaCorrenteGui.sacar(100)

// console.log(contaCorrenteGui, contaCorrenteLuiz)

//contaCorrenteLuiz.transferir(10500.08, contaCorrenteGui)
//console.log('Trasferência efetuada com sucesso!')

//console.log(`Saldo em conta do ${cliente1.nome} é $//{contaCorrenteGui._saldo}`)
//console.log(`Saldo em conta do ${cliente2.nome} é $//{contaCorrenteLuiz._saldo}`)
//console.log(contaCorrenteGui, contaCorrenteLuiz)
//console.log(contaCorrenteLuiz.saldo)

//console.log(`Número de contas é ${ContaCorrente.numeroContas}`)