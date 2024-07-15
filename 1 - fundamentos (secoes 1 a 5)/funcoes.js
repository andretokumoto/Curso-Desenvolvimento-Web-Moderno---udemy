console.log(typeof Object) //objetos são funções
//qualquer classe em js é uma função

//armazenando função em uma variavel
const imprimisoma = function (a,b){
    console.log(a+b)
}

imprimisoma(10,5)

//armazenando uma função arrow em uma variavel
const soma = (a,b) =>{
    return a + b
}

console.log(soma(12,13))

//retorno implicito
const subtracao = (a,b) => a-b
console.log(subtracao(20,3))