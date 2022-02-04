const tasks__add = document.getElementById('tasks__add');
const task__input = document.getElementById('task__input');

tasks__add.addEventListener('click', handle);

function add () {
  const tasks__list = document.getElementById('tasks__list');
  tasks__list.insertAdjacentHTML('afterEnd', `<div class="task"><div class="task__title">${task__input.value}</div><a href="#" class="task__remove">&times;</a></div>`);
}

function handle(e) {
  e.preventDefault();
  if (task__input.value !== ''){ 
  add ();
  task__input.value = '';
  } 
  
  const task__remove = document.querySelectorAll('.task__remove');
  task__remove.forEach( item => {
    item.addEventListener('click', del); 
    function del(){
      item.closest('.task').remove();
    }
  })  
}