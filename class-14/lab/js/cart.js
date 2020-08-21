/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart)
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  var tableCheck = document.getElementById('cart');
  
    tableCheck.innerHTML = '';
  

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tbody = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.length; i++) {
  // TODO: Create a TR
  var tableRow = document.createElement('tr');
  // TODO: Create a TD for the delete link, quantity,  and the item
  var tableData1 = document.createElement('td');
  tableData1.textContent = cart.items[i].product;
  var tableData2 = document.createElement('td');
  tableData2.textContent = cart.items[i].quantity;
  var tableData3 = document.createElement('td');
  tableData3.textContent = 'X'; 
  tableData3.setAttribute('type', 'submit');   


      // TODO: Add the TR to the TBODY and each of the TD's to the TR
      tableRow.appendChild(tableData1);
      tableRow.appendChild(tableData2);
      tableRow.appendChild(tableData3);
      tbody.appendChild(tableRow);
  
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
