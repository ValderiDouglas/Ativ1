import Entrada from "../../../io/entrada";
import Cliente from "../../../modelo/cliente";
import DeletarCliente from "../deletaCall/deletaC";



export default class DeletaClientes extends DeletarCliente {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public deleteCli(): void {
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
        });

        let entrada = new Entrada()
        let clienteEscolhido = entrada.receberTexto(`Por favor, escolha um cliente para deletar: `)
        const indexOfObject = this.clientes.findIndex((cliente) => {
            return cliente.nome == clienteEscolhido;
          });

          if (indexOfObject !== -1) {
            this.clientes.splice(indexOfObject, 1);
            console.log('item deletado')
          }
    }
}