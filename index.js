class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
        let ataque = this.setAtaque()
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
    setAtaque() {
        if (this.tipo == "mago") {
            return "magia"
        } else if (this.tipo == "guerreiro") {
            return "espada"
        } else if (this.tipo == "monge") {
            return "artes marciais"
        } else {
            return "shuriken"
        }
    }
}

let patolino = new heroi("patolino", 17, "mago")
let po = new heroi("Po", 18, "guerreiro")
let aang = new heroi("Aang", 112, "monge")
let naruto = new heroi("Po", 17, "ninja")

patolino.atacar()
po.atacar()
aang.atacar()
naruto.atacar()