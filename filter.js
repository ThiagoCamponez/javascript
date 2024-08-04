/*          FILTER

    - Retorna um novo array com todos os elementos que passaram no filtro
    - Se o filtro retornar um array vazio, o array original permanece intacto
    - Aceita 3 parâmetros:
        - Item do array
        - Indice do item
        - Array original
*/

const persons = [
    { name: 'Thiago', vip: true },
    { name: 'João', vip: false },
    { name: 'Maria', vip: true },
    { name: 'Pedro', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Maurício', vip: false },
    { name: 'Joaquim', vip: true }
];

const vipPersons = persons.filter( client => client.vip)

console.log(vipPersons)

const students = [
    { name: 'Thiago', grade: 10 },
    { name: 'João', grade: 9 },
    { name: 'Maria', grade: 8 },
    { name: 'Pedro', grade: 7 },
    { name: 'Ana', grade: 6 },
    { name: 'Maurício', grade: 5 },
    { name: 'Joaquim', grade: 4 }
];

const passedStudents = students.filter( student => student.grade >= 7);

console.log(passedStudents);