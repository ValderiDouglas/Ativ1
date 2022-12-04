import Entrada from "../../../io/entrada";
import Produto from "../../../modelo/produto";
import DeletarProduto from "../deletaCall/deletaP";




export default class DeletaProdutos extends DeletarProduto {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public deletePro(): void {
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.nome);
        });

        let entrada = new Entrada()
        let produtoEscolhido = entrada.receberTexto(`Por favor, escolha um produto para deletar: `)
        const indexOfObject = this.produtos.findIndex((produto) => {
            return produto.nome == produtoEscolhido;
          });

          if (indexOfObject !== -1) {
            this.produtos.splice(indexOfObject, 1);
            console.log('item deletado')
          }
    }
}