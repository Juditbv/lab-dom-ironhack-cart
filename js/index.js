// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  // console.log(price);
  // console.log(quantity);
  let result = price * quantity;
  //console.log(result);

  return (subtotal.textContent = result);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //const allProducts = document.getElementsByClassName('.product');
  //updateSubtotal(allProducts);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let totalPrice = 0;
  allProducts.forEach((product) => {
    let subtotal = updateSubtotal(product);
    totalPrice += subtotal;
  });

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  totalValue.textContent = totalPrice.toFixed(2);
}

// ITERATION 4
const buttonRemove = document.querySelectorAll('.btn-remove');
buttonRemove.forEach((button) => {
  button.addEventListener('click', removeProduct);
});

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const targetParent = target.parentNode.parentNode;
  // console.log(targetParent);
  const parent = target.parentNode.parentNode.parentNode;
  parent.removeChild(targetParent);
  // console.log(parent);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
