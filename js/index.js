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
  allProducts.forEach((element) => {
    updateSubtotal(element);
  });

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  const allSubtotals = document.querySelectorAll('.subtotal span');
  console.log(allSubtotals);
  const total = allSubtotals.reduce((totalSum, currentValue) => {
    totalSum += currentValue;
  }, 0);
  //return totalValue.textContent();
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
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
