// Criando um objeto cujo valor das propriedades vem 
//de variáveis

let usuario = 'joao'
let senha = 'Deus123'
let name = 'João das Couves'
let lastLogin = '2021-02-08 22:49:28'

let userInfo = {
    login: usuario,
    password: senha,
    name, // Propriedade abreviada (name: name)
    lastLogin
}

console.log(userInfo)