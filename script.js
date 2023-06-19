// divListaProduto.insertAdjacentHTML('afterbegin', '');
class DeuErro extends Error {
    constructor(mensagem){
      super(mensagem);
      this.name = "Meu Erro";
    }
  }

class Produto {
    constructor(nome, datadeCadastro, descricao, preco){
        this.nome = nome
        this.datadeCadastro = datadeCadastro
        this.descricao = descricao
        this.preco = preco
    }
    mostrarProduto(){
        try {
            return this.montarProduto()
        } catch(erro){
            console.log(erro)
        }
    }

    montarProduto(){
        if(this.nome != "" && this.datadeCadastro != "" && this.descricao != "" && this.preco != ""){ 
            return `
            <h4 id="nome">${this.nome}</h4>
            <p>${this.descricao}</p>
            <p id="p6" style="font-weight: bold">R$${this.preco},00</p>
            <p id="p1">${this.datadeCadastro}</p>
            </br>
            `
        } else {
            throw new DeuErro("Está faltando alguma informação. ;)")
        } 
    }
}

class ProdutoDestaque extends Produto {
    constructor(nome, datadeCadastro, descricao, preco, imagemDestaque){
        super(nome, datadeCadastro, descricao, preco)
        this.imagemDestaque = imagemDestaque
    }
    mostrarProdutoDestaque(){
        try {
            return this.montarProdutoDestaque()
        } catch(erro){
            console.log(erro.message)
        }
    }

    montarProdutoDestaque(){
        if(this.nome != "" && this.datadeCadastro != "" && this.descricao != "" && this.preco != "" && this.imagemDestaque != ""){
            return `
            <img src="${this.imagemDestaque}" width="593"></img>
            <h4 id="nomeDest">${this.nome}</h4>
            <p id="p2">${this.descricao}</br></br> O livro se desenvolve através de cinco histórias, que fluem diretamente uma para a outra. </br>Livro extra de "Trono de Vidro" de Sarah J. Maas.</p>
            </br>
            <p id="p3">R$${this.preco},00</p>
            <p id="p4">${this.datadeCadastro}</p>
            </br>
            `
        } else{
            throw new DeuErro("Está faltando alguma informação. ;)")
        }
    }
}

const produto = new Produto("PANDORA", 250806, "Rainha das Sombras </br> Vol.4 da saga Trono de Vidro", 70);
console.log(produto);

const produto2 = new Produto("PANDORA", 130406, "Herdeira do Fogo </br> Vol.3 da saga Trono de Vidro", 30);
console.log(produto2);

const produto3 = new Produto("PANDORA", 121206, "Reino de Cinzas </br> Vol.6 da saga Trono de Vidro", 90);
console.log(produto3);

const produtoDestaque = new ProdutoDestaque("PANDORA", 121022, "A Lâmina da Assassina", 42, "anél1.jpg");
console.log(produtoDestaque);

var destaque = document.getElementById("produto-destaque");
destaque.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarProdutoDestaque());

var prod = document.getElementById("produto");
prod.insertAdjacentHTML('afterbegin', produto.mostrarProduto());
var prod = document.getElementById("produto2");
prod.insertAdjacentHTML('afterbegin', produto2.mostrarProduto());
var prod = document.getElementById("produto3");
prod.insertAdjacentHTML('afterbegin', produto3.mostrarProduto());