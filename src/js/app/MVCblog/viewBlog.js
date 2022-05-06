const cards = document.querySelector('#container--card');

let itens
let id

function viewPost(item, index) {
    let div = document.createElement('div')

    div.innerHTML = `
        <h3>${item.titulo}</h3>
        <div class="divisor--blog"></div>
        <p class="blog--descritivo">${item.descritivo}</p>
        <div class="divisor--blog"></div>
        <p class="blog--descricao">${item.descricao}</p>
        <button>Ver Mais</button>
        
    `
    cards.appendChild(div)
}

function loadView() {
    itens = getItensBD()
    cards.innerHTML == ''
    itens.forEach((item, index) => {
        viewPost(item, index)
    })
}


//pegando dados do banco
const getItensBD = () => JSON.parse(localStorage.getItem('blog')) ?? []
//setando itens para dentro do banco
const setItensBD = () => localStorage.setItem('blog', JSON.stringify(itens))

loadView()