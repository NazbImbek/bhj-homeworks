const tags = Array.from(document.getElementsByTagName('a'));
for (let tag of tags) {
  tag.addEventListener('click', handle);
   
  function handle(e) {
    e.preventDefault();
    let title = tag.getAttribute('title');
    if (tag.querySelector('.tooltip')) {
      tag.querySelector('.tooltip').remove();
    } else {
      tag.insertAdjacentHTML('beforeEnd', `<div class="tooltip tooltip_active">${title}</div>`);
    }
  }
}