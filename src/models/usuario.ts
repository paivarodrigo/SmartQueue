export class Model {
    constructor(objeto?) {
        Object.assign(this, objeto);
    }
  }

export class Usuario extends Model{
    nome: String;
    sobrenome: String;
    dataDeNascimento: String;
    cpf: String;
    email: String;
    cidadeNatal: String;
    senha: String;
}