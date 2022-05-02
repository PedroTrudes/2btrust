class Post {
    constructor(data, titulo, texto)  {

        this._data = new Date(data.getTime());
        this._titulo = titulo;
        this._texto = texto;
        Object.freeze(this);
    }

    get data(){
        return new Date(this._data.getTime());

    }

    get titulo(){
        return this._titulo;
    }

    get texto(){
        return this._texto;
    }
}