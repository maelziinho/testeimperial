let currentPage = 1;
const productsPerPage = 6;
let cart = [];
const avaliacoes = [];

const produtos = [
    // (Lista de produtos permanece igual)
    // (Lista de produtos permanece igual)
    {
        id: 1,
        nome: "X-Burguer",
        preco: 8.00,
        descricao: "Delicioso hambúrguer com pão, carne e mussarela.",
        imagem: "imagens/xburguer.png",
        categoria: "burguer"
    },
    {
        id: 2,
        nome: "X-Salada",
        preco: 9.00,
        descricao: "Delicioso hambúrguer com pão, carne, mussarela e salada.",
        imagem: "imagens/xsalada.png",
        categoria: "burguer"
    },
    {
        id: 3,
        nome: "X-Frango",
        preco: 12.00,
        descricao: "Delicioso hambúrguer com pão, frango empanado e salada, alface e tomate.",
        imagem: "imagens/xfrango.png",
        categoria: "burguer"
    },
    {
        id: 4,
        nome: "X-Calabresa",
        preco: 12.00,
        descricao: "Delicioso hambúrguer com pão, carne, mussarela calabresa e cebola.",
        imagem: "imagens/xcalabresa.png",
        categoria: "burguer"
    },
    {
        id: 5,
        nome: "X-Tudo",
        preco: 15.00,
        descricao: "Delicioso hambúrguer com pão, carne, presunto, bacon, milho, batata palha, ovo e salada, alface e tomate.",
        imagem: "imagens/xtudo.png",
        categoria: "burguer"
    },
    {
        id: 6,
        nome: "Duplo Burguer",
        preco: 39.90,
        descricao: "Um delicioso hambúrguer clássico, com pão, duas carnes, duas mussarela e salada, alface e tomate.",
        imagem: "imagens/duploburguer.png",
        categoria: "Duplos"
    },
    {
        id: 7,
        nome: "Duplo Cheddar",
        preco: 17.00,
        descricao: "Um delicioso hambúrguer clássico, com pão, duas carnes, dois cheddar, bacon e salada, alface e tomate.",
        imagem: "imagens/duplocheddar.png",
        categoria: "Duplos"
    },
    {
        id: 8,
        nome: "Especial Imperial",
        preco: 20.00,
        descricao: "Um deliciso hambúrguer especial, com pão, três carnes, três queijos, cheddar, bacon, ovo, batata palha, cebola e salada, alface e tomate.",
        imagem: "imagens/especialimperial.png",
        categoria: "Duplos"
    },
    {
        id: 9,
        nome: "Batata Frita P",
        preco: 7.00,
        descricao: "Deliciosa batata frita tamanho P, crocante e macia (serve 1 pessoa)",
        imagem: "imagens/batatap.png",
        categoria: "Porções"
    },
    {
        id: 10,
        nome: "Batata Frita G",
        preco: 9.00,
        descricao: "Deliciosa batata frita tamanho G, crocante e macia (serve até duas pessoas)",
        imagem: "imagens/batatag.png",
        categoria: "Porções"
    },
    {
        id: 11,
        nome: "Batata Frita Para Compartilhar",
        preco: 12.00,
        descricao: "Deliciosa batata frita para compartilhar com a galera, acompanha ketchup e molho de maionese. (serve até 4 pessoas)",
        imagem: "imagens/batatagg.png",
        categoria: "Porções"
    },
    {
        id: 12,
        nome: "Linguiça Imperial",
        preco: 5.00,
        descricao: "Deliciosa linguiça.",
        imagem: "imagens/linguica.png",
        categoria: "Porções"
    },
    {
        id: 13,
        nome: "Molho Barbecue",
        preco: 2.00,
        descricao: "Delicioso molho barbecue. O primeiro é grátis!",
        imagem: "imagens/molhobarbecue.png",
        categoria: "molhos"
    },
    {
        id: 14,
        nome: "Molho Ranch",
        preco: 2.00,
        descricao: "Delicioso molho ranch. O primeiro é grátis!",
        imagem: "imagens/molhoranch.png",
        categoria: "molhos"
    },
    {
        id: 15,
        nome: "Molho de Alho",
        preco: 2.00,
        descricao: "Delicioso molho de alho. O primeiro é grátis!",
        imagem: "imagens/molhodealho.png",
        categoria: "molhos"
    },
    {
        id: 16,
        nome: "Refrigerante Laranja 250ml",
        preco: 3.00,
        descricao: "Geladinho para refrescar e acompanhar o seu lanche.",
        imagem: "imagens/laranja250ml.png",
        categoria: "Bebidas"
    },
    {
        id: 17,
        nome: "Refrigerante Uva 250ml",
        preco: 3.00,
        descricao: "Geladinho para refrescar e acompanhar o seu lanche.",
        imagem: "imagens/uva250ml.png",
        categoria: "Bebidas"
    },
    {
        id: 18,
        nome: "Refrigerante Guaraná 250ml",
        preco: 3.00,
        descricao: "Geladinho para refrescar e acompanhar o seu lanche.",
        imagem: "imagens/guarana250ml.png",
        categoria: "Bebidas"
    },
    {
        id: 19,
        nome: "Refrigerante Jeri Cola 250ml",
        preco: 3.00,
        descricao: "Geladinho para refrescar e acompanhar o seu lanche.",
        imagem: "imagens/jeri250ml.png",
        categoria: "Bebidas"
    },
    {
        id: 20,
        nome: "Refrigerante Laranja 250ml",
        preco: 3.00,
        descricao: "Geladinho para refrescar e acompanhar o seu lanche.",
        imagem: "imagens/laranja250ml.png",
        categoria: "Bebidas"
    },
    {
        id: 21,
        nome: "Refrigerante Laranja 250ml",
        preco: 3.00,
        descricao: "Geladinho para refrescar e acompanhar o seu lanche.",
        imagem: "imagens/laranja250ml.png",
        categoria: "Bebidas"
    },
    {
        id: 17,
        nome: "Ketchup",
        preco: 2.00,
        descricao: "Molho de ketchup. O primeiro é grátis!",
        imagem: "imagens/ketchup.png",
        categoria: "molhos"
    },
    {
        id: 18,
        nome: "Maionese",
        preco: 2.00,
        descricao: "Molho de maionese. O primeiro é grátis!",
        imagem: "imagens/maionese.png",
        categoria: "molhos"
    }
];

