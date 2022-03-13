const tasksAdd = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

tasksAdd.addEventListener('click', handle);

function add () { 
  tasksList.insertAdjacentHTML('beforeEnd', `<div class="task"><div class="task__title">${task__input.value}</div><a href="#" class="task__remove">&times;</a></div>`);
}

function handle(e) {
  e.preventDefault();
  if (taskInput.value.trim() !== '') {
  add ();
  taskInput.value = '';
  }
  
}

tasksList.addEventListener('click', del); 
  function del(e){
    let item = e.target;

    if (item.classList.contains(`task__remove`) ) {
      item.closest(`.task`).remove();
    }
  }
