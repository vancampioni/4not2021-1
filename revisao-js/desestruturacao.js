let vetor = [10, 20, 30]

let obj = {
    nome: 'Maria',
    idade: 34,
    naturalidade: 'Franca/SP'
}

// Desestruturação de vetor: as variáveis do let podem ter qualquer nome
let [x, y, z] = vetor
console.log(x)
console.log(y)
console.log(z)

// Desestruturação de objetos: as variáveis do let DEVEM ter os mesmos nomes
//das propriedades, não importa a ordem
let {naturalidade, nome, idade} = obj
console.log(nome)
console.log(idade)
console.log(naturalidade)

let obj2 = {
    marca: 'Volkswagen',
    modelo: 'Fusca',
    ano: 1969,
    cor: 'preto'
}

// Desestruturação parcial de um objeto
let {modelo, ano} = obj2
console.log(modelo)
console.log(ano)

let vet2 = ['laranja', 'maça', 'pera']

//Desestruturação parcial de vetor não da certo
//let [undefined, fruta2, undefined] = vet2
//console.log(fruta2)

// Ignorando o último elemento 
let[fruta1, fruta2] = vet2
console.log(fruta1)
console.log(fruta2)

//Ignorando o primeiro elemento (deixe uma vírgula na posição a ignorar)
let [, f2, f3] = vet2
console.log(f2)
console.log(f3)