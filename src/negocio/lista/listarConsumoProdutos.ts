import Cliente from "../../modelo/cliente";
import ListagemCP from "./listaCP";
import { sortBy } from 'sort-by-typescript';


export default class ListagemConsumoProduos extends ListagemCP {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listarCP(): void {
        const teste=this.clientes.sort(sortBy('nome'))
        console.log(`\n Lista de todos os clientes:`);
        
        teste.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Produtos Consumidos ` + cliente.produtos);
            console.log(`--------------------------------------`);
        });
    }
}