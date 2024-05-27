const btAdd = document.createElement('button');
btAdd.type = 'button';
btAdd.id = 'btAdd';
btAdd.innerHTML = 'Adicionar';
const inputs = [
    {"type": "text", "id": "preco", "label": "Preco"},
    {"type": "text", "id": "descricao", "label": "Descricao"},
    {"type": "text", "id": "IdProduto", "label": "ID"},
]
inputs.forEach(produto =>{
    const div = document.createElement('div');
    div.classList.add('controle-form');
    const i = document.createElement('input');
    i.type = produto.type;
    i.id = produto.id;

    const l = document.createElement('label');
    l.for = produto.type;
    i.innerHTML = produto.label;

    div.append(l,i);
})

const divForm = document.createElement('div');
divForm.append()
 inputPreco.type = 'text';
 inputPreco = 'preco';

 const labelPreco = document.createElement('label');
 labelPreco.for = 'preco';
 labelPreco.innerHTML = 'Preco';
