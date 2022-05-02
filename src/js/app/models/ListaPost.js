class ListaPost {
    constructor()
    {
        this._post = [];
    }

    adiciona(posts) {
        this._post.push(posts);
    }

    get post() {
        return [].concat(this._post);
    }
}