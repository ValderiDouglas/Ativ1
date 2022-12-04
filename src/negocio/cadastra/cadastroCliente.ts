import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Cadastro from "./cadastro";


export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)

        var genero = ''
        let escolha2 = this.entrada.receberNumero(`Por favor informe seu genero: 1-Masculino, 2-Feminino, 3-Outro `);
            switch(escolha2){
                case 1:
                    var genero='Masculino'
                    break;

                case 2:
                    var genero='Feminino'
                    break;

                case 3:
                    var genero='Outros'
                    break;
            }
        let todosTelefones : any[] = [];
        let escolha3 = this.entrada.receberNumero(`Quantos Telefones você tem? `)
            for(var counter:number = 1; counter<escolha3+1; counter++){
                let telDD = this.entrada.receberTexto(`Por favor informe o DDD do ${counter}º telefone: `);
                let tel = this.entrada.receberTexto(`Por favor informe o ${counter}º telefone`);
                let tels=[telDD,tel]    
                todosTelefones.push(tels)  
            }

        let rgs : any[] = [];
        let escolha = this.entrada.receberNumero(`Quantos Rgs você tem? `)
        
            for(var counter:number = 1; counter<escolha+1; counter++){
                            let RGvalor = this.entrada.receberTexto(`Por favor informe o número do rg ${counter}º: `);
                            let RGdata = this.entrada.receberTexto(`Por favor informe a data de emissão do rg: ${counter}º, no padrão dd/mm/yyyy: `);
                            
                            let partesData = RGdata.split('/')
                            
                            let RGano = new Number(partesData[2].valueOf()).valueOf()
                            
                            let RGmes = new Number(partesData[1].valueOf()).valueOf()
                            let RGdia = new Number(partesData[0].valueOf()).valueOf()
                            let RGdataEmissao = new Date(RGano, RGmes, RGdia)
                            
                            let rg = new RG(RGvalor, RGdataEmissao)
                            let Partergs : string[] = [];
                            Partergs.push(RGvalor,RGdata)

                            rgs.push(Partergs)
                            
            }

        let valor = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        
        let produtos : any[] = [];
        let servicos : any[] = [];

        let escolha4 = this.entrada.receberNumero(`Quantos Produtos foram comprados? `)
        
            for(var counter:number = 1; counter<escolha4+1; counter++){
                let nomeProduto = this.entrada.receberTexto(`Por favor informe o nome do ${counter}ºproduto: `);
                let precoProduto = this.entrada.receberNumero(`Por favor informe o preço do ${counter}ºproduto: `);
                let produto=[nomeProduto,precoProduto]
                produtos.push(produto)
        }

        let escolha5 = this.entrada.receberNumero(`Quantos Servicos foram comprados? `)
        
            for(var counter:number = 1; counter<escolha5+1; counter++){
                let nomeServico = this.entrada.receberTexto(`Por favor informe o nome do ${counter}ºserviço : `);
                let precoServico = this.entrada.receberNumero(`Por favor informe o preço do ${counter}ºserviço: `);
                let servico=[nomeServico,precoServico]
                servicos.push(servico)
        }


        let cliente = new Cliente(nome, nomeSocial, cpf,rgs,genero,todosTelefones,produtos,servicos)
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }

}