const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const robAnswers = [
    'Кто тут?',
    'Вы не купили ни одного товара для того, чтобы с нами так разговаривать !',
    'Добрый день! До свидания!',
    'Товар успешно оплачен, спасибо что были с нами!',
];
chatWidget.addEventListener('click', handle);
function handle() {
  chatWidget.classList.add('chat-widget_active');
}

const widgetInput =  document.getElementById('chat-widget__input');

widgetInput.addEventListener('keyup', input);

function input(event) {
  if (event.key === 'Enter' && widgetInput.value !== '') {
    let time = new Date();
    let timeString = time.toLocaleTimeString().substr(0, 5);
    messages.innerHTML += `Сообщение от клиента: <div class="message message_client">
    <div class="message__time">${timeString}</div>
    <div class="message__text">${widgetInput.value}</div>
    </div>`;
    messages.scrollIntoView(false);
    widgetInput.value = '';
    
    setTimeout(function robot() {
    let rand = Math.floor(Math.random() * robAnswers.length);
    messages.innerHTML +=`Сообщение от робота:
      <div class="message">
        <div class="message__time">${timeString}</div>
        <div class="message__text">${robAnswers[rand]}</div>
      </div>`
    messages.scrollIntoView(false);
    }, 1000)  
  }
}
