class ListaPost {
    constructor(armadilha)
    {
        this._post = [];
        this._armadilha = armadilha;

    }

    adiciona(posts) {
        this._post.push(posts);
        this._armadilha(this);
    }

    get post() {
        return [].concat(this._post);
    }

}