const calculate = (n1, n2, operation) => {
    let result

    switch (operation) {
        case '+':
            result = n1 + n2
            break;
        case '-':
            result = n1 - n2
            break;
        case '*':
            result = n1 * n2
            break;
        case '/':
            result = n1 / n2
            break;
        default:
            result = 'Operação inválida'
    }
    return result
}

console.log(calculate(1500, 2500, 's'))