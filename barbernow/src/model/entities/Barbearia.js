class Barbearia {
  constructor(cnpj, nome, telefone, email, senha, endereco, fotoURL) {
    this._cnpj = cnpj; // string
    this._nome = nome; // string
    this._telefone = telefone; // number
    this._email = email; // string
    this._senha = senha; // string
    this._endereco = endereco; // string
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

  get fotoURL(){
    return this._fotoURL;
  }

  set fotoURL(value){
    this._fotoURL = value;
  }
}

export default Barbearia;
