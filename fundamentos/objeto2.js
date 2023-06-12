console.log(typeof Object) // function
console.log(typeof new Object) // instancia um object

const Cliente = function() {}
console.log(typeof Cliente) // function
console.log(typeof new Cliente) // instancia um object

class Produto {} // ECMA Script 2015 (ES6) // class é, "por debaixo dos panos", uma function
console.log(typeof Produto) // function
console.log(typeof new Produto()) // instancia um object