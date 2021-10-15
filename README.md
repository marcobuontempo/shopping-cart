# **Shopping Cart**
<br/><br/>

## **Description**
- Mock product/marketplace webpage
- Simple shopping cart
- HTML5, CSS3, Vanilla JS
<br/><br/>

## **Setup/Installation**
- Web App is deployed at GitHub Pages (https://marcobuontempo.github.io/shopping-cart/shopping-cart), so can be viewed directly in your browser
- ALternatively, download the source code, open in VS Code, and you can view it in your browser using the extension "Live Server" (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Use a modern browser (i.e. Google Chrome) for best experience
<br/><br/>

## **Usage**
### **For Users**
- ***Add to Cart:***
    1. Input a number in the 'quantity' field on a product's card
    2. Press 'Add to Cart' on that product, which will add that product to the cart

- ***Adjust Cart:***
    1. Adjust the 'quantity' field and press 'update'
    2. Or, press 'remove'
    3. Minimise the cart by pressing 'minimise'
<br/><br/>

### **For Developers**
- Refer to the "pseudo-code.md" file for the initial thought process and functionality in designing this website
- ***Listing Products:***
    1. We store our products in an array, `products`
    2. `addProduct()` is a factory function that creates an object (containing the details of the product to display), then pushes to the `products` array
    3. We can add products by running `addProduct()`, in products-listings.js, with the item's details as the arguments. 
    <br/>For example:<br/>
    `addProduct("1","./images/products/product-1.jfif","Sneakers","129.99")`
    4. `createProductHtml()` creates a string of HTML code to display a product. It uses template literals, and also has a `data-product-code` attribute so we can identify/target the product displayed on-screen
    5. `renderProducts()` creates the HTML to render all of our products:
        - loops through the `products` array
        - passes each object's properties (e.g. product code, image source, etc.) to `createProductHtml()`
        - joins all of the created HTML to 1 string
        - uses DOM manipulation to change the innerHTML of the `products-listings` to the newly generated products
    6. We call the `renderProducts()` method on index.js, when the page first loads
<br/><br/>

- ***Shopping Cart:***
    1. We store our cart items in an array, `cart`
    2. `addToCart()` is a factory function that creates an object (containing the details of the product in cart), then pushes to the `cart` array
    3. `createCartHtml()` creates a string of HTML code to represent a row in our cart table. It uses template literals, and also has a `data-product-code` attribute so we can identify/target the product in cart
    4. `renderCart()` creates the HTML to render all of our cart items:
        - loops through our `cart` array
        - passes each object's properties (e.g. product code, product name, etc.) to `createCartHtml()`
        - updates the `totalPrice` after each loop of item in `cart` array
        - joins all of the created HTML to 1 string
        - uses DOM manipulation to change the innerHTML of the `shopping-cart-body` to the generated cart
        - displays "Cart is empty" if no items in `cart` array
<br/><br/>

- ***Index.js***
    1. Add To Cart buttons (on products display) have an event listener:
        - Finds the product code of object to be added to cart using `dataset`, and compares the items in `products` array
        - Finds the quantity to be added (`targetQuantity`), by getting the value of the user input on that targetted product
        - Initialise variable `needToAddProduct` to `true`. So by default, the product is expected to not be in cart
        - Checks if product is in cart by looping through `cart` array, and comparing target's `dataset.productCode` to looped items:
            - If product is in cart, item's quantity and total are updated. And `needToAddProduct` is changed to false
            - If the product is not in cart (i.e. `needToAddProduct` is `true`), then `addToCart()` by passing in values from the object found in `products` array, as well as the `targetQuantity`
        - Resets quantity user input to "1" at the end
    2. Update Cart buttons (in cart) have an event listener. This functions similar to Add To Cart (but simpler)
    3. Remove Cart buttons (in cart) have an event listener. This simply removes the targetted product from `cart` array
<br/><br/>

## **Authors**
*Marco Buontempo [2021]*