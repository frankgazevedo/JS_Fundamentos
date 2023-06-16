function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2)) // retorna 4
console.log(area(2)) // retorna NaN
console.log(area()) // retorna NaN
console.log(area(2, 3, 17, 22, 44)) // retorna 6. O 3º, 4º e 5º parâmetros foram "ignorados"  
console.log(area(5, 5)) // imprime 'Valor acima do permitido: 25m2.' E retorna UNDEFINED