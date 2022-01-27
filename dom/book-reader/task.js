const fontSize = document.querySelectorAll('.font-size');
const book__content = document.querySelector('.book__content');
//const color = document.querySelectorAll('.color');

fontSize.forEach(size => size.addEventListener('click', function handler(event){
  event.preventDefault();
  for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].classList.remove('font-size_active');
  }
  size.classList.add('font-size_active');
  book__content.classList.remove('book_fs-small');
  book__content.classList.remove('book_fs-big');
  
  if (size.classList.contains('font-size_small')) {
    book__content.classList.add('book_fs-small');
  }
  if (size.classList.contains('font-size_big')) {
    book__content.classList.add('book_fs-big');
  }
}
));