import CPF from "./cpf"
import Telefone from "./telefone"

export default class Cliente {
    static produtosconsumidos(produtosconsumidos: any): Cliente[] {
        throw new Error("Method not implemented.")
    }

    public nome: string
    public nomeSocial: string
    private cpf: CPF
    public rgs: any[]
    private dataCadastro: Date
    public telefones: any[]
    public produtos: any[]
    public servicos: any[]
    public genero: string
    constructor(nome: string, nomeSocial: string, cpf: CPF, rgs:any[],genero:string,telefones:any[],
        produtos:any[],servicos:any[]) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = rgs
        this.dataCadastro = new Date()
        this.telefones = telefones
        this.produtos = produtos
        this.servicos = servicos
        this.genero=genero
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
}