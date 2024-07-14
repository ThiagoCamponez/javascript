/* Escreva um programa que chama uma função que mostre data e hora que estamos */

const dataHora = () => {
    const options = {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };

    const now = new Date();
    const dataFormatada = new Intl.DateTimeFormat('pt-BR', options).format(now);
    const [date, time] = dataFormatada.split(', ');

    return `${date} ${time}`;
}

console.log(dataHora());

