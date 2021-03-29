console.log('it works');

// document.querySelector('#my-button').onclick = function () {
//     console.log('click');
// }

document.querySelector('input').addEventListener('keyup', function (event) {
    console.log(event.keyCode)
    if (event.keyCode === 13 && document.querySelector('input').value !== '') {
        addTodo();
    }
})

document.querySelector('#my-button').addEventListener('click', addTodo);

// set an onclick listener for all the list items
document.querySelectorAll('ul>li').forEach(function (todo) {
    todo.onclick = toggleTodo;
})


console.log('done');
function addTodo() {
    // get the value from the input field
    const input = document.querySelector('#todo').value;
    // create the new li element
    const todo = document.createElement('li');
    todo.innerHTML = input;
    todo.onclick = toggleTodo;
    console.log(todo);
    // get the parent element
    const list = document.querySelector('ul');
    list.appendChild(todo);
    document.querySelector('input').value = '';
}

function toggleTodo(event) {
    // toggle the checked class for the clicked list item
    console.log('this is the clicked list element: ', event.target)
    // event.target.classList.toggle('checked');
    // to remove the clicked element from the dom:
    // parent.removeChild(event.target)
    const parent = event.target.parentNode;
    console.log(parent);
    parent.removeChild(event.target);
}