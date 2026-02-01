// Système de gestion du panier avec localStorage
const CartSystem = {
    // Initialiser le panier
    init: function() {
        // Log pour debug d'initialisation
        try {
            console.log('CartSystem.init - url:', window.location.href, 'localStorage.cart:', localStorage.getItem('cart'));
        } catch (e) {
            console.log('CartSystem.init - cannot access localStorage in this context', e);
        }

        // Créer un panier vide s'il n'existe pas
        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        
        // Mettre à jour le compteur du panier sur toutes les pages
        this.updateCartCount();
    },
    
    // Récupérer le panier depuis localStorage
    getCart: function() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    },
    
    // Sauvegarder le panier dans localStorage
    saveCart: function(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        try {
            console.log('CartSystem.saveCart - saved cart:', cart, 'raw:', localStorage.getItem('cart'), 'url:', window.location.href);
        } catch (e) {
            console.log('CartSystem.saveCart - cannot log localStorage', e);
        }
        this.updateCartCount();
    },
    
    // Ajouter un produit au panier
    addToCart: function(product) {
        console.log('CartSystem.addToCart called with', product);
        // Défaut quantity à 1 si absent ou invalide
        if (!product.quantity || isNaN(product.quantity) || product.quantity < 1) {
            product.quantity = 1;
        }
        const cart = this.getCart();
        
        // Vérifier si le produit existe déjà dans le panier avec le même stockage (comparaison tolérante)
        const existingItemIndex = cart.findIndex(item => 
            Number(item.id) === Number(product.id) && String(item.storage) === String(product.storage)
        );
        
        if (existingItemIndex !== -1) {
            // Augmenter la quantité si le produit existe déjà
            cart[existingItemIndex].quantity += product.quantity;
        } else {
            // Ajouter le nouveau produit
            cart.push(product);
        }
        
        this.saveCart(cart);
        
        // Animation de notification
        this.showNotification('Produit ajouté au panier !');
    },
    
    // Supprimer un produit du panier
    removeFromCart: function(productId, storage) {
        let cart = this.getCart();
        console.log('CartSystem.removeFromCart - before:', cart, 'productId:', productId, 'storage:', storage);
        cart = cart.filter(item => !(Number(item.id) === Number(productId) && String(item.storage) === String(storage)));
        this.saveCart(cart);
        console.log('CartSystem.removeFromCart - after:', cart);
        
        // Animation de notification
        this.showNotification('Produit retiré du panier !');
    },

    
    // Mettre à jour la quantité d'un produit
    updateQuantity: function(productId, storage, change) {
        const cart = this.getCart();
        const itemIndex = cart.findIndex(item => 
            Number(item.id) === Number(productId) && String(item.storage) === String(storage)
        );
        
        if (itemIndex !== -1) {
            cart[itemIndex].quantity += change;
            
            // Supprimer l'article si la quantité est inférieure ou égale à 0
            if (cart[itemIndex].quantity <= 0) {
                cart.splice(itemIndex, 1);
            }
            
            this.saveCart(cart);
        } else {
            console.log('CartSystem.updateQuantity - item not found for', productId, storage, 'cart:', cart);
        }
    },
    
    // Vider complètement le panier
    clearCart: function() {
        this.saveCart([]);
    },
    
    // Mettre à jour le compteur du panier dans la navbar
    updateCartCount: function() {
        const cart = this.getCart();
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        
        // Mettre à jour tous les compteurs de panier sur la page
        const cartCountElements = document.querySelectorAll('#cart-count');
        cartCountElements.forEach(element => {
            element.textContent = totalItems;
        });
        
        return totalItems;
    },
    
    // Afficher une notification
    showNotification: function(message) {
        // Créer l'élément de notification
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Ajouter les styles pour la notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #34c759;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            z-index: 9999;
            transform: translateX(150%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        // Styles pour le contenu de la notification
        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
        `;
        
        // Ajouter la notification à la page
        document.body.appendChild(notification);
        
        // Afficher la notification avec une animation
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Masquer et supprimer la notification après 3 secondes
        setTimeout(() => {
            notification.style.transform = 'translateX(150%)';
            
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    },
    
    // Calculer le total du panier
    getCartTotal: function() {
        const cart = this.getCart();
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
};

// Initialiser le panier au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    CartSystem.init();
});