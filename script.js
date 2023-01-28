//Função que exiba uma mensagem
let idade = 22;

if (idade >= 18) {
console.log("você é maior de idade!")
}

// crie uma função que receba o seu nome
function MostrarNome (nome){
 console.log (`meu nome é ${nome}`)
}
MostrarNome(`Victor`)

//crie uma função que receba nome, idade, e um estilo musical preferido
let nome = "Victor"
let anos = 22
let estilo = "Hip-Hop/Rnb"
console.log(`Meu nome é ${nome} tenho ${anos} anos e gosto de ouvir ${estilo}`)

//crie uma função que receba um filme, uma música
let filme = "Shrek 2"
let musica = "Rich Flex"
console.log (`Meu filme preferido é ${filme} e gosto de ouvir a música ${musica}`)

//crie uma função que retorne o triplo do número recebido no parâmetro da função
function multiplicação(n1,n2){
    return n1*n2
}
console.log (multiplicação(9,3))

//crie uma função que  verifique se uma  variável é true ou false

let temnet = false
let verdade = "Assista o vídeo"
let falso = "Tente novamente quanto sua internet retornar"

if(temnet==true){
    console.log(verdade)
} else{
    console.log(falso)
}

