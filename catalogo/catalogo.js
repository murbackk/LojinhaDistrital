const itens = [
  { nome: "Kit Bottom", preco: 20, imagem: "Kit Bottom.png" },
  { nome: "Chinelo", preco: 35, imagem: "Chinelo.png" },
  { nome: "Boné", preco: 10, imagem: "Boné.png" }
];

const catalogoLista = document.getElementById('catalogo-lista');
const carrinho = [];

itens.forEach(item => {
  const div = document.createElement('div');
  div.className = 'item';
  div.innerHTML = `
   <img src="${item.imagem}" alt="${item.nome}">
    <br>${item.nome}
    <div class="preco">R$ ${item.preco},00</div>
    Quantidade: <input type="number" id="qtd-${item.nome}" value="1" min="1" style="width:60px; font-size: 1em;">
    <br><br>
    <button onclick="adicionarCarrinho('${item.nome}', ${item.preco})">Adicionar ao carrinho</button>
  `;
  catalogoLista.appendChild(div);
});

function adicionarCarrinho(nome, preco) {
  const qtd = parseInt(document.getElementById(`qtd-${nome}`).value);
  carrinho.push({ nome, qtd, preco });
  atualizarCarrinho();
  alert("Produto adicionado ao carrinho")
}

function atualizarCarrinho() {
  const container = document.getElementById('carrinho-itens');
  container.innerHTML = '';
  let total = 0;
  carrinho.forEach(prod => {
    total += prod.qtd * prod.preco;
    const p = document.createElement('p');
    p.textContent = `${prod.qtd}x ${prod.nome} - R$ ${(prod.qtd * prod.preco).toFixed(2)}`;
    container.appendChild(p);
  });
  const totalP = document.createElement('p');
  totalP.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
  container.appendChild(totalP);
  const pagar = document.createElement('button');
  pagar.className = 'pagar';
  pagar.textContent = 'PAGAR';
  pagar.onclick = () => {
    localStorage.setItem("valorTotalCarrinho", total.toFixed(2));
    window.location.href = "pagamento.html";
  };
  container.appendChild(pagar);
}
function toggleMenu() {
  const menu = document.getElementById("menu-items");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}