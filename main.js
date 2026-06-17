const URL = 'https://6a29eb54f59cb8f65f1dcaff.mockapi.io/Materiais'

const tbody = document.querySelector('#tbody-materiais');
const form = document.querySelector('form');

async function chamarAPI() {
    const resposta = await fetch(URL);
    if(resposta.status == 200) {
        const materiais = await resposta.json();

        tbody.innerHTML = '';
       
        materiais.forEach(material => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${material.inputNome}</td>
                <td>${material.inputQuantidade}</td>
                <td class=edicao-estoque>
                    <label for = "input-retirada"> Quantidade </label>
                    <input type="text" id = "input-retirada" placeholder = "Ex: 10"> </input>
                    <input type="submit" class="btn-baixar" value = "Baixar"></input>
                    <input type="submit" class="btn-excluir" value = "Excluir"></input>
                </td>
            `;
        tbody.appendChild(tr);
        })
  }
}

async function cadastrarMaterial(nome, quantidade) {
    const resposta = await fetch(URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            inputNome: nome,
            inputQuantidade: quantidade
        })
    });

    if (resposta.status == 201) {
        chamarAPI();
    }
}

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = document.querySelector('#input-nome').value;
    const quantidade = document.querySelector('#input-quantidade').value;

    if (nome && quantidade) {
        cadastrarMaterial(nome, quantidade);
        form.reset();
    }
});


chamarAPI();