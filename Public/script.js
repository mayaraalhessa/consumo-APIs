// fetch(requisicao) // retorna uma resposta

const requisicao = new Request('http://localhost:3000/produtos', {
    "method": "GET",
    "headers": {
        "Content-type": "application/json"
    }
});

fetch(requisicao)
    .then(resposta => resposta.json())
    .then(resposta => {

        const ul = document.createElement('ul');

        resposta.forEach(produto => {
            
            const liDescricao = document.createElement('li');
            liDescricao.innerHTML = produto.descricao;

            const liId = document.createElement('li');
            liId.innerHTML = produto.id;

            const liPreco = document.createElement('li');
            liPreco.innerHTML = produto.preco;

            ul.append(liId, liDescricao, liPreco);
        });

        document.body.appendChild(ul);
        
    });