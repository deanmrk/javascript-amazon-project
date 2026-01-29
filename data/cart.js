export const cart = [  //EXPORT THE CART VARIABLE TO ACCESS IN THE amazon.js
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6', //default value
        quantity: 2
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d', //default value
        quantity: 1
    },
    {
        productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e', //default value
        quantity: 3
    },
];

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