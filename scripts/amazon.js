const productGrid = document.querySelector('.products-grid')
let productHTML = '';
products.forEach( (product) => {
    productHTML += 
    `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}"> //13b
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `;

});
productGrid.innerHTML = productHTML;

let timeoutIdMessage;
const addCartButton = document.querySelectorAll('.js-add-to-cart');
addCartButton.forEach( (button) => {
  button.addEventListener('click', () => {
    //old - const productId = button.dataset.productId;
    const { productId } = button.dataset; //this will get the id of the product add to cart button
    
    //GET THE SELECTED QUANTITY INSTEAD OF MANUAL 1 QUANTITY
    const qtySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    const quantity = Number(qtySelector.value); //need to convert to Number();

    //ADDED MESSAGE VARIABLE
    const addedMsg = document.querySelector(`.js-added-${productId}`)

    let matchingItem;

    cart.forEach( (item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    })

    //ADDED MESSAGE
    addedMsg.classList.add('added-to-cart-visible');

    setTimeout( () => {
      if (timeoutIdMessage) {
        clearTimeout(timeoutIdMessage)
      }

      const timeoutId = setTimeout(() => {
        addedMsg.classList.remove('added-to-cart-visible');
      }, 1500);

      timeoutIdMessage = timeoutId;
    }) //doesnt need a timer


    //check if the matchingItem is true
    if (matchingItem) {
      matchingItem.quantity += 1;
    } 
    else {
      /* OLD
          productId: productId,
          quantity: quantity
      */
      cart.push({productId, quantity}); //ALREADY DESTRUCTURE
    }

    //CART WITH LIVE TOTAL QUANTITY 
    let cartQty = 0;
    cart.forEach( qty => { //first check the total qty of the cart
      cartQty += qty.quantity; //add the qty in the variable
    })
    document.querySelector('.js-cart-quantity').innerHTML = cartQty; //and save it to that html using DOM
    
    console.log(cart)
  });
});