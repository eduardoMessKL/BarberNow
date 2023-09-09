class Servico {
  constructor(servicoID, nome, descricao, preco, fotoURL) {
    this._servicoID = servicoID;
    this._nome = nome;
    this._descricao = descricao;
    this._preco = preco;
    this._fotoURL = fotoURL;
  }

  get servicoID() {
    return this._servicoID;
  }

  set servicoID(value) {
    this._servicoID = value;
  }

  get nome() {
    return this._nome;
  }

  set nome(value) {
    this._nome = value;
  }

  get descricao() {
    return this._descricao;
  }

  set descricao(value) {
    this._descricao = value;
  }
  get preco() {
    return this._preco;
  }

  set preco(value) {
    this._preco = value;
  }

  get fotoURL() {
    return this._fotoURL;
  }

  set fotoURL(value) {
    this._fotoURL = value;
  }
}

export default Servico;
