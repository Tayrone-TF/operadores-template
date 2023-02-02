// EXERCICIO 01
/*
const minhaIdade = Number(prompt('Qual sua idade?'))
const idadeAmiga = Number(prompt('Qual a idade da sua amiga ou amigo?'))


const comparaIdade = minhaIdade > idadeAmiga
console.log(`Sua idade é maior que a do seu amigo? ${comparaIdade}`)

let diferencaIdade

if (minhaIdade > idadeAmiga){
    diferencaIdade = minhaIdade - idadeAmiga
    console.log(`A diferença da idade de vocês é ${diferencaIdade} anos.`)
}else if(minhaIdade < idadeAmiga){
    diferencaIdade = idadeAmiga - minhaIdade
    console.log(`A diferença da idade de vocês é ${diferencaIdade} anos.`)
}else {
    minhaIdade == idadeAmiga
    diferencaIdade = 'Vocês tem a mesma idade'
    console.log(diferencaIdade)
}
*/


// EXERCICIO 02
const a = 'vou pra praia'
const aBool = Boolean(a)
const b = 'sou maior de idade'
const bBool = Boolean(b)
const c = 'posso tomar uma cervejinha'
const cBool = Boolean(c)
const d = 'quero passear de carro'
const dBool = Boolean(d)

const afirmacao1 = !bBool && dBool
console.log(afirmacao1)

const afirmacao2 = bBool && aBool && !dBool
console.log(afirmacao2)

const afirmacao3 = aBool || dBool
console.log(afirmacao3)

const afirmacao4 = cBool && !dBool
console.log(afirmacao4)
