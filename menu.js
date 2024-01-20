const menuContainer = document.getElementById('menu-container');
const cartList = document.getElementById('cart-list');
// const amt=document.getElementById('cart');

// Sample menu data with images
const menuData = [
  { id: 1, name: 'DOSA', price: 55, image: 'dosa.jpg' },
  { id: 2, name: 'IDLI', price: 30, image: 'idli.jpg' },
  { id: 3, name: 'CURD RICE', price: 40, image: 'Curdrice.jpg' },
  { id: 4, name: 'PONGAL', price: 40, image: 'pongal.jpg' },
  { id: 5, name: 'SOUTH INDIAN MEAL', price: 80, image: 'south.jpg' },
  { id: 6, name: 'NORTH INDIAN MEAL', price: 70, image: 'north.jpg' },
  { id: 7, name: 'ICE CREAM', price: 30, image: 'icecream.jpg' },
  { id: 8, name: 'FRENCH FRIES', price: 30, image: 'frenchfries.jpg' },
  { id: 9, name: 'ROTI CURRY', price: 50, image: 'roticurry.jpg' },
  { id: 10, name: 'PURI', price: 70, image: 'puri.jpg' },
  { id: 10, name: 'LEMON JUICE', price: 70, image: 'lemonjuice.jpg' },
  { id: 10, name: 'MAGGIE', price: 70, image: 'maggie.jpeg' }
  // Add more dishes as needed
];

// Render menu items
menuData.forEach(dish => {
  const card = document.createElement('div');
  card.className = 'dish-card';
  card.innerHTML = `
    <img src="${dish.image}" alt="${dish.name}" style="width: 100px; height: 100px;">
    <h3>${dish.name}</h3>
    <p>Price: ${dish.price}</p>
    <label for="quantity_${dish.id}">Quantity:</label>
    <input type="number" id="quantity_${dish.id}" value="1" min="1">
    <button onclick="addToCart(${dish.id}, '${dish.name}', ${dish.price})">Add</button>
  `;
  menuContainer.appendChild(card);
});


// Add to cart function
function addToCart(id, name, price) {
  const quantityInput = document.getElementById(`quantity_${id}`);
  const quantity = parseInt(quantityInput.value);

  if (quantity > 0) {
    const total = price * quantity;

    const cartItem = document.createElement('li');
    cartItem.textContent = `${name} x ${quantity} - Price: ${total}`;
    const but=document.createElement('button');
    but.textContent='Delete';
    but.style.backgroundColor='white';
    but.style.color='black';
    but.onclick = function() {
      del(id, name, price);
    };
    but.style.marginLeft='10px';
    cartList.appendChild(cartItem);
    cartItem.appendChild(but);
    calculateAndDisplayTotal();
  
}
}

function calculateAndDisplayTotal() {
  let total = 0;

  const cartItems = cartList.children;

  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];
    const totalPattern = /Total: (\d+)/;
    const match = cartItem.textContent.match(totalPattern);

    if (match && match[1]) {
      total += parseInt(match[1], 10);
    }
  }

  // Create a div element to display the total
  const cartTotalElement = document.createElement('div');
  cartTotalElement.textContent = `Total: ${total}`;

  // Check if there is already a total element, and remove it before adding the new one
  const existingTotalElement = document.getElementById('cartTotal');
  if (existingTotalElement) {
    existingTotalElement.remove();
  }

  // Set an id for the new total element
  cartTotalElement.id = 'cartTotal';

  // Append the new total element to the 'cart' div, not the 'cart-list' ul
  const cartContainer = document.getElementById('cart');
  cartContainer.appendChild(cartTotalElement);
}





function del(id, name, price) {
  // Find the <li> element that corresponds to the item to be deleted
  const cartItems = cartList.getElementsByTagName('li');

  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];
    const itemName = cartItem.textContent.split(' x ')[0]; // Extract item name from the text content

    // Check if the current <li> element corresponds to the item to be deleted
    if (itemName === name) {
      // Remove the <li> element from the cartList
      cartList.removeChild(cartItem);
      calculateAndDisplayTotal();
      break; // Break out of the loop once the item is deleted
    }
  }
}

