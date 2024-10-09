let nomeDoHeroi = ("Silvano")
let xp = 5000
let nivel = ("")

// Se XP for menor do que 1.000 = Ferro
if (xp <= 1000) {
    nivel = ("Ferro")

//Se XP for entre 1.001 e 2.000 = Bronze
}else if(xp > 1001 && xp <= 2000){
    nivel = ("Bronze")

// Se XP for entre 2.001 e 5.000 = Prata
}else if(xp > 2001 && xp <= 5000){
    nivel = ("Prata")

// Se XP for entre 5.001 e 7.000 = Ouro
}else if(xp > 5001 && xp <= 7000){
    nivel = ("Ouro")

// Se XP for entre 7.001 e 8.000 = Platina
}else if(xp > 7001 && xp <= 8000){
    nivel = ("Platina")

// Se XP for entre 8.001 e 9.000 = Ascendente
}else if(xp > 8001 && xp <= 9000){
    nivel = ("Ascendente")

// Se XP for entre 9.001 e 10.000= Imortal
}else if(xp > 9001 && xp <= 10000){
    nivel = ("Imortal")

// Se XP for maior ou igual a 10.001 = Radiante
}else if(xp > 10001){
    nivel = ("Radiante")
}
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel)