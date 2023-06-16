function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ // numa Arrow Function, o this não muda de escopo: o this aponta para o objeto no qual a função foi escrita (module.exports)
        console.log(this.idade)
    }, 1000)
}

new Pessoa