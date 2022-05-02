class PostController{
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data--blog');// nome do id do campo data tem que ser esse
        this._inputTitulo = $('#titulo--blog');//nome do id do campo titulo tem que ser esse
        this._inputTexto = $('#texto--blog');// nome do id do campo de texto tem que ser esse.
        this._listaPost = new ListaPost();

        this._postView = new PostView($('#post--view'))// a div tem que ter esse nome no id;
        this._postView.update(this._listaPost);

        
    }

    adiciona(event) {

        event.preventDefault();
    
        this._listaPost.adiciona(this._CriaPost());

        this._postView.update(this._listaPost);
        this._limpaFormulario();
        console.log(this._listaPost.post);


    }

    _CriaPost(){
        return new Post(
            DataHelper.textoParaData(this._inputData.value),
            this._inputTitulo.value,
            this._inputTexto.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputTitulo.value = '';
        this._inputTexto.value = '';

        this._inputData.focus();
    }

}