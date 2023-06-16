const valor = 'Global'

function minhaFuncao() {
    // const valor = 'Local' // se add essa linha, 'exec()' imprimirá 'Local'
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // imprime 'Global', pois o contexto léxico de 'minhaFuncao' é mais abrangente