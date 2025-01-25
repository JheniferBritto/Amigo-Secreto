
let listaDeAmigos = [];

let adicionarAmigo = function () {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    listaDeAmigos.push(nome);
    atualizarLista();
    input.value = ""; 
};

let atualizarLista = function () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    listaDeAmigos.forEach((amigo) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
};

let sortearAmigo = function () {
    if (listaDeAmigos.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> Amigo sorteado: ${amigoSorteado} </li>`;
};
