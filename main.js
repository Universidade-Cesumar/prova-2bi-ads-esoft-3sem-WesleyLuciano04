const URL = 'https://6a29eb54f59cb8f65f1dcaff.mockapi.io/Materiais'

async function chamarAPI() {
    const resposta = await fetch(URL);
    if( resposta.status == 200) {
        const objeto = await resposta.json();
        console.log(objeto);
    }
}

chamarAPI()