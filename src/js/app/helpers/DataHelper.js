class DataHelper {
    constructor() {
        throw new Error('DataHelper nao pode ser instanciado')
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }

    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) {
            alert('data inserida na maneira errada')


        }else {
            return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
        }
    }
}