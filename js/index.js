// Initial Webpage Functions
// Load/render cart on page refresh/load
cart = JSON.parse(localStorage.getItem("cart"));
// cart = JSON.parse(localStorage.getItem("cart"));
renderCart();

// Render products page
renderProducts();




// ADD/UPDATE/REMOVE ITEMS IN CART

// Add To Cart Button
document.getElementById("products-listing").addEventListener("click", (event) => {
    // Check when Add to Cart button is pressed
    if(event.target.classList.contains("product-add-to-cart")){
        // Get product code from clicked product
        const targetProductCode = event.target.parentElement.parentElement.dataset.productCode;

        // Get target quantity from 
        const inputQuantity = event.target.parentElement.querySelector("input");
        const targetProductQuantity = inputQuantity.value;
        
        // Validate quantity is more than 0 
        if(targetProductQuantity < 1) {
            window.alert("Please enter a quantity of more than 1");
        } else {
            // Loop through 'products' array to compare to find the product that user wants to add to cart
            products.forEach((listingItem) => {
                if(targetProductCode == listingItem.productCode) {
                        let needToAddProduct = true;
                        // If product is in cart, add quantity and update total price
                        cart.forEach((cartItem) => {
                            if(targetProductCode == cartItem.productCode) {
                                cartItem.productQuantity += Number(targetProductQuantity);
                                cartItem.productTotal = Number((cartItem.productPrice*cartItem.productQuantity)).toFixed(2);
                                needToAddProduct = false;
                            }
                        });
                        // Otherwise, add new product to cart
                        if(needToAddProduct) {
                            addToCart(
                                listingItem.productCode, 
                                listingItem.productName, 
                                targetProductQuantity, 
                                listingItem.productPrice);
                        };
                };
            });
        };

        // Reset quantity field to 1
        inputQuantity.value = 1;

        // Re-render to update cart
        renderCart();
    }
});


// Update Cart Button
document.getElementById("shopping-cart").addEventListener("click", (event) => {
    // Check when Update Button is pressed
    if(event.target.classList.contains("cart-update")){
        // Get product code from clicked product
        const targetProductCode = event.target.parentElement.parentElement.dataset.productCode;
        
        // Get quantity value of product in cart
        const inputQuantity = event.target.parentElement.parentElement.querySelector("input");
        const targetProductQuantity = inputQuantity.value;

        // Validate quantity is more than 0
        if(targetProductQuantity < 1) {
            window.alert("Please enter a quantity of more than 1");
        } else {
            // Loop through cart to find the product to update
            cart.forEach(cartItem => {
                // Update quantity and total price
                if(targetProductCode == cartItem.productCode) {
                    cartItem.productQuantity = Number(targetProductQuantity);
                    cartItem.productTotal = Number((cartItem.productPrice*cartItem.productQuantity)).toFixed(2);
                };
            });
        };

        // Re-render to update cart
        renderCart();
    };
});


// Remove Cart Button
document.getElementById("shopping-cart").addEventListener("click", (event) => {
    // Check when Remove Button is pressed
    if(event.target.classList.contains("cart-remove")){
        // Get product code from clicked product
        const targetProductCode = event.target.parentElement.parentElement.dataset.productCode;

        // Loop through cart to find the product to remove
        cart.forEach((cartItem, index) => {
            // Remove product from cart array
            if(targetProductCode == cartItem.productCode) {
                cart.splice(index, 1);
            };
        });

        // Re-render to update cart
        renderCart();
    };
});



// Show Cart when click "Cart"
const hideCart = () => {
    // Make sure cart info is up-to-date
    renderCart();
    // DOM manipulation to show/hide elements
    document.getElementById("cart-title").style.display = "none";
    document.getElementById("cart-quantity-label").style.display = "none";
    document.getElementById("minimise-cart").style.display = "block";
    document.getElementById("shopping-cart-table").style.display = "block";
};
document.getElementById("cart-title").addEventListener("click", hideCart);


// Hide Cart when click "Minimise"
const showCart = () => {
    // DOM manipulation to show/hide elements
    document.getElementById("cart-title").style.display = "block";
    document.getElementById("cart-quantity-label").style.display = "block";
    document.getElementById("minimise-cart").style.display = "none";
    document.getElementById("shopping-cart-table").style.display = "none";
};
document.getElementById("minimise-cart").addEventListener("click", showCart);