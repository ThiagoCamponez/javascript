/* Crie um programa que verifica se a pessoa é brasileira ou não*/  

const person = {
    name: 'Thiago',
    nationality: 'Paraguaio'
}

if (person.nationality === 'Brasileiro') {
    console.log(`${person.name} é brasileiro!`);
} else {
    console.log(`${person.name} é estrangeiro!`);
}