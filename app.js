const addList = document.getElementById('add-list');
const add = document.querySelector('.add');
const todoList =  document.querySelector('.todo-list');


add.addEventListener('click', () =>{

    // creatong new li
    const newTodo = document.createElement('LI');
    todoList.appendChild(newTodo);

    // creating new checkbox
    const newCheck =  document.createElement('input')
    newCheck.type = 'checkbox';
    newTodo.appendChild(newCheck);


    // creatin new label
    const newLabel = document.createElement('p');
    const label = document.createTextNode(addList.value);


    newLabel.appendChild(label)
    newTodo.appendChild(newLabel);

    // newLabel.style.background = 'red';
    // newLabel.style.content = '133';
    
    
    // newLabel.appendChild(label)
   
    
    

    


    // window.alert(label);
    

})