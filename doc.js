
// Produtos simulados (você pode carregar isso dinamicamente)
const produtos = [
    { id: 1, nome: "Frango", preco: 10.00 },
    { id: 2, nome: "carne seca", preco: 10.00 },
    { id: 3, nome: "Presunto", preco: 10.00 },
    { id: 4, nome: "Sanduiche-frango", preco: 10.00 },
     { id: 5, nome: "Sanduiche-carne", preco: 10.00 },
];

const listaCarrinho = document.getElementById("lista-carrinho");
const total = document.getElementById("total");

// Inicializa o carrinho vazio
const carrinho = [];

// Função para renderizar o carrinho
// Função para renderizar o carrinho (agora apenas atualiza o total)
function renderizarCarrinho() {
    let carrinhoTotal = 0;

    for (const item of carrinho) {
        carrinhoTotal += item.preco;
    }

    total.textContent = `R$ ${carrinhoTotal.toFixed(2)}`;
}

// Adicionar um produto ao carrinho
function adicionarProdutoAoCarrinho(produto) {
    carrinho.push(produto);
    renderizarCarrinho();
}

// Event listeners para botões "Adicionar ao Carrinho"
const botoesAdicionar = document.querySelectorAll(".adicionar");
botoesAdicionar.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        adicionarProdutoAoCarrinho(produtos[index]);
    });
});

// Função para criar a mensagem com base nos produtos no carrinho
function criarMensagemCarrinho(carrinho) {
    let mensagem = 'Meu pedido:\n';

    for (const item of carrinho) {
        mensagem += `${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
    }

    return mensagem;
}

// Função para criar a mensagem com base nos produtos no carrinho
function criarMensagemCarrinho(carrinho) {
    let mensagem = 'Meu pedido:\n';

    for (const item of carrinho) {
        mensagem += `${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
    }

    return mensagem;
}

// Event listener para o botão "Concluir Pedido"
const botaoConcluirPedido = document.getElementById("concluir-pedido");
botaoConcluirPedido.addEventListener("click", () => {
    // Verificar se o carrinho está vazio
    if (carrinho.length === 0) {
        alert('O carrinho está vazio. Adicione produtos antes de finalizar o pedido.');
        return;
    }

    // Criar a mensagem com base nos produtos no carrinho
    const mensagemWhatsApp = criarMensagemCarrinho(carrinho);

    // Número de telefone do WhatsApp Business
    const numeroWhatsApp = '+5599981105670';

    // Redirecionar para o WhatsApp com a mensagem pré-preenchida
    window.location.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;
});

let adicionado = document.getElementById('frango');
adicionado.addEventListener('click',function(a){
    alert('Adicionado ao carrinho');
    a.preventDefault();
})

let adicionado2 = document.getElementById('carne');
adicionado2.addEventListener('click',function(a){
    alert('Adicionado ao carrinho');
    a.preventDefault();
})

let adicionado3 = document.getElementById('presunto');
adicionado3.addEventListener('click',function(a){
    alert('Adicionado ao carrinho');
    a.preventDefault();

})