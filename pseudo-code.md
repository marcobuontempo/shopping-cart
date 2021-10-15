# Creating HTML
1. create a div to hold the product contents. make flexbox with wrap
2. create divs to act as display cards for the products. they should contain:
    - Image
    - Name
    - Price Ea
    - Quantity (text input field)
    - Add to Cart Button
    - Product Code attribute
3. create a table:
    - Header Row
        - Product Name
        - Quantity
        - Price Ea
        - Price Total
        - Action
    - Product Row
        - Product Name
        - Quantity
        - Price Ea
        - Price Total
        - Action
    - Footer Row
        - Total Price
        

# Creating and storing the products JS
1. create an empty array of products
2. create a factory function that returns an object(representing a product) and pushes to array
3. the objects should contain the keys of:
    - Image:
    - Product Name:
    - Price Ea:
    - Product Code:
4. create multiple products using the factory function


# Displaying Products JS
1. use div from HTML above as base HTML used to generate products
2. generate a 'card' for each object in the array using template literals
3. add product cards to the flexbox div made earlier


# Adding Product To Cart
1. create an empty array to represent the cart
2. create function to add product object to cart array
    - Product Name
    - Quantity
    - Price Ea
    - Price Total


# Displaying Cart
1. use tr from HTML as base HTML for cart products
2. create function to generate HTML from above by using objects in cart array
3. add rows to table in html document


# Connect Add to Cart button to Cart
1. Onclick, find product code from html data attribute
2. Match product code to the object in products array
3. Get the details from this object to create tr html element for cart, using function above


# Update Cart
1. Onclick 'update' button finds product in cart array
2. Function to change cart quantity to match the new user input value
3. re-render cart


# Remove cart item
1. Onclick 'remove' button finds product in cart array
2. Function will remove product from cart array
3. re-render cart