const todoList = [];

renderTodoList()

function renderTodoList(){
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html =`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick='
      todoList.splice(${i}, 1);
      renderTodoList()
      ' class="delete-todo-button">Delete</button>`;
    todoListHTML += html
  }
  


  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addtodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dueDateElement = document.querySelector('.js-due-date-input');
  const dueDate = dueDateElement.value;
  
  todoList.push({
    name: name,
    dueDate: dueDate
  });
  

  

  inputElement.value = '';
  dueDateElement.value = '';

  renderTodoList()
}



function checkEnter(event) {
  if (event.key === 'Enter') {
    addtodo();
  }
}


