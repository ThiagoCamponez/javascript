/* Estrutura de repetição para percorrer um objeto*/

const person = {
    firstName: 'Thiago',
    lastName: 'Camponêz',
    work: 'Developer',
    age: 33 
}

// console.log(person.firstName);/*Formas de acessar alguma propriedade de um objeto*/
// console.log(person['lastName']);/*Formas de acessar alguma propriedade de um objeto*/

/* Uma forma melhor para acessar as propriedades e valores das propriedades de um objeto*/
for (let property in person) {
    console.log(`${property}: ${person[property]}`)
}