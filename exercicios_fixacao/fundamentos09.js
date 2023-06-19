/*
09)​ Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

// function declaration
function classificarAluno(nota){
    let notaArredondada = arrendodarNota(nota)
    if(notaArredondada >= 0 && notaArredondada <= 100){
        if(notaArredondada < 40){
            return `reprovado com nota ${notaArredondada}`
        }
        else{
            return `aprovado com nota ${notaArredondada}`
        }
    }
}

// Toda Arrow Function é uma function expression
let arrendodarNota = (nota) => {
    if(nota%5 >= 3){
        notaCorrigida = (Math.floor(nota/5) * 5) + 5
        return notaCorrigida
    }
    else{
        return nota
    }
}
console.log(classificarAluno(37)) // imprime 'reprovado'
console.log(classificarAluno(100)) // imprime '100'
console.log(classificarAluno(30)) // imprime 'reprovado'
console.log(classificarAluno(38)) // imprime '40'
console.log(classificarAluno(88)) // imprime '90'
console.log(classificarAluno(61)) // imprime '61'
console.log(classificarAluno(84)) // imprime '85'

function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

// Toda Arrow Function é uma function expression
let arredondar = (nota) => {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}
classificaAluno(37)
classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)
classificaAluno(84)