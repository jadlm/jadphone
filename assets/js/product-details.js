// Récupérer l'ID du produit depuis l'URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

// Charger les détails du produit
function loadProductDetails() {
    const productId = getProductIdFromURL();
    const product = productsData.find(p => p.id === productId);

    if (!product) {
        document.body.innerHTML = '<div style="text-align: center; padding: 50px;"><h1>Produit non trouvé</h1><a href="products.html">Retour aux produits</a></div>';
        return;
    }

    // Mettre à jour le breadcrumb
    document.getElementById('breadcrumb-product').textContent = product.name;

    // Mettre à jour l'image principale
    document.getElementById('main-image').src = product.image;
    document.getElementById('main-image').alt = product.name;

    // Mettre à jour les informations du produit
    document.getElementById('detail-product-name').textContent = product.name;
    document.getElementById('detail-product-description').textContent = product.description;
    // Afficher par défaut le prix de la première option de stockage
    const initialPrice = product.storageOptions && product.storageOptions.length ? product.storageOptions[0].price : product.price;
    document.getElementById('detail-price').textContent = initialPrice.toFixed(2) + ' MAD';
    document.title = product.name + ' - Apple Jad Phone';

    // Générer les options de stockage
    const storageContainer = document.getElementById('detail-storage-options');
    storageContainer.innerHTML = '';

    product.storageOptions.forEach((option, index) => {
        const storageDiv = document.createElement('div');
        storageDiv.className = 'storage-option-detail' + (index === 0 ? ' selected' : '');
        storageDiv.innerHTML = `
            <input type="radio" id="storage-detail-${option.size}" 
                   name="storage-detail" 
                   value="${option.size}" 
                   data-price="${option.price}"
                   ${index === 0 ? 'checked' : ''}>
            <label for="storage-detail-${option.size}">
                <span class="storage-size">${option.size} Go</span>
                <span class="storage-price">${option.price.toFixed(2)} MAD</span>
            </label>
        `;
        storageContainer.appendChild(storageDiv);

        storageDiv.addEventListener('click', function() {
            document.querySelectorAll('.storage-option-detail').forEach(el => el.classList.remove('selected'));
            this.classList.add('selected');

            const newPrice = parseFloat(option.price);
            document.getElementById('detail-price').textContent = newPrice.toFixed(2) + ' MAD';
        });
    });

    // Ajouter les événements pour les radios
    document.querySelectorAll('input[name="storage-detail"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const newPrice = parseFloat(this.getAttribute('data-price'));
            document.getElementById('detail-price').textContent = newPrice.toFixed(2) + ' MAD';
        });
    });

    // Événements pour les couleurs
    // Générer les couleurs dynamiquement à partir des données
    const colorContainer = document.querySelector('.color-options');
    colorContainer.innerHTML = '';
    
    product.colors.forEach((color, index) => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color-option' + (index === 0 ? ' selected' : '');
        colorDiv.style.backgroundColor = color.hex;
        colorDiv.setAttribute('data-color', color.name);
        if (color.hex === '#ffffff') {
            colorDiv.style.border = '2px solid #ddd';
        }
        colorContainer.appendChild(colorDiv);
        
        colorDiv.addEventListener('click', function() {
            document.querySelectorAll('.color-option').forEach(el => el.classList.remove('selected'));
            this.classList.add('selected');
            document.getElementById('selected-color').textContent = this.getAttribute('data-color');
        });
    });
    
    // Initialiser la couleur sélectionnée
    document.getElementById('selected-color').textContent = product.colors[0].name;

    // Événements pour la quantité
    document.getElementById('qty-minus').addEventListener('click', function() {
        let qty = parseInt(document.getElementById('detail-quantity').value);
        if (qty > 1) {
            document.getElementById('detail-quantity').value = qty - 1;
        }
    });

    document.getElementById('qty-plus').addEventListener('click', function() {
        let qty = parseInt(document.getElementById('detail-quantity').value);
        if (qty < 10) {
            document.getElementById('detail-quantity').value = qty + 1;
        }
    });

    // Événement pour ajouter au panier
    document.getElementById('add-to-cart-detail').addEventListener('click', function() {
        const selectedStorage = document.querySelector('input[name="storage-detail"]:checked').value;
        const selectedPrice = parseFloat(document.querySelector('input[name="storage-detail"]:checked').getAttribute('data-price'));
        const quantity = parseInt(document.getElementById('detail-quantity').value);
        const selectedColor = document.getElementById('selected-color').textContent;

        const itemToAdd = {
            id: product.id,
            name: product.name,
            storage: selectedStorage,
            price: selectedPrice,
            color: selectedColor,
            image: product.image,
            quantity: quantity
        };

        CartSystem.addToCart(itemToAdd);

        // Animation de confirmation
        const btn = this;
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Ajouté au panier !';
        btn.classList.add('success');

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('success');
        }, 2000);
    });

    // Événement pour acheter maintenant
    document.getElementById('buy-now-btn').addEventListener('click', function() {
        const selectedStorage = document.querySelector('input[name="storage-detail"]:checked').value;
        const selectedPrice = parseFloat(document.querySelector('input[name="storage-detail"]:checked').getAttribute('data-price'));
        const quantity = parseInt(document.getElementById('detail-quantity').value);
        const selectedColor = document.getElementById('selected-color').textContent;

        const itemToAdd = {
            id: product.id,
            name: product.name,
            storage: selectedStorage,
            price: selectedPrice,
            color: selectedColor,
            image: product.image,
            quantity: quantity
        };

        CartSystem.addToCart(itemToAdd);
        window.location.href = 'cart.html';
    });
}

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    CartSystem.init();
    CartSystem.updateCartCount();
    loadProductDetails();
    initMobileMenu();
});

function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
}
