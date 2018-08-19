export class Model {
    constructor(objeto?) {
        Object.assign(this, objeto);
    }
  }

export class Usuario extends Model{
    id: number;
    nome: String;
    sobrenome: String;
    dataDeNascimento: String;
    cpf: String;
    email: String;
    cidadeNatal: String;
    senha: String;
}