// Select all Add to Cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Select the cart count element
const cartCount = document.getElementById('cart-count');

// Variable to keep track of the number of items in the cart
let cartItemCount = 0;

// Add event listeners to all the Add to Cart buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartItemCount++;  // Increase the cart count
        cartCount.textContent = cartItemCount;  // Update the displayed count
    });
});
