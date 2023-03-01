let firstNumber = prompt("Digite o primeiro número:")
let secondNumber = prompt("Digite o segundo número:")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let soma = (firstNumber + secondNumber)
let sub = (firstNumber - secondNumber)
let mult = (firstNumber * secondNumber)
let divi = (firstNumber / secondNumber)
let resto = (firstNumber % secondNumber)

alert (`A soma dos dois números é ${soma}`)
alert (`A subtração dos dois números é ${sub}`)
alert (`A multipliclação dos dois números é ${mult}`)
alert (`A divisão dos dois números é ${divi.toFixed(2)}`)
alert (`O resto dos dois números é ${resto}`)

if (firstNumber == secondNumber){
    alert ("Os números são iguais")
} else {
    alert ("Os números são diferentes")
 }

 if (resto == 0){
    alert ("A soma dos número é par")
 } else {
    alert ("A soma dos números é ímpar")
 }