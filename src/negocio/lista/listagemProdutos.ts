import Produto from "../../modelo/produto";
import ListagemP from "./listagemP";

export default class ListagemProdutos extends ListagemP {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listarP(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.nome);
            console.log(`Descrição: ` + produto.descricao);
            console.log(`preço: ` + produto.preco);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}