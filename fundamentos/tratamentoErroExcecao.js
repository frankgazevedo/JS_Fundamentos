function tratarErroELancar(erro) {
    // throw new Error('...')  // 'lançar' a exceção (o tratamento do erro gerado) como um object ERROR
    // throw 10 // 'lançar' a exceção (o tratamento do erro gerado) como um number
    // throw true // 'lançar' a exceção (o tratamento do erro gerado) como um boolean
    // throw 'mensagem' // 'lançar' a exceção (o tratamento do erro gerado) como uma string
    throw { // 'lançar' a exceção (o tratamento do erro gerado) como um object PERSONALIZADO
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { // 'tentar' executar o código
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // 'capturar' a exceção
        tratarErroELancar(e)
    } finally { // executado ainda que a exceção seja lançada
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)