let ketchupGratuito = 1;
let maioneseGratuita = 1;

function showCatalog() {
    document.getElementById("header").style.display = "none";
    document.getElementById("mainFooter").style.display = "block"; // Mostrar o rodapé padrão
    document.body.style.overflow = "auto"; // Permitir rolagem após visualizar o catálogo
    document.getElementById("categorias").style.display = "block";
    document.getElementById("catalogo").style.display = "block";
    document.getElementById("cartIcon").style.display = "block";
    filterProducts('burguer'); // Exibe produtos da categoria "burguer" ao abrir o catálogo
}

function filterProducts(categoria) {
    const filteredProducts = produtos.filter(produto => produto.categoria.toLowerCase() === categoria.toLowerCase());
    renderFilteredPage(filteredProducts);
}

function renderFilteredPage(products) {
    const container = document.getElementById("produtos");
    container.innerHTML = '';  // Limpa os produtos anteriores
    if (products.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>';  // Exibe mensagem se nenhum produto for encontrado
    } else {
        products.forEach(produto => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('produto');

            const productImage = document.createElement('img');
            productImage.src = produto.imagem;
            productDiv.appendChild(productImage);

            const productName = document.createElement('h3');
            productName.textContent = produto.nome;
            productDiv.appendChild(productName);

            const productPrice = document.createElement('p');
            productPrice.textContent = `R$ ${produto.preco.toFixed(2)}`;
            productDiv.appendChild(productPrice);

            const productDescription = document.createElement('p');
            productDescription.textContent = produto.descricao;
            productDiv.appendChild(productDescription);

            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = `Adicionar ao Carrinho (${produto.quantity || 0})`;
            addToCartButton.onclick = () => addToCart(produto);
            productDiv.appendChild(addToCartButton);

            container.appendChild(productDiv);
        });
    }
}

