class heroi{
  constructor(nome, idade, classeDoHeroi){
    this.nome = nome
    this.idade = idade
    this.classeDoHeroi = classeDoHeroi
    }
  
  atacar(){
  let ataque = ""
  if (this.classeDoHeroi == "mago") {
    ataque = "usou magia"

  }else if (this.classeDoHeroi == "guerreiro") {
    ataque = "usou espada"

  }else if (this.classeDoHeroi == "monge") {
    ataque = "usou artes marciais"

  }else if (this.classeDoHeroi == "ninja") {
    ataque = "usou shuriken"

  }else {
    ataque = 'realizou um ataque'
  }
  console.log(`O ${this.classeDoHeroi} atacou usando ${ataque}`)
    
  }

  }

const heroi1 = new heroi('Gandalf', 1000, 'mago');
heroi1.atacar();

const heroi2 = new heroi('Aragorn', 87, 'guerreiro');
heroi2.atacar();

const heroi3 = new heroi('Aurelio', 27, 'monge');
heroi3.atacar();

const heroi4 = new heroi('Naruto', 38, 'ninja');
heroi4.atacar();