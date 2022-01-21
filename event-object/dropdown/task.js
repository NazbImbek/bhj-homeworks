const dropdown = document.querySelector('.dropdown__value');
const dropdown__item = document.querySelectorAll('.dropdown__item')
const list = document.querySelector('.dropdown__list');

function handle() {
  if (list.className === 'dropdown__list') {
    list.classList.add('dropdown__list_active');
  } else {
    list.classList.remove('dropdown__list_active');   
  };
}


function handleClick(event) {
  event.preventDefault();
  dropdown.textContent = event.target.textContent;
  list.className = 'dropdown__list';
}

dropdown__item.forEach((item) => {
  item.addEventListener('click', handleClick);
});

dropdown.addEventListener('click', handle);