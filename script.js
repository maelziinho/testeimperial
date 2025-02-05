body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #fff;
}

.header {
    background-color: black;
    color: white;
    text-align: center;
    padding: 50px 20px;
    min-height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header img {
    max-width: 80%;
    height: auto;
}

.header .header-slogan {
    color: #f9b025;
    font-size: 1.8em;
    font-family: 'Alex Brush', cursive;
    margin-top: 10px;
}

.informacoes {
    margin-top: 20px;
    font-family: Arial, sans-serif;
    color: #e7edf0;
}

button {
    background: #fda102;
    color: rgb(80, 17, 17);
    border: none;
    padding: 10px;
    cursor: pointer;
}

button:hover {
    background: #cc9227;
}

button:focus {
    outline: 2px solid #fda102;
}

.catalog-button {
    background: #f9b025;
}

.catalog-button:hover {
    background: #c78c1d;
}

.categorias {
    text-align: center;
    padding: 10px;
    background: #ccc;
    overflow: auto;
}

.categoria-button {
    background: #f9b025;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
}

.categoria-button:hover {
    background: #c78c1d;
}

.catalogo {
    padding: 20px;
    margin-bottom: 80px;
    background-color: #f0f0f0;
    overflow: auto;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
}

.produto {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    background: #fff;
    margin-bottom: 20px;
}

.produto img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
    max-height: 100px;
    object-fit: cover;
}

.produto h3 {
    margin-top: 10px;
    font-size: 1em;
}

.produto p {
    margin-top: 10px;
    font-size: 0.9em;
}

.cart-icon {
    position: fixed;
    top: 15px;
    right: 20px;
    cursor: pointer;
    font-size: 24px;
    color: red;
    z-index: 1001;
}

.cart-icon span {
    font-size: 14px;
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    padding: 2px 6px;
    border-radius: 50%;
}

.cart-details {
    display: none;
    position: fixed;
    top: 50px;
    right: 20px;
    background: white;
    border: 1px solid #ccc;
    padding: 10px;
    max-width: 400px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 400px;
    font-size: 14px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

textarea#orderNotes {
    width: calc(100% - 20px);
    height: 80px;
    margin-top: 10px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
}

.delivery-option, .location-option, .payment-option, .customer-name {
    margin-top: 10px;
}

.delivery-option p, .location-option p, .payment-option p, .customer-name p {
    margin: 0;
    font-weight: bold;
    margin-bottom: 10px;
}

.customer-name {
    margin-top: 10px;
    margin-bottom: 20px;
}

.customer-name input {
    margin-top: 10px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.customer-name button {
    margin-top: 10px;
    padding: 10px;
    background-color: #f9b025;
    color: white;
    border: none;
    cursor: pointer;
}

.customer-name button:hover {
    background-color: #c78c1d;
}

.delivery-option label, .payment-option label {
    margin-right: 10px;
}

#locationOption select {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
}

#finalMessage {
    margin-top: 20px;
    padding: 10px;
    background: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: left;
}

#finalMessage p {
    margin: 10px 0;
    font-size: 16px;
    color: #333;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.cart-item p {
    flex: 1;
}

.adjust-buttons {
    display: flex;
    align-items: center;
}

.adjust-buttons span {
    color: red;
    margin: 0 5px;
    font-size: 18px;
    cursor: pointer;
}

.remove-item {
    color: red;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
}

.footer {
    background: #f8f8f8;
    padding: 10px 0;
    text-align: center;
    border-top: 1px solid #e7e7e7;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    z-index: 1000;
}

.footer .social-media {
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer .social-media p {
    margin: 0 10px 0 0;
    font-weight: bold;
}

.footer .social-media a {
    margin: 0 10px;
}

.footer .social-media i {
    font-size: 25px;
}

.instagram-icon {
    color: #E4405F;
}

.instagram-icon:hover {
    color: #C13584;
}

.whatsapp-icon {
    color: #25D366;
}

.whatsapp-icon:hover {
    color: #128C7E;
}

.clock-icon {
    color: #FFD700;
}

.clock-icon:hover {
    color: #FFA500;
}

.motorcycle-icon {
    color: #FF4500;
}

.motorcycle-icon:hover {
    color: #c4331a;
}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .cart-icon {
        font-size: 28px;
    }
}

@media (max-width: 480px) {
    .grid {
        grid-template-columns: 1fr;
    }
    .header {
        padding: 30px 10px;
    }
    .header .header-slogan {
        font-size: 1.5em;
    }
    .catalog-button {
        padding: 10px 15px;
        font-size: 1em;
    }
    .produto h3 {
        font-size: 1em;
    }
    .produto p {
        font-size: 0.9em;
    }
    .produto button {
        font-size: 0.9em;
        padding: 8px;
    }
    .footer .social-media i {
        font-size: 24px;
    }
}
