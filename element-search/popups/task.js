const show = document.getElementById('modal_main');
show.classList.add('modal_active');
 
const closeWindow = document.getElementsByClassName('modal__close').item(0);
const redBtn = document.getElementsByClassName('modal__close').item(1);
const greenBtn = document.getElementsByClassName('modal__close').item(2);
const success = document.getElementById('modal_success');

const modal__close = () => show.classList.remove('modal_active');
closeWindow.onclick = modal__close;

const nextWindow = () => {
  modal__close();
  success.classList.add('modal_active'); 
}
redBtn.onclick = nextWindow;

const modal_success = () => {
  success.classList.remove('modal_active');  
}
greenBtn.onclick = modal_success;

const show_success = document.getElementsByClassName('btn_success').item(0);
show_success.onclick = modal_success;


