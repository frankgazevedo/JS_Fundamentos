// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) { // nessa linha ocorre o REGISTRO da callback 'function(e)'
    console.log('O evento ocorreu!')
}