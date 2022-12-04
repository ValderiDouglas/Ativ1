export default class Produto {
    public nome: string
    public descricao: string
    public preco: number

    constructor(nome: string,descricao: string, preco:number) {
        this.nome = nome
        this.descricao = descricao
        this.preco = preco
    }
}
