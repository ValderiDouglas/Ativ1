import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Genero: ` + cliente.genero);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Telefones: ` );
            console.log('-------------------')
            cliente.telefones.forEach(tel=>{console.log(`+(${tel[0]})  ${tel[1]}`)})
            console.log('-------------------')
            console.log('\n')
            console.log(`Rgs: ` );
            console.log('-------------------')
            cliente.rgs.forEach(rg=>{console.log(`RG:${rg[0]}, Data de emissão: ${rg[1]}`)})
            console.log('-------------------')
            console.log(`CPF: ` + cliente.getCpf.getValor);
            cliente.produtos.forEach(pro=>{console.log(`${pro[0]} preço: ${pro[1]}`)})
            console.log(`--------------------------------------`);
            console.log(`Produtos Consumidos: ` );
            cliente.produtos.forEach(ser=>{console.log(`${ser[0]} preço: ${ser[1]}`)})
            console.log(`--------------------------------------`);
            console.log(`Serviços Consumidos: ` );
            cliente.servicos.forEach(ser=>{console.log(`${ser[0]} preço: ${ser[1]}`)})
        });
        console.log(`\n`);
    }
}