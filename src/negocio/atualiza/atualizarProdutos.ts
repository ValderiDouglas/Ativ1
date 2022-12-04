import Entrada from "../../io/entrada";
import AtualizaP from "./atualizarP";
import Produto from "../../modelo/produto";


let execucao = true


export default class AtualizarProdutos extends AtualizaP {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }

    public atualizarP(): void {
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.nome);
        

        let entrada = new Entrada()
        let opcao = entrada.receberTexto(`Por favor, escolha um produto para editar: `)
    

        console.log(opcao);
        this.produtos.forEach(produto => { 
            switch (produto.nome) {
                case opcao:
                    let entrada = new Entrada()
                    let edicao = entrada.receberTexto(`Por favor, escolha algo para editar: "Nome, Descricao, Preco": `)
                    switch (edicao){
                        case 'Nome':
                            let entradaN = new Entrada()
                            let novoN = entradaN.receberTexto(`Por favor, escreva um novo nome: `)
                            produto.nome = novoN
                            console.log(produto.nome)
                            break;

                        case 'Descricao':
                            let entradaD = new Entrada()
                            let novoD = entradaD.receberTexto(`Por favor, escreva uma nova descrição: `)
                            produto.descricao = novoD
                            console.log(produto.descricao)
                            break;

                        case 'Preco':
                            let entradaP = new Entrada()
                            let novoP = entradaP.receberNumero(`Por favor, escreva um novo preço: `)
                            produto.preco = novoP
                            console.log(produto.preco) 
                            break;                           
                        
                    }
            }
        });
    });
    }
}