export const cart = []; //EXPORT THE CART VARIABLE TO ACCESS IN THE amazon.js

export function addtoCart(productId, quantity) {
  let matchingItem;

  cart.forEach( (cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  })

  //check if the matchingItem is true
  if (matchingItem) {
    matchingItem.quantity += 1;
  } 
  else {
    cart.push({productId, quantity});
  }
}