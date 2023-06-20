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
          throw new deuErro("Estão faltando informações.)")
        } 
    }
}

class ProdutoDestaque extends Produto {
constructor(nome, data_de_cadastro, descricao, imgDestaque){
        super(nome, data_de_cadastro, descricao,)
        this.imgDestaque = imgDestaque
    }


//-- mostrar produto em destaque --//


mostrarProdutoDestaque(){
        try {
            return this.montarProdutoDestaque()
        } catch(erro){
            console.log(erro.message)
        }
    }


//-- montar produto em destaque --//


montarProdutoDestaque(){
if(this.nome != "" && this.data_de_cadastro != "" && this.descricao != "" && this.imgDestaque != ""){
            return `
            <img src="${this.imgDestaque}" width="593"></img>
            <h4 id="nomeDest">${this.nome}</h4>
            <p id="p2">${this.descricao}
            </br>
            <p id="p4">${this.data_de_cadastro}</p>
            </br>
            `
        } else{
            throw new deuErro("Estão faltando informações.)")
        }
    }
}



//-- produto destaque --//


const produtoDestaque = new ProdutoDestaque("<h1>PANDORA</h1>", 121022, "<h3> RECEBA NOSSAS NOVIDADES</h3> <h4><i> Os anéis da PANDORA são trabalhados com diferentes tons de Ouro 14K e Prata de Lei e apresentam pedras preciosas, pedras ou pérolas cultivadas. Os anéis da PANDORA podem ser utilizados sozinhos ou combinados, criando joias únicas! </i></h4>","anél1.jpg");
console.log(produtoDestaque);



//-- produtos --//


const produto = new Produto("PANDORA", 250806, "<h4><i>Anel Chevron Brilhante</i></h4>           <h4>Simples e elegante, este anel em Y pode ser usado sozinho, como uma peça de destaque brilhante, ou combinado com outros anéis.</h4>", 579);
console.log(produto);


const produto1 = new Produto("PANDORA", 250806, "<h4><i>Anel Riqueza Botanica Brilhante</i></h4> <h4>Nosso Anel Riqueza Botânica Brilhante ostenta três pedras centrais em formato de pétala, duas em lapidação navete e uma em gota.</h4>", 1.129);
console.log(produto1);


const produto2 = new Produto("PANDORA", 130203, "<h4><i>Anel Rosetm Beleza Clássica</i></h4>     <h4>Adicione um toque sutil de brilho a cada roupa com este anel, simples e elegante.</h4><br>", 1.259);
console.log(produto2);


const produto3 = new Produto("PANDORA", 130203, "<h4><i>Anel Coração Vermelho Elevado</i></h4>   <h4>Expresse o verdadeiro desejo do seu coração com este anel Sparkle & Hearts. Finalizado à mão em banho de ouro rosa 14k.</h4>", 1.059);
console.log(produto3);



//-- var destaque --//

var destaque = document.getElementById("produto-destaque");
destaque.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarProdutoDestaque());


var prod = document.getElementById("produto");
prod.insertAdjacentHTML('afterbegin', produto.mostrarProduto());


var prod = document.getElementById("produto1");
prod.insertAdjacentHTML('afterbegin', produto1.mostrarProduto());


var prod = document.getElementById("produto2");
prod.insertAdjacentHTML('afterbegin', produto2.mostrarProduto());


var prod = document.getElementById("produto3");
prod.insertAdjacentHTML('afterbegin', produto3.mostrarProduto());