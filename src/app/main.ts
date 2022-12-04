import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastra/cadastroCliente";
import ListagemClientes from "../negocio/lista/listagemClientes";
import atualizaClientes from "../negocio/atualiza/atualizaClientes";
import cadastraProdutos from "../negocio/cadastra/cadastroProduto";
import ListagemProdutos from "../negocio/lista/listagemProdutos";
import AtualizarProdutos from "../negocio/atualiza/atualizarProdutos";
import ListagemConsumoProdutos from "../negocio/lista/listarConsumoProdutos";
import CadastraServico from "../negocio/cadastra/cadastroServico"
import ListagemServicos from "../negocio/lista/listagemServicos";
import DeletaClientes from "../negocio/deleta/delete Function/deletaCliente";
import DeletaProdutos from "../negocio/deleta/delete Function/deletaProduto";
import DeletaServicos from "../negocio/deleta/delete Function/deletaServico";
import FiltraGenero from "../negocio/lista/filtros Cliente/genero";
import FiltraCompra from "../negocio/lista/filtros Cliente/compra";





console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log('\n')
    console.log(`Opções gerais:`);
    console.log(`1 - Cadastrar`);
    console.log(`2 - Visualizar`);
    console.log(`3 - Editar`);
    console.log(`4 - Deletar`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)


    switch (opcao) {
            case 0:
                execucao = false
                console.log(`Até mais`)
                break;

            case 1: //cadastro
                console.log(`1 - Cadastrar Cliente`);
                console.log(`2 - Cadastrar Produto`);
                console.log(`3 - Cadastrar Servico`);
                console.log(`0 - Voltar`);
                let entradaC = new Entrada()
                let opcaoCad = entradaC.receberNumero(`Por favor, escolha uma opção: `)
                switch (opcaoCad) {
                case 1:
                    let cadastro = new CadastroCliente(empresa.getClientes)
                    cadastro.cadastrar()
                    break;

                case 2:
                    let cadastroP = new cadastraProdutos(empresa.getProdutos)
                    cadastroP.cadastrarProduto()
                    break;
                
                case 3:
                    let CadastraS = new CadastraServico(empresa.getServicos)
                    CadastraS.cadastrarServico()
                    break; 
                }
                case 0:
                    break;
            


            case 2: //Listagem
                console.log(`1 - Listar Cliente`);
                console.log(`2 - Listar Produto`);
                console.log(`3 - Listar Servico`);
                console.log(`4 - Filtros`);

                console.log(`0 - Voltar`);
                let entradaL = new Entrada()
                let opcaoList = entradaL.receberNumero(`Por favor, escolha uma opção: `)
                switch (opcaoList) {
                    case 1:
                        let listagem = new ListagemClientes(empresa.getClientes)
                        listagem.listar()
                    break;

                    case 2:
                        let listagemP = new ListagemProdutos(empresa.getProdutos)
                        listagemP.listarP()
                    break;
                    
                    case 3:
                        let ListaS = new ListagemServicos(empresa.getServicos)
                        ListaS.listarS()
                    break; 

                    case 4:
                        let entradaFiltro = new Entrada()
                        let opcaoFiltro = entradaFiltro.receberNumero(`Por favor, escolha uma opção: 1-Genero, 2-Mais Compras`)
                        switch(opcaoFiltro){
                            case 1:
                                let filtrogen = new FiltraGenero(empresa.getClientes)
                                filtrogen.filtrag()
                            break; 

                            case 2:
                                let filtroComp = new FiltraCompra(empresa.getClientes)
                                filtroComp.filtrac()
                            break; 

                        }

                    break;


                    case 0:
                        
                        console.log(`Até mais`)
                    break;        
                }        

            break;

            case 3: //Atualizar
                console.log(`1 - Atualiza Cliente`);
                console.log(`2 - Atualiza Produto`);
                console.log(`3 - Atualiza Servico`);
                console.log(`0 - Voltar`);
                let entradaA = new Entrada()
                let opcaoAtua = entradaA.receberNumero(`Por favor, escolha uma opção: `)
                switch (opcaoAtua) {
                    case 1:
                        let atualizar = new atualizaClientes(empresa.getClientes)
                        atualizar.atualizar()
                    break;

                    case 2:
                        let atualizarP = new AtualizarProdutos(empresa.getProdutos)
                        atualizarP.atualizarP()
                    break;

                    
                    // case 3:
                    //     let ListaS = new ListagemServicos(empresa.getServicos)
                    //     ListaS.listarS()
                    //     break; 
                    // }

                    case 0:
                        console.log(`Até mais`)
                    break;
                }

            case 4: //Deletar
            console.log(`1 - Deletar Cliente`);
            console.log(`2 - Deletar Produto`);
            console.log(`3 - Deletar Servico`);
            console.log(`0 - Voltar`);

            let entradaD = new Entrada()
            let opcaoDel = entradaD.receberNumero(`Por favor, escolha uma opção: `)
            switch (opcaoDel) {
                case 0:
                    console.log(`Até mais`)
                break;

                case 1:
                    let deletarC = new DeletaClientes(empresa.getClientes)
                    deletarC.deleteCli()
                    break;

                case 2:
                    let deletarP = new DeletaProdutos(empresa.getProdutos)
                    deletarP.deletePro()
                    break;
                case 3:
                    let deletarS = new DeletaServicos(empresa.getServicos)
                    deletarS.deleteSer()
                    break;
            }

    }
}