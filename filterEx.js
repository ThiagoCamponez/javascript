const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Jeff Bezos', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zukerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim cook', foundedOn: 1976 }
]

// Novo array contendo apenas números pares e divisiveis por 5
const newList = list.filter( numbers => {
    if(numbers % 2 === 0 && numbers % 5 === 0) return true
});
console.log(newList)

const newCompanies = companies.filter( company => {
    if(company.foundedOn >= 1975 && company.marketValue > 200) return true
    else return false
});
console.log(newCompanies)