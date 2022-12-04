import Cliente from "../../../modelo/cliente";

import Entrada from "../../../io/entrada";
import chamaGenero from "./chamaGenero"

export default class FiltraGenero extends chamaGenero {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        
    }

    
    public filtrag(): void {
        var filtro = ''
        let opcaoList = this.entrada.receberNumero(`Por favor, escolha qual genero 1-Masc, 2-Fem, 3-Outro, 4-Todos: `)
        switch(opcaoList){
            case 1:
                var filtro = 'Masculino'
                break;
            case 2:
                var filtro = 'Feminino'
                break;
            case 3:
                var filtro = 'Outros'
                break;
            case 4:
                var filtro = 'tudo'
        }

        if (filtro != 'tudo'){
            console.log(`\nLista de todos os cliente de genero ${filtro}:`);
            console.log(filtro)

            this.clientes.forEach(cliente => {
                if (cliente.genero == filtro){
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
                cliente.produtos.forEach(pro=>{console.log(`${pro[0]} preço: ${pro[1]}`)})
                console.log(`Serviços Consumidos: ` );
                cliente.servicos.forEach(ser=>{console.log(`${ser[0]} preço: ${ser[1]}`)})
                console.log(`--------------------------------------`);
            }
            });}

        if (filtro == 'tudo'){
            console.log(`\nLista de todos os clientes ${filtro}:`);

            this.clientes.forEach(cliente => {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Genero: ` + cliente.genero);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`Telefones: ` );
                console.log('-------------------')
                cliente.telefones.forEach(tel=>{console.log(`+(${tel[0]})  ${tel[1]}`)})
                console.log(`Rgs: ` );
                console.log('-------------------')
                cliente.rgs.forEach(rg=>{console.log(`RG:${rg[0]}, Data de emissão: ${rg[1]}`)})
                console.log(`CPF: ` + cliente.getCpf.getValor);
                cliente.produtos.forEach(pro=>{console.log(`${pro[0]} preço: ${pro[1]}`)})
                console.log(`Serviços Consumidos: ` );
                cliente.servicos.forEach(ser=>{console.log(`${ser[0]} preço: ${ser[1]}`)})
                console.log(`--------------------------------------`);
                });
            }
            
        }
    }
