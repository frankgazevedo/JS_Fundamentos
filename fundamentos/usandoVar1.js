// escopo de VAR: GLOBAL
{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() { // escopo de VAR = apenas dentro da FUNÇÃO 
    var local = 123
    console.log(local)
}

teste()
console.log(local)