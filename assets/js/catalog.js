// Elementos DOM
const productCatalog = document.getElementById('productCatalog');
const searchInput = document.getElementById('searchInput');
const brandFilter = document.getElementById('brandFilter');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const modalProductName = document.getElementById('modalProductName');
const modalProductBrand = document.getElementById('modalProductBrand');
const modalProductPrice = document.getElementById('modalProductPrice');
const modalProductDescription = document.getElementById('modalProductDescription');
const sizeSelector = document.getElementById('sizeSelector');
const imageCarousel = document.getElementById('imageCarousel');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');
const addToCartButton = document.getElementById('addToCartButton');
const cartButton = document.getElementById('cartButton');
const cartDropdown = document.getElementById('cartDropdown');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const quoteButton = document.getElementById('quoteButton');

// Variables globales
let currentProduct = null;
let selectedSize = null;
let currentSlide = 0;
let cart = [];

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    // Cargar productos
    renderProducts(products);
    
    // Cargar carrito desde localStorage
    loadCart();
    
    // Event listeners
    searchInput.addEventListener('input', filterProducts);
    brandFilter.addEventListener('change', filterProducts);
    closeModal.addEventListener('click', () => productModal.classList.add('hidden'));
    prevSlide.addEventListener('click', showPrevSlide);
    nextSlide.addEventListener('click', showNextSlide);
    addToCartButton.addEventListener('click', addToCart);
    cartButton.addEventListener('click', toggleCart);
    quoteButton.addEventListener('click', sendWhatsAppQuote);
    
    // Cerrar carrito al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!cartDropdown.contains(e.target) && !cartButton.contains(e.target)) {
            cartDropdown.classList.add('hidden');
        }
    });
});

// Función para renderizar los productos
function renderProducts(productsToRender) {
    productCatalog.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productCatalog.innerHTML = '<p class="col-span-full text-center text-gray-500 py-8">No se encontraron productos que coincidan con tu búsqueda.</p>';
        return;
    }
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white shadow-md overflow-hidden product-card';
        
        productCard.innerHTML = `
            <div class="p-4">
                <img src="${product.images[0]}" alt="${product.name}" class="card-image">
                <h3 class="font-bold text-lg mt-2">${product.name}</h3>
                <p class="text-gray-600">${product.brand}</p>
                <p class="text-blue-600 font-semibold mt-2">$${product.price.toFixed(2)}</p>
                <button class="add-product-btn w-full mt-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300" data-id="${product.id}">
                    Agregar
                </button>
            </div>
        `;
        
        productCatalog.appendChild(productCard);
        
        // Añadir evento al botón
        const addButton = productCard.querySelector('.add-product-btn');
        addButton.addEventListener('click', () => openProductModal(product));
    });
}

// Función para filtrar productos
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedBrand = brandFilter.value;
    
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesBrand = selectedBrand === '' || product.brand === selectedBrand;
        
        return matchesSearch && matchesBrand;
    });
    
    renderProducts(filteredProducts);
}

// Funciones del modal
function openProductModal(product) {
    currentProduct = product;
    selectedSize = null;
    currentSlide = 0;
    
    // Configurar información del producto
    modalProductName.textContent = product.name;
    modalProductBrand.textContent = product.brand;
    modalProductPrice.textContent = `$${product.price.toFixed(2)}`;
    modalProductDescription.textContent = product.description;
    
    // Configurar carrusel de imágenes
    setupCarousel(product.images);
    
    // Configurar selector de tallas
    setupSizeSelector(product.sizes);
    
    // Mostrar modal
    productModal.classList.remove('hidden');
}

function setupCarousel(images) {
    imageCarousel.innerHTML = '';
    
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        
        slide.innerHTML = `
            <img src="${image}" alt="Vista del producto" class="carousel-image">
        `;
        
        imageCarousel.appendChild(slide);
    });
}

function showNextSlide() {
    const slides = imageCarousel.querySelectorAll('.carousel-slide');
    slides[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function showPrevSlide() {
    const slides = imageCarousel.querySelectorAll('.carousel-slide');
    slides[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function setupSizeSelector(sizes) {
    sizeSelector.innerHTML = '';
    
    sizes.forEach(size => {
        const sizeOption = document.createElement('div');
        sizeOption.className = 'size-option';
        sizeOption.textContent = size;
        
        sizeOption.addEventListener('click', () => {
            // Quitar selección actual
            const selected = sizeSelector.querySelector('.selected');
            if (selected) selected.classList.remove('selected');
            
            // Seleccionar nueva talla
            sizeOption.classList.add('selected');
            selectedSize = size;
        });
        
        sizeSelector.appendChild(sizeOption);
    });
}

// Funciones del carrito
function addToCart() {
    /*
    if (!selectedSize) {
        alert('Por favor selecciona una talla');
        return;
    }
    */
    const item = {
        id: Date.now(), // ID único para el ítem del carrito
        productId: currentProduct.id,
        name: currentProduct.name,
        brand: currentProduct.brand,
        price: currentProduct.price,
        size: selectedSize,
        image: currentProduct.images[0]
    };
    
    cart.push(item);
    saveCart();
    updateCartCount();
    
    // Cerrar modal
    productModal.classList.add('hidden');
    
    // Mostrar confirmación
    /*
    alert(`${currentProduct.name} talla ${selectedSize} agregado al carrito`);
    */
}

function toggleCart() {
    cartDropdown.classList.toggle('hidden');
    if (!cartDropdown.classList.contains('hidden')) {
        renderCartItems();
    }
}

function renderCartItems() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center py-4">Tu carrito está vacío</p>';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <p class="cart-item-name">${item.name}</p>
                <p class="cart-item-size">Talla: ${item.size}</p>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        `;
        
        cartItems.appendChild(cartItem);
        
        // Añadir evento para eliminar ítem
        const removeButton = cartItem.querySelector('.cart-item-remove');
        removeButton.addEventListener('click', () => removeCartItem(item.id));
    });
}

function removeCartItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartCount();
    renderCartItems();
}

function saveCart() {
    localStorage.setItem('shoeCart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('shoeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

function updateCartCount() {
    cartCount.textContent = cart.length;
}

function sendWhatsAppQuote() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    let message = "Hola, me interesa cotizar los siguientes productos:\n\n";
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - Talla: ${item.size}\n`;
    });
    
    message += "\nPor favor, ¿podrías proporcionarme información sobre disponibilidad y precios? Gracias.";
    
    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Número de WhatsApp (ejemplo, reemplazar con número real)
    const phoneNumber = "+525512338386";
    
    // Abrir WhatsApp Web con el mensaje
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}