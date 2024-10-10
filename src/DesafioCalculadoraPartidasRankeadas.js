// Calculadora de partidas Rankeadas
function calculatorRankedplayers(){
    console.log("Calculando o seu scores!")
    let calculator = wins - derrotas 
    return calculator
}
let wins = 61
let derrotas = 15
let score = calculatorRankedplayers(wins, derrotas)


// Se vitórias for menor do que 10 = Ferros
if (score <= 10) {
    nivel = ("Ferro")
// Se vitórias for entre 11 e 20 = Bronze
}else if(score > 11 && score <= 20){
    nivel = ("Bronze")

// Se vitórias for entre 21 e 50 = Prata
}else if(score > 21 && score <= 50){
    nivel = ("Prata")

// Se vitórias for entre 51 e 80 = Ouro
}else if(score > 51 && score <= 80){
    nivel = ("Ouro")

// Se vitórias for entre 81 e 90 = Diamante
}else if(score > 81 && score <= 90){
    nivel = ("Diamante")

// Se vitórias for entre 91 e 100= Lendário
}else if(score > 91 && score <= 100){
    nivel = ("Lendário")

// Se vitórias for maior ou igual a 101 = Imortal
}else if(score > 101){
    nivel = ("Imortal")}

console.log("O Herói tem de saldo de " + score + " vitórias e está no nível de " + nivel)
