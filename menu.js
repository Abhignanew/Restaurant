const menuContainer = document.getElementById('menu-container');
const cartList = document.getElementById('cart-list');

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
    <button onclick="addToCart(${dish.id}, '${dish.name}', ${dish.price})">Add to Cart</button>
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
    cartItem.textContent = `${name} x ${quantity} - Total: ${total}`;
    cartList.appendChild(cartItem);
  }
}
