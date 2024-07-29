document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addTodo();
  });

  function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
          const todoItem = document.createElement('li');
          todoItem.classList.add('todo-item');

          const todoSpan = document.createElement('span');
          todoSpan.textContent = todoText;
          todoItem.appendChild(todoSpan);

          const todoButtons = document.createElement('div');
          todoButtons.classList.add('todo-buttons');

          const completeButton = document.createElement('button');
          completeButton.textContent = 'Complete';
          completeButton.addEventListener('click', () => {
              todoItem.classList.toggle('completed');
          });

          const editButton = document.createElement('button');
          editButton.textContent = 'Edit';
          editButton.classList.add('edit');
          editButton.addEventListener('click', () => {
              const newTodoText = prompt('Edit your task', todoSpan.textContent);
              if (newTodoText !== null) {
                  todoSpan.textContent = newTodoText;
              }
          });

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click', () => {
              todoItem.remove();
          });

          todoButtons.appendChild(completeButton);
          todoButtons.appendChild(editButton);
          todoButtons.appendChild(deleteButton);
          todoItem.appendChild(todoButtons);
          todoList.appendChild(todoItem);

          todoInput.value = '';
          todoInput.focus();
      }
  }
});