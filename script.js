let currentPage = 1;
const productsPerPage = 6;
let cart = [];
const avaliacoes = [];
const produtos = [
    {
        id: 1,
        nome: "X-Burguer",
        preco: 8.00,
        descricao: "Delicioso hambúrguer com pão, carne e mussarela.",
        imagem: "imagens/xburguer.png",
        categoria: "burguer"
    },
    // Outros produtos...
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
    },
    {
        id: 19,
        nome: "Molho Especial",
        preco: 3.00,
        descricao: "Molho especial, sempre cobrado.",
        imagem: "imagens/molhoespecial.png",
        categoria: "molhos"
    }
];

let ketchupGratuito = 1;
let maioneseGratuita = 1;

function showCatalog() {
    document.getElementById("header").style.display = "none";
    document.getElementById("mainFooter").style.display = "block";
    document.body.style.overflow = "auto";
    document.getElementById("categorias").style.display = "block";
    document.getElementById("catalogo").style.display = "block";
    document.getElementById("cartIcon").style.display = "block";
    filterProducts('burguer');
}

function filterProducts(categoria) {
    const filteredProducts = produtos.filter(produto => produto.categoria.toLowerCase() === categoria.toLowerCase());
    renderFilteredPage(filteredProducts);
}

function renderFilteredPage(products) {
    const container = document.getElementById("produtos");
    container.innerHTML = '';
    if (products.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>';
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
            addToCartButton.textContent = `Pedir Agora (${produto.quantity || 0})`;
            addToCartButton.onclick = () => addToCart(produto);
            productDiv.appendChild(addToCartButton);

            container.appendChild(productDiv);
        });
    }
}

function addToCart(produto) {
    const existingItem = cart.find(item => item.id === produto.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...produto, quantity: 1 });
    }

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
            addToCartButton.textContent = `Pedir Agora (${cart.find(item => item.id === productId)?.quantity || 0})`;
        }
    });
}

function updateCart(deliveryFee = 0) {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const price = item.preco;
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
                total += price * extraQuantity;
            }
        } else {
            itemName.textContent = `${item.nome} - R$ ${(price * item.quantity).toFixed(2)} (${item.quantity}x)`;
            total += price * item.quantity;
        }
        cartItemDiv.appendChild(itemName);

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
        removeButton.textContent = '🗑️';
        removeButton.classList.add('remove-item');
        removeButton.onclick = () => removeFromCart(item);
        cartItemDiv.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItemDiv);
    });

    total += deliveryFee;
    cartTotalContainer.textContent = `Total: R$ ${total.toFixed(2)} (incluindo taxa de entrega: R$ ${deliveryFee.toFixed(2)})`;
    cartCount.textContent = cart.length;
}

function handleDeliveryOptionChange(option) {
    const locationOption = document.getElementById('locationOption');
    const customerNameInput = document.getElementById('customerName');
    if (option === 'Delivery') {
        locationOption.style.display = 'block';
    } else {
        locationOption.style.display = 'none';
        updateDeliveryFee(0);
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
        removeFromCart(item);
    } else {
        item.quantity = newQuantity;
        updateCart();
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

    sendOrder();  // Enviar o pedido via WhatsApp
    cart = [];  // Esvaziar o carrinho após a finalização do pedido
    updateCart();  // Atualizar o carrinho na interface
}

function sendOrder() {
    const customerName = document.getElementById('nameInput').value.trim();
    if (cart.length === 0) {
        alert("Por favor, adicione pelo menos um produto ao carrinho.");
        return;
    }
    let orderDetails = cart.map(item => {
        const price = item.preco;
        if ((item.nome === 'Ketchup' && item.quantity <= ketchupGratuito) || (item.nome === 'Maionese' && item.quantity <= maioneseGratuita)) {
            return `*${item.nome}* - Gratuito (${item.quantity}x)`;
        } else if (item.nome === 'Ketchup' || item.nome === 'Maionese') {
            const extraQuantity = item.quantity - (item.nome === 'Ketchup' ? ketchupGratuito : maioneseGratuita);
            return `*${item.nome}* - R$ ${(price * extraQuantity).toFixed(2)} (${item.quantity}x)`;
        } else {
            return `*${item.nome}* - R$ ${(price * item.quantity).toFixed(2)} (${item.quantity}x)`;
        }
    }).join('\n');

    let totalAmount = cart.reduce((sum, item) => {
        const price = item.preco;
        if ((item.nome === 'Ketchup' && item.quantity <= ketchupGratuito) || (item.nome === 'Maionese' && item.quantity <= maioneseGratuita)) {
            return sum;
        } else if (item.nome === 'Ketchup' || item.nome === 'Maionese') {
            const extraQuantity = item.quantity - (item.nome === 'Ketchup' ? ketchupGratuito : maioneseGratuita);
            return sum + price * extraQuantity;
        } else {
            return sum + price * item.quantity;
        }
    }, 0).toFixed(2);

    const orderNotes = document.getElementById('orderNotes').value;
    const deliveryOption = document.querySelector('input[name="deliveryOption"]:checked')?.value || '';
    const paymentOption = document.querySelector('input[name="paymentOption"]:checked')?.value || '';
    const locationSelect = document.getElementById('locationSelect');
    const location = locationSelect ? locationSelect.value : '';
    const deliveryFee = parseFloat(locationSelect.options[locationSelect.selectedIndex]?.getAttribute('data-fee')) || 0;
    totalAmount = (parseFloat(totalAmount) + deliveryFee).toFixed(2);

    let phoneNumber = '5511965201725';
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

    // Esvaziar o carrinho após envio do pedido
    cart = [];
    updateCart();
}

function showFinalMessage() {
    const customerName = document.getElementById('nameInput').value.trim();
    if (customerName === "") {
        alert("Por favor, insira seu nome.");
        return;
    }
    document.getElementById('finalMessage').style.display = 'block';
}

// Adicionar o evento de clique ao botão de finalizar pedido
document.getElementById('finalizeButton').addEventListener('click', finalizeOrder);
