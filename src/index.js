// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subTotal = price * quantity

  const subTotalElement = product.querySelector('.subtotal span')

  subTotalElement.textContent = subTotal

  console.log(subTotal)

  return subTotal
}


function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product')

  let subTotalProduct = 0

  allProducts.forEach(product => {
    subTotalProduct += updateSubtotal(product)
  })

  console.log(subTotalProduct)
  
  // ITERATION 3

  document.querySelector('#total-value span').innerHTML = subTotalProduct

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productToRemove = target.closest('.product')
  productToRemove.remove();
  calculateAll();

  console.log('The target in remove is:', target);
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn.btn-remove');
  removeProductBtn.forEach(btn => {
  btn.addEventListener('click', event => {
    removeProduct(event);
  })
})
})