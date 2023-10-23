function cumprimentar(){
    var d = new Date();
    var time = d.getHours();
    if (time<11)
        {
            document.write("Bom dia!!");
        }
    else
        if (time>12 && time<18)
            {
                document.write("Boa tarde!!");
            }
            else
            {
                document.write("Boa noite!!");
            }
    }

function diaSemana(){
    var d = new Date();
    var dia = d.getDay();
    switch (dia)
    {
        case 5:
            document.write(" Finalmente, sexta-feira!");
            break;
        case 6:
            document.write(" Super sábado!");
            break;
        case 0:
            document.write(" Domingo, vamos descansar!");
            break;
        default:
            document.write(" Cadê o final de semana?");
    }
}