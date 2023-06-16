const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // this referencia o próprio objeto 'pessoa'
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO -> retorna UNDEFINED, 
// pois não é possível resolver o this: ele referencia falar() da linha anterior ou falar() do objeto 'pessoa'? 

const falarDePessoa = pessoa.falar.bind(pessoa) // bind 'resolve' o this explicitamente: this agora referencia falar() do objeto 'pessoa' 
falarDePessoa()