function addToCart(produto) {
    const existingItem = cart.find(item => item.id === produto.id);

    if (existingItem) {
        existingItem.quantity += 1; // Atualiza a quantidade se já existir
    } else {
        cart.push({ ...produto, quantity: 1 }); // Adiciona novo produto ao carrinho
    }

    // Atualiza quantidade no botão
    updateProductQuantity(produto.id);
    updateCart();
}

function updateProductQuantity(productId) {
    const products = document.querySelectorAll('.produto');
    products.forEach(productDiv => {
        const addToCartButton = productDiv.querySelector('button');
        const productName = productDiv.querySelector('h3').textContent;
        const product = produtos.find(p => p.nome === productName);
        if (product && product.id === productId) {
            addToCartButton.textContent = `Adicionar ao Carrinho (${cart.find(item => item.id === productId)?.quantity || 0})`;
        }
    });
}

function updateCart(deliveryFee = 0) {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');
    cartItemsContainer.innerHTML = '';  // Limpa os itens do carrinho
    let total = 0;

    cart.forEach(item => {
        const price = item.preco; // Obtém o preço do produto
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        const itemName = document.createElement('p');
        if (item.nome === 'Ketchup' || item.nome === 'Maionese') {
            if (item.nome === 'Ketchup' && item.quantity <= ketchupGratuito) {
                itemName.textContent = `${item.nome} - Gratuito (${item.quantity}x)`;
            } else if (item.nome === 'Maionese' && item.quantity <= maioneseGratuita) {
                itemName.textContent = `${item.nome} - Gratuito (${item.quantity}x)`;
            } else {
                const extraQuantity = item.quantity - (item.nome === 'Ketchup' ? ketchupGratuito : maioneseGratuita);
                itemName.textContent = `${item.nome} - R$ ${(price * extraQuantity).toFixed(2)} (${item.quantity}x)`;
                total += price * extraQuantity; // Adiciona ao total apenas as unidades extras
            }
        } else {
            itemName.textContent = `${item.nome} - R$ ${(price * item.quantity).toFixed(2)} (${item.quantity}x)`;
            total += price * item.quantity; // Adiciona ao total para outras categorias
        }
        cartItemDiv.appendChild(itemName);

        // Seletor de quantidade
        const adjustButtons = document.createElement('div');
        adjustButtons.classList.add('adjust-buttons');

        const decreaseButton = document.createElement('span');
        decreaseButton.textContent = '-';
        decreaseButton.onclick = () => updateItemQuantity(item, item.quantity - 1);
        adjustButtons.appendChild(decreaseButton);

        const quantityDisplay = document.createElement('span');
        quantityDisplay.textContent = item.quantity;
        adjustButtons.appendChild(quantityDisplay);

        const increaseButton = document.createElement('span');
        increaseButton.textContent = '+';
        increaseButton.onclick = () => updateItemQuantity(item, item.quantity + 1);
        adjustButtons.appendChild(increaseButton);
        cartItemDiv.appendChild(adjustButtons);

        const removeButton = document.createElement('span');
        removeButton.textContent = '🗑️'; // O "X" vermelho
        removeButton.classList.add('remove-item');
        removeButton.onclick = () => removeFromCart(item);
        cartItemDiv.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItemDiv);
    });

    total += deliveryFee; // Adiciona a taxa de entrega ao total
    cartTotalContainer.textContent = `Total: R$ ${total.toFixed(2)} (incluindo taxa de entrega: R$ ${deliveryFee.toFixed(2)})`;
    cartCount.textContent = cart.length; // Atualiza a quantidade de produtos no carrinho
}

