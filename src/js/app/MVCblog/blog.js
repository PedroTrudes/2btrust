const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sTitulo = document.querySelector('#m-titulo');
const sDescritivo = document.querySelector('#m-descritivo');
const sDescricao = document.querySelector('#m-descricao');
const btnSalvar = document.querySelector('#btnSalvar');

// variaveis de itens e index do banco

let itens
let id

//abrindo o modal para inserir dados

function openModal(edit = false, index = 0) {
    modal.classList.add('active')

    modal.onclick = e => {
        if(e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }

    if (edit) {
        sTitulo.value = itens[index].nome
        sDescritivo.value = itens[index].descritivo
        sDescricao.value = itens[index].descricao
    }else{
        sTitulo.value = ''
        sDescritivo.value = ''
        sDescricao.value = ''
    }
}

function editItem(index) {
    openModal(true, index)
}


function deleteItem(index){
    itens.splice(index, 1)//removendo iten do array
    setItensBD()
    loadItens()
}

function insertItem(item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
        <td>${item.titulo}</td>
        <td>${item.descritivo}</td>
        <td>${item.descricao}</td>
        <td class="acao">
            <button onclick="editItem(${index})"> <i class='bx bx-edit'></i> </button>
        </td>
        <td class="acao">
            <button onclick="deleteItem(${index})" > <i class='bx bx-trash'></i> </button>  
        </td>
    `
    tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
    if (sTitulo.value == '' || sDescritivo.value == '' || sDescricao.value == ''){
        return
    }

    e.preventDefault();
    if(id !== undefined){
        itens[id].titulo = sTitulo.value
        itens[id].descritivo = sDescritivo.value
        itens[id].descricao = sDescricao.value
    }else {
        itens.push({'titulo': sTitulo.value, 'descritivo': sDescritivo.value, 'descricao': sDescricao.value})
    }

    setItensBD()
    modal.classList.remove('active')
    loadItens()

    id=undefined
}


function loadItens(){
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
        insertItem(item, index)
    });
}


const getItensBD = () => JSON.parse(localStorage.getItem('blog')) ?? []

const setItensBD = () => localStorage.setItem('blog', JSON.stringify(itens))

loadItens()