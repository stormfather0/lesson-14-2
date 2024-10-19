// cart.js
export let cart = JSON.parse(localStorage.getItem('cart')) || []; // Ensure an empty array if localStorage is null

// Make sure to save cart back to localStorage if it's empty
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  cart = cart.filter(cartItem => cartItem.productId !== productId);
  saveToStorage();
  calculateCartQuantity();
}


export function calculateCartQuantity() {
  let cartQuantity1 = 0;

  cart.forEach((cartItem) => {
    cartQuantity1 += cartItem.quantity;
 
  });
  return cartQuantity1
}

calculateCartQuantity() 









