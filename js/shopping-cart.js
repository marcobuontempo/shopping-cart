// Array to store cart items
let cart = [];

// Get total quantity in cart
const cartQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
        total += item.productQuantity;
    });
    return total;
};

// Function to add products to cart
const addToCart = (productCode, productName, productQuantity, productPrice) => {
    const product = {
        productCode,
        productName,
        productQuantity: Number(productQuantity),
        productPrice,
        productTotal: (productPrice*productQuantity).toFixed(2)
    };
    cart.push(product);
};


// Function to generate cart HTML
const createCartHtml = (productCode, productName, productQuantity, productPrice, productTotal) => {
    return `<tr data-product-code=${productCode}>
    <td>${productName}</td>
    <td><input type="number" min="1" value=${productQuantity}></td>
    <td>$${productPrice}</td>
    <td>$${productTotal}</td>
    <td><a class="cart-update">Update</a> | <a class="cart-remove">Remove</a></td>
</tr>`
};

// Display Cart Items on screen
const renderCart = () => {  
    // Generate HTML for each cart item and join
    let cartToRender = "";
    cart.forEach((item) => {
        const product = createCartHtml(item.productCode, item.productName, item.productQuantity, item.productPrice, item.productTotal);
        cartToRender += product;
    });
    // Use created HTML to render products using DOM
    document.getElementById("shopping-cart-body").innerHTML = cartToRender;
    // Display 'Cart is Empty' message if no items
    if(cart.length == 0) {
        document.getElementById("shopping-cart-body").innerHTML = '<tr><td colspan="5">Cart is empty</td></tr>'
    };

    // Calculate and show total cart price
    let totalPrice = 0;
    cart.forEach((item) => {
        totalPrice += Number(item.productTotal)
    });
    document.getElementById("cart-total-price").innerHTML = `$${totalPrice.toFixed(2)}`;

    // Update quantity display on cart menu
    const totalQuantity = cartQuantity();
    document.getElementById("cart-quantity-label").innerHTML = totalQuantity > 0 ? totalQuantity : "";

    // Save cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
};



