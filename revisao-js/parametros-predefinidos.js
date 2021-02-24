//Parâmetros predefinidos ou opcionais em funções

function calcularArea(base, altura, forma, casasDec = 2) {
    let res
    switch(forma) {
        case 'Q': //Quadrilátero
            res = base * altura
            break
        case 'T': //Triângulo
            res = base * altura / 2
            break
        case 'E': //Elipse
            res = (base / 2) * (altura / 2) * Math.PI
    }
    return res.toFixed(casasDec)
}

console.log(calcularArea(20, 8, 'Q'))
console.log(calcularArea(7.5, 3, 'T'))
console.log(calcularArea(4.5, 4.5, 'E'))
console.log(calcularArea(30,60))
//Caso seja necessário omitir um parâmetro predefinido que não
//seja o último, pode-se usar o valor undefined em seu lugar
console.log(calcularArea(30, 60, undefined, 3))