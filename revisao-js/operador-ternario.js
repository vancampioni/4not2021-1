let nota = 7.2
let situacao

/*if(nota >= 6) {
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}*/

/*if(nota >= 6) situacao = 'APROVADO'
else situacao = 'REPROVADO'*/

//As três partes do operador ternário
//1ª parte: condição (que iria depois do if)
//Entre a 1ª e a 2ª parte coloca o ?
//2ª parte: o resultado, caso a condição seja VERDADEIRA
//Entre a 2ª e a 3ª parte coloca os : (como se fosse o else)
//3ª parte: o resultado, caso a condição seja FALSA
situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO' //parenteses opcionais

console.log(situacao)

let user = 'zemane'
let userType

userType = user === 'admin' || user === 'root' ? 'Superuser' : 'Ordinary user'

console.log(userType)