const input = document.getElementById('todo-field');
const addBtn = document.querySelector('.add-btn');
const todo = document.querySelector('.todo-container');


addBtn.addEventListener('click', () =>{

    const newLi = document.createElement('LI');
    todo.appendChild(newLi);

    const newCheck = document.createElement('input');
    newCheck.type = 'checkbox';
    newLi.appendChild(newCheck);

    const newP = document.createElement('p');
    newLi.appendChild(newP);

    const newTodo = document.createTextNode(input.value);
    newP.appendChild(newTodo);

})