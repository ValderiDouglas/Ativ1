import Cliente from "../../../modelo/cliente";

import Entrada from "../../../io/entrada";
import chamaCom from "./chamaCompra"
import { sortBy } from 'sort-by-typescript';

export default class FiltraCompra extends chamaCom {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        
    }
    

    public filtrac(): void {

         let teste = this.clientes.sort(sortBy('-produtos','-servicos'));
          
          
            teste.forEach(cliente => {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`Telefones: ` );
                console.log('-------------------')
                cliente.telefones.forEach(tel=>{console.log(`+(${tel[0]})  ${tel[1]}`)})
                console.log('-------------------')
                console.log(`Rgs: ` );
                console.log('-------------------')
                cliente.rgs.forEach(rg=>{console.log(`RG:${rg[0]}, Data de emissão: ${rg[1]}`)})
                console.log('-------------------')
                console.log(`CPF: ` + cliente.getCpf.getValor);
                console.log(`Produtos Consumidos: `);
                console.log(`--------------------------------------`);
                cliente.produtos.forEach(pro=>{console.log(`${pro[0]} preço: ${pro[1]}`)})
                console.log(`Serviços Consumidos: ` );
                console.log(`--------------------------------------`);
                cliente.servicos.forEach(ser=>{console.log(`${ser[0]} preço: ${ser[1]}`)})
                console.log(`--------------------------------------`);
            });

    }
}