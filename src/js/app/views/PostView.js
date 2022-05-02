class PostView  extends View {
    constructor(elemento) {
        super(elemento)
    }

    template(model) {
        return `
            
                ${model.post.map(n => {
                    return `
                    <div class='container--blog'>

                    <p class="data--blog">${DataHelper.dataParaTexto(n.data)}</p>
                    <h2 class="titulo--blog">${n.titulo}</h2>
                    <p class="texto--blog">${n.texto}</p>

                    </div>
                    `
                }).join('')}
            
            
        `;
    }
}