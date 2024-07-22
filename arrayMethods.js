const students = ['Thiago', 'João', 'Maria', 'Pedro', 'Ana'];

/*
students.push('Maurício'); // adiciona elemento no final do array
students.unshift('Elisa'); // adiciona elemento no comeco do array
students.pop(); // remove elemento do final do array
students.length(); // tamanho do array
students.sort(); // ordena o array
students.delete(0); // remove elemento pelo indice
students.splice(0, 2); // remove dois elementos apartir do indice 0
students.splice(1, 0, 'Laís'); // adiciona elemento no indice 1
students.splice(1, 1, 'Laís'); // substitui elemento no indice 1

*/
students.splice(1, 0, 'Laís');
console.log(students)