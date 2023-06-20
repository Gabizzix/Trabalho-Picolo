class deuErro extends Error {
constructor(mensagem){
      super(mensagem);
      this.nome = "Meu Erro";
    }
  }

class Produto {
    constructor(nome, data_de_cadastro, descricao, preco){
        this.nome = nome
        this.data_de_Cadastro = data_de_cadastro
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
        if(this.nome != "" && this.data_de_cadastro != "" && this.descricao != "" && this.preco != ""){ 
            return `
            <h4 id="nome">${this.nome}</h4>
            <p>${this.descricao}</p>
            <p id="p6" style="font-weight: bold">R$${this.preco},00</p>
            <p id="p1">${this.data_de_cadastro}</p>
            </br>
            `
        } else {
            throw new deuErro("Está faltando alguma informação. ;)")
        } 
    }
}

class ProdutoDestaque extends Produto {
    constructor(nome, data_de_cadastro, descricao, preco, imagemDestaque){
        super(nome, data_de_cadastro, descricao, preco)
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
        if(this.nome != "" && this.data_de_cadastro != "" && this.descricao != "" && this.preco != "" && this.imagemDestaque != ""){
            return `
            <img src="${this.imagemDestaque}" width="593"></img>
            <h4 id="nomeDest">${this.nome}</h4>
            <p id="p2">${this.descricao}
            </br>
            <p id="p3">R$${this.preco},00</p>
            <p id="p4">${this.data_de_cadastro}</p>
            </br>
            `
        } else{
            throw new deuErro("Está faltando alguma informação. ;)")
        }
    }
}

const produto = new Produto("PANDORA", 250806, "<h4><i> Anel Chevron Brilhante</i></h4> Em até 10x R$ 57,90 sem juros", 579,00, "anél1.jpg");
console.log(produto);

const produto2 = new Produto("PANDORA", 130406, "<h4><i> Anel Chevron Brilhante</i></h4> Em até 10x R$ 57,90 sem juros", 30, "anél1.jpg");
console.log(produto2);

const produto3 = new Produto("PANDORA", 121206, "<h4><i> Anel Chevron Brilhante</i></h4> Em até 10x R$ 57,90 sem juros", 90, "anél1.jpg");
console.log(produto3);

const produto4 = new Produto("PANDORA", 121206, "<h4><i> Anel Chevron Brilhante</i></h4> Em até 10x R$ 57,90 sem juros", 90, "anél1.jpg");
console.log(produto4);

const produtoDestaque = new ProdutoDestaque("PANDORA", 121022, "<h4> RECEBA NOSSAS NOVIDADES <br></br><i> Compre suas Joias Pandora parcelando em até 10x no cartão. Diversos modelos disponíveis. Os anéis da PANDORA podem ser utilizados sozinhos ou combinados, criando joias únicas! </i></h4>", 42, "anél1.jpg");
console.log(produtoDestaque);

var destaque = document.getElementById("produto-destaque");
destaque.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarProdutoDestaque());

var prod = document.getElementById("produto");
prod.insertAdjacentHTML('afterbegin', produto.mostrarProduto());

var prod = document.getElementById("produto2");
prod.insertAdjacentHTML('afterbegin', produto2.mostrarProduto());

var prod = document.getElementById("produto3");
prod.insertAdjacentHTML('afterbegin', produto3.mostrarProduto());

var prod = document.getElementById("produto4");
prod.insertAdjacentHTML('afterbegin', produto4.mostrarProduto());