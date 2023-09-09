export class Barbearia {
  constructor(cnpj, nome, telefone, email, senha, endereco, horario, fotoURL) {
    this._cnpj = cnpj; // string
    this._nome = nome; // string
    this._telefone = telefone; // number
    this._email = email; // string
    this._senha = senha; // string
    this._endereco = endereco; // string
    this._horario = horario;
    this._fotoURL = fotoURL;
  }

  get cnpj() {
    return this._cnpj;
  }

  set cnpj(value) {
    this._cnpj = value;
  }

  get nome() {
    return this._nome;
  }

  set nome(value) {
    this._nome = value;
  }

  get telefone() {
    return this._telefone;
  }

  set telefone(value) {
    this._telefone = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get senha() {
    return this._senha;
  }

  set senha(value) {
    this._senha = value;
  }

  get endereco() {
    return this._endereco;
  }

  set endereco(value) {
    this._endereco = value;
  }

  get horario() {
    return this._horario;
  }

  set horario(value) {
    this._horario = value;
  }

  get fotoURL() {
    return this._fotoURL;
  }

  set fotoURL(value) {
    this._fotoURL = value;
  }
  //Firestore espera receber um objeto simples para armazenamento, método toObject converte a instância da classe em um objeto simples
  toObject() {
    return {
      cnpj: this.cnpj,
      nome: this.nome,
      telefone: this.telefone,
      endereco: this.endereco,
      horario: this.horario,
      email: this.email,
      fotoURL: this.fotoURL,
    };
  }
}
