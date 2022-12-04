import Servico from "../../modelo/servico";
import ListagemS from "./listagemS";

export default class ListagemServicos extends ListagemS {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listarS(): void {
        console.log(`\nLista de todos os servicos:`);
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nome);
            console.log(`Descrição: ` + servico.descricao);
            console.log(`preço: ` + servico.preco);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
