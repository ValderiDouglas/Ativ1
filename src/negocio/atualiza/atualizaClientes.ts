import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Atualiza from "./atualizar";
let execucao = true


export default class AtualizarClientes extends Atualiza {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public atualizar(): void {
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
        });

        let entrada = new Entrada()
        let opcao = entrada.receberTexto(`Por favor, escolha um cliente para editar: `)
    
        this.clientes.forEach(cliente => {
            switch (cliente.nome) {
                case opcao:
                    let entrada = new Entrada()
                    let edicao = entrada.receberTexto(`Por favor, escolha algo para editar: "Nome, NomeSocial, Rgs, Telefones, Produto, Servico, Genero `)
                    switch (edicao){
                        case 'Nome':
                            let entradaN = new Entrada()
                            let novoN = entradaN.receberTexto(`Por favor, escreva um novo nome: `)
                            cliente.nome = novoN
                            console.log(cliente.nome)
                            break;


                        case 'NomeSocial':
                            let entradaNS = new Entrada()
                            let novoNS = entradaNS.receberTexto(`Por favor, escreva um novo nome social: `)
                            cliente.nomeSocial = novoNS
                            console.log(cliente.nomeSocial)  
                            break;

                        case 'Rgs':
                            var count=0
                            cliente.rgs.forEach(dado=>{
                                count=count+1
                                console.log(`${count}º RG`,dado[0])
                            })

                            let selecionaRGS = new Entrada()
                            let selectedRGS = selecionaRGS.receberNumero(`escolha a posição de um deles para altera-lo: ex:1,2,3 etc `)
                            var count=0
                            cliente.rgs.forEach(dado=>{
                                
                                if (count==selectedRGS-1){
                                    let adicionaRGS = new Entrada()
                                    dado[0]=adicionaRGS.receberTexto(`coloque o novo rg: `)
                                }
                                count=count+1
                                console.log(dado)
                                console.log(count)

                            })

                        break;

                        case 'Telefones':
                            var count=0
                            cliente.telefones.forEach(dado=>{
                                count=count+1
                                console.log(`${count}º telefone `,dado[0],dado[1])
                            })

                            let selecionaTel = new Entrada()
                            let selectedTel= selecionaTel.receberNumero(`escolha a posição de um deles para altera-lo: ex:1,2,3 etc `)
                            var count=0
                            cliente.telefones.forEach(dado=>{
                                let parteTel = new Entrada()
                                let parteTelefone= parteTel.receberNumero(`escolha a parte do telefone: 1-DDD, 2-Telefone `)
                                switch (parteTelefone){
                                    case 1:
                                    if (count==selectedTel-1){
                                        let adicionaTel = new Entrada()
                                        dado[0]=adicionaTel.receberTexto(`coloque o novo DDD: `)
                                    }
                                    break;

                                    case 2:
                                        if (count==selectedTel-1){
                                            let adicionaTel = new Entrada()
                                            dado[1]=adicionaTel.receberTexto(`coloque o novo Telefone: `)
                                        }
                                    break;
                                }
                                count=count+1

                            })

                        break;

                        case 'Produto':
                            var count=0
                            cliente.produtos.forEach(dado=>{
                                count=count+1
                                console.log(`${count}º Produto`,dado[0])
                            })

                            let selecionaP = new Entrada()
                            let selectedP = selecionaP.receberNumero(`escolha a posição de um deles para altera-lo: ex:1,2,3 etc `)
                            var count=0
                            cliente.produtos.forEach(dado=>{
                                let parteP = new Entrada()
                                let parteProduto= parteP.receberNumero(`escolha a parte do Produto: 1-Nome, 2-Preço `)
                                switch (parteProduto){
                                    case 1:
                                    if (count==selectedP-1){
                                        let adicionaPro = new Entrada()
                                        dado[0]=adicionaPro.receberTexto(`coloque o novo Nome: `)
                                    }
                                    break;

                                    case 2:
                                        if (count==selectedP-1){
                                            let adicionaPro = new Entrada()
                                            dado[1]=adicionaPro.receberTexto(`coloque o novo Preço: `)
                                        }
                                    break;
                                }
                                count=count+1

                            })

                        break;

                        case 'Servico':
                            var count=0
                            cliente.servicos.forEach(dado=>{
                                count=count+1
                                console.log(`${count}º Servico`,dado[0])
                            })

                            let selecionaS = new Entrada()
                            let selectedS = selecionaS.receberNumero(`escolha a posição de um deles para altera-lo: ex:1,2,3 etc `)
                            var count=0
                            cliente.servicos.forEach(dado=>{
                                let parteS = new Entrada()
                                let parteServico= parteS.receberNumero(`escolha a parte do Servico: 1-Nome, 2-Preço `)
                                switch (parteServico){
                                    case 1:
                                    if (count==selectedS-1){
                                        let adicionaSer = new Entrada()
                                        dado[0]=adicionaSer.receberTexto(`coloque o novo Nome: `)
                                    }
                                    break;

                                    case 2:
                                        if (count==selectedS-1){
                                            let adicionaSer = new Entrada()
                                            dado[1]=adicionaSer.receberTexto(`coloque o novo Preço: `)
                                        }
                                    break;
                                }
                                count=count+1

                            })

                        break;

                        case 'Genero':
                            let entradaGen = new Entrada()
                            let novoGenero = entradaGen.receberNumero(`Por favor adicione um genero: 1-Masculino 2-Feminino 3-Outro `)
                            switch(novoGenero){
                                case 1:
                                    cliente.genero ='Masculino' 
                                break;
                                case 2:
                                    cliente.genero ='Feminino'
                                break;
                                case 3:
                                    cliente.genero ='Outro'
                                break
                            }         
                        break;

                    }
            }
        });

    }
}