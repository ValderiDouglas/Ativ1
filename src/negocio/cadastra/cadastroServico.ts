import Entrada from "../../io/entrada";
import Cadastros from "./cadastroS";
import Servico from "../../modelo/servico";

export default class cadastrarServico extends Cadastros {

    private servicos:Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrarServico(): void {
        console.log(`\nInício do cadastro de serviços`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let descricao = this.entrada.receberTexto(`Por favor informe a descrição do serviço: `)
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `);
        let servico = new Servico(nome,descricao,preco)
        this.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`);
    }
}