function handleDeliveryOptionChange(option) {
    const locationOption = document.getElementById('locationOption');
    const customerNameInput = document.getElementById('customerName');
    if (option === 'Delivery') {
        locationOption.style.display = 'block';
    } else {
        locationOption.style.display = 'none';
        updateDeliveryFee(0); // Reseta a taxa de entrega quando a opção é "Retirada"
    }
    customerNameInput.style.display = 'block';
}

function updateDeliveryFee() {
    const locationSelect = document.getElementById('locationSelect');
    const selectedOption = locationSelect.options[locationSelect.selectedIndex];
    const deliveryFee = parseFloat(selectedOption.getAttribute('data-fee')) || 0;
    updateCart(deliveryFee);
}

function updateItemQuantity(item, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(item); // Remove o item se a nova quantidade for 0 ou menor
    } else {
        item.quantity = newQuantity; // Atualiza a quantidade
        updateCart(); // Atualiza o carrinho
    }
}

function removeFromCart(item) {
    const index = cart.findIndex(cartItem => cartItem.id === item.id);
    if (index > -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

function toggleCart() {
    const cartDetails = document.getElementById('cartDetails');
    cartDetails.style.display = cartDetails.style.display === 'block' ? 'none' : 'block';
}

function finalizeOrder() {
    if (cart.length === 0) {
        alert("Por favor, adicione pelo menos um produto ao carrinho.");
        return;
    }
    
    const customerName = document.getElementById('nameInput').value.trim();
    if (!document.querySelector('input[name="paymentOption"]:checked')) {
        alert("Por favor, selecione um método de pagamento.");
        return;
    }
    if (!document.querySelector('input[name="deliveryOption"]:checked')) {
        alert("Por favor, selecione a opção de entrega.");
        return;
    }
    if (document.querySelector('input[name="deliveryOption"]:checked').value === 'Delivery' && !document.getElementById('locationSelect').value) {
        alert("Por favor, selecione sua localização.");
        return;
    }
    if (customerName === "") {
        alert("Por favor, insira seu nome.");
        return;
    }

    document.getElementById('finalMessage').style.display = 'block';
}

function sendOrder() {
    const customerName = document.getElementById('nameInput').value.trim();
    let orderDetails = cart.map(item => {
        const price = item.preco;
        return `**${item.nome}** - R$ ${(price * item.quantity).toFixed(2)} (${item.quantity}x)`;
    }).join('\n');

    let totalAmount = cart.reduce((sum, item) => {
        const price = item.preco;
        return sum + price * item.quantity;
    }, 0).toFixed(2);

    const orderNotes = document.getElementById('orderNotes').value;
    const deliveryOption = document.querySelector('input[name="deliveryOption"]:checked')?.value || '';
    const paymentOption = document.querySelector('input[name="paymentOption"]:checked')?.value || '';
    const locationSelect = document.getElementById('locationSelect');
    const location = locationSelect ? locationSelect.value : '';
    const deliveryFee = parseFloat(locationSelect.options[locationSelect.selectedIndex]?.getAttribute('data-fee')) || 0;
    totalAmount = (parseFloat(totalAmount) + deliveryFee).toFixed(2);

    let phoneNumber = '5511965201725'; // Número de telefone para o WhatsApp
    let message = `Olá, meu nome é ${customerName}, estou enviando o meu pedido:\n\n${orderDetails}\n\nTaxa de entrega: R$ ${deliveryFee.toFixed(2)}\nTotal: R$ ${totalAmount}`;
    if (orderNotes) {
        message += `\n\nObservações: ${orderNotes}`;
    }
    if (deliveryOption) {
        message += `\n\nOpção de entrega: ${deliveryOption}`;
    }
    if (location) {
        message += `\n\nLocalização: ${location}`;
    }
    if (paymentOption) {
        message += `\n\nForma de pagamento: ${paymentOption}`;
    }
    message += `\n\nObrigado(a)!`;

    let whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}
