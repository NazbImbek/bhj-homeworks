const cartProducts = document.querySelector('.cart__products');
const quantityControl = document.querySelectorAll('.product__quantity-control');


for (let item of quantityControl) {
  item.addEventListener('click', handle);
  function handle(e) {
    const quantity = e.target.parentNode.querySelector('.product__quantity-value');
    
    if (e.target.classList.contains('product__quantity-control_inc')) {
    quantity.textContent = Number(e.target.parentNode.querySelector('.product__quantity-value').textContent) + 1;
    } else if (quantity.textContent > 1) {
        quantity.textContent = Number(e.target.parentNode.querySelector('.product__quantity-value').textContent) - 1;  
    }
  }
}

const addIn = document.querySelectorAll('.product__add');

for (let item of addIn) {
    item.addEventListener('click', inBusket);
}

function inBusket(e) {
  const id = e.target.closest('.product').dataset.id;
  const product = e.target.closest('.product');
  const quantityValue = Number(e.target.parentNode.querySelector('.product__quantity-value').textContent);

  for (let item of cartProducts.children) {

    if (item.dataset.id === id) {
      let productCount = item.querySelector('.cart__product-count');
        productCount.textContent = Number(productCount.textContent) + quantityValue;
        return false;
        }
    }

    const img = product.querySelector('.product__image').src;
    
    cartProducts.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id="${id}">
                                <img class="cart__product-image" src="${img}">
                                <div class="cart__product-count">${product.querySelector('.product__quantity-value').textContent}</div>
                            </div>`);
}