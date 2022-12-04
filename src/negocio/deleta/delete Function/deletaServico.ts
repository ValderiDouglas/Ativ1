import Entrada from "../../../io/entrada";
import Servico from "../../../modelo/servico";
import DeletarServico from "../deletaCall/deletaS";



export default class DeletaServicos extends DeletarServico {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public deleteSer(): void {
        this.servicos.forEach(Servico => {
            console.log(`Nome: ` + Servico.nome);
        });

        let entrada = new Entrada()
        let ServicoEscolhido = entrada.receberTexto(`Por favor, escolha um Servico para deletar: `)
        const indexOfObject = this.servicos.findIndex((Servico) => {
            return Servico.nome == ServicoEscolhido;
          });

          if (indexOfObject !== -1) {
            this.servicos.splice(indexOfObject, 1);
            console.log('item deletado')
          }
    }
}