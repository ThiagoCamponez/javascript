/*
    For each
*/

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

let allStudentsAge = 0;

students.forEach( (students, index) => {
    allStudentsAge += students.age
    console.log(`${students.name} tem ${students.age} anos.`)
})

const averageAge = allStudentsAge / students.length
//const averageAge = Math.floor(allStudentsAge / students.length) - Poderia usar o math,floor. Mas nesse caso é melhor usar o .toFixed para escolher quantas casas decimais, nesse caso é nenhuma.

console.log(`A idade média dos ${students.length} alunos é de ${averageAge.toFixed(0)} anos.`)