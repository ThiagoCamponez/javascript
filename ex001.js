const elemento = document.getElementById("esconder");
let visivel = true;

function alternar() {
    if (visivel) {
        elemento.style.display = 'none';
    }

    else{
        elemento.style.display = 'block';
    }

    visivel = !visivel;
}

alternar();

<button type="button" onclick="document.getElementById('esconder').style.display='none'">Esconder</button>