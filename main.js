const URL = 'https://6a29eb54f59cb8f65f1dcaff.mockapi.io/Materiais'

const tbody = document.querySelector('#tbody-materiais');


async function chamarAPI() {
    const resposta = await fetch(URL);
    if(resposta.status == 200) {
        const materiais = await resposta.json();
       
        materiais.forEach(material => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${material.inputNome}</td>
                <td>${material.inputQuantidade}</td>
            `;
        tbody.appendChild(tr);
        })
  }
}

chamarAPI()