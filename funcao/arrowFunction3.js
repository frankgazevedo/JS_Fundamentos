let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // true: this === global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false: this !== global
comparaComThis(obj) // true: this === global === obj

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false: this !== global -> o 'global' numa Arrow Function é o próprio module.exports (arquivo)
comparaComThisArrow(module.exports) // true: this === module.exports === global

// o this não muda de escopo: o this aponta para o objeto no qual a função foi escrita (module.exports)
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false: this !== global -> o 'global' numa Arrow Function é o próprio module.exports (arquivo)
comparaComThisArrow(module.exports) // true: this === module.exports === global