const tasksAdd = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');

tasksAdd.addEventListener('click', handle);

function add () {
  const tasksList = document.getElementById('tasks__list');
  tasksList.insertAdjacentHTML('beforeEnd', `<div class="task"><div class="task__title">${task__input.value}</div><a href="#" class="task__remove">&times;</a></div>`);
}

function handle(e) {
  e.preventDefault();
  if (taskInput.value.trim() !== '') {
  add ();
  taskInput.value = '';
  }
  
  const taskRemove = document.querySelectorAll('.task__remove');
  for (let item of taskRemove) {
    item.addEventListener('click', del); 
    function del(){
      item.closest('.task').remove();
    }
  }  
}