import Entrada from "../../io/entrada";
import Cadastrop from "./cadastroP";
import Produto from "../../modelo/produto";

export default class cadastrarProduto extends Cadastrop {

    private produtos:Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    
    public cadastrarProduto(): void {
        console.log(`\nInício do cadastro de produtos`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let descricao = this.entrada.receberTexto(`Por favor informe a descrição do produto: `)
        let preco = this.entrada.receberNumero(`Por favor informe o preço do produto: `);
        let produto = new Produto(nome,descricao,preco)
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`);
    }
}