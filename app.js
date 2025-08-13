 function criaCartao(categoria, pergunta, resposta) {
  let container = document.getElementById('container') 
  let cartao = document.createElement('article') 
  cartao.className = 'cartao' 

  cartao.innerHTML = `
  <div class="cartao__conteudo">
                    <h3>Vida marinha</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>Quanto tempo em média vive uma tartaruga?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                       <p>A expectativa de vida de uma tartaruga varia muito dependendo da espécie, mas, em geral, elas
                        podem viver entre 30 e mais de 100 anos.</p>
                    </div>
                </div>
                `
  }



