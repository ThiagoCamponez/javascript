/*

MAP
    - Cria um novo array a partir de um array existente
    - Cria um novo array com a mesma quantidade de elementos do array original
    - Aceita 3 parâmetros:
        - Item do array
        - Index
        - Array completo (original)

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const students = [
    { name: 'Thiago', age: 22 },
    { name: 'João', age: 25 },
    { name: 'Maria', age: 21 },
    { name: 'Pedro', age: 23 },
    { name: 'Ana', age: 20 },
    { name: 'Maurício', age: 24 },
    { name: 'Joaquim', age: 26 },
    { name: 'Elisa', age: 28 },
    { name: 'Laís', age: 27 },
    { name: 'Carla', age: 29 },
];

// const newArray = numbers.map( (number) => {
//     return number
// })

// const newStudents = students.map((students) => {
//     const newStudents = {
//         name: students.name + ' Camponêz',
//         age: students.age + 100
//     }

//     return newStudents
// })
// console.log(newStudents)

const double = number => number * 2;
const toReais = number => `R$${number.toFixed(2)}`;
const newArray = numbers.map(double).map(toReais);
console.log(newArray)