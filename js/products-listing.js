// List of Products
const products = [];

// Factory Function For Adding Products
const addProduct = (productCode, productImage, productName, productPrice) => {
    const product = {
        productCode,
        productImage,
        productName,
        productPrice: Number(productPrice).toFixed(2)
    }
    products.push(product);
}

// Add Products
addProduct("1","./images/products/product-1.jfif","Sneakers","129.99")
addProduct("2","./images/products/product-2.jfif","Playstation Controller","59.99")
addProduct("3","./images/products/product-3.jfif","Wrist Watch","209.95")
addProduct("4","./images/products/product-4.jfif","Drone","399.99")
addProduct("5","./images/products/product-5.jfif","T-shirt","24.99")
addProduct("6","./images/products/product-6.jfif","Keyboard","193.50")
addProduct("7","./images/products/product-7.jfif","Apple","00.37")
addProduct("8","./images/products/product-8.jfif","Beer Bottle","8.75")


// Function to generate product HTML
const createProductHtml = (productCode, productImage, productName, productPrice) => {
    return `<div class="product-container" data-product-code=${productCode}>
            <div class="product-information flexwrap">
                <img src=${productImage} class="product-element"/>
                <h1 class="product-element">${productName}</h1>
                <h2 class="product-element">Price: <span>$${productPrice}</span></h2>
                <h2 class="product-element">Quantity: <input type="number" value="1" min="1"></h2>
                <input type="button" value="Add To Cart" class="product-element product-add-to-cart">
            </div>
        </div>`
}

// Display Products on screen
const renderProducts = () => {
    // Generate HTML for each product and join
    let productsToRender = "";
    products.forEach((item) => {
        const product = createProductHtml(item.productCode, item.productImage, item.productName, item.productPrice);
        productsToRender += product;
    });
    
    // Set HTML to render products
    document.getElementById("products-listing").innerHTML = productsToRender;
}