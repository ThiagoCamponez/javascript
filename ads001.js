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