// console.log('dom manipulation');
// console.log(document);
// access an element from the html
const todoList = document.getElementById('todo-list')
// console.log(todoList);

// get all the li tags - returns an html collection 
const allListItems = document.getElementsByTagName('li')
// console.log(allListItems)
// is not an array but can be treated as one
console.log(allListItems[0]);
// this does not work though
[...allListItems].forEach(function (el) {
    console.log(el)
})
console.clear();

console.log(todoList);
// we can also execute those methods on nodes, not 
// only the document object
const todoListItems = todoList.getElementsByTagName('li');
// console.log(todoListItems);
// use inner text to retrieve the text in between the tags
// console.log(todoListItems[3].innerText)
// to change a value
todoListItems[2].innerText = 'solve katas';

// turn all the todo list items to uppercase
// iterate over the todo list items
for (let item of todoListItems) {
    item.innerText = item.innerText.toUpperCase();
}
// getsElementsByClassName returns an html collection as well
const container = document.getElementsByClassName('todo-container');
console.log(container[0])

// add an exclamation mark to the paragraph
// on line 12
const paragraph = document.getElementsByTagName('p');
console.log(paragraph[0].innerText)
paragraph[0].innerText = paragraph[0].innerText + '!'


// querySelector accepts any valid css query as an argument
// and returns the first matching element
const firstListItem = document.querySelector('#todo-list li');
console.log(firstListItem)


// this returns a node list - you can use array methods
const allItems = document.querySelectorAll('#todo-list li')
console.log(allItems[0])
allItems.forEach(function (item) {
    console.log(item.innerText)
})


// change css
// const property = 'backgroundColor';
// firstListItem.style.backgroundColor = 'red';
// firstListItem.style[property] = 'green';

console.log(firstListItem.classList)
// add a class
firstListItem.classList.add('checked');
// remove a class
firstListItem.classList.remove('checked');

// toggle the class checked
firstListItem.classList.toggle('checked');
firstListItem.classList.toggle('checked');

console.clear();

// we can set an attribute
firstListItem.setAttribute('id', 'first-item');

// we could fix the broken image
document.querySelector('img').setAttribute(
    'src',
    'https://images.unsplash.com/photo-1610960245237-cfab0dea6be4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
)

// we want to add a new element - a heading

// use createElement to create an element with the name of a tag
const heading = document.createElement('h1')
heading.innerText = 'My todo list';
// heading.innerHTML = '<div><div>my inner div</div></div>'

console.log(heading)
// parent.insertBefore(whatToInsert, beforeWhich)
// const todoList = document.getElementById('todo-list')
const parentElement = document.querySelector('.todo-container');
// inserting the heading into the dom
// document.insertBefore(heading, todoList);
document.body.insertBefore(heading, parentElement);

// remove the paragraph
// parent.removeChild(child);
// child
// const paragraph = document.getElementsByTagName('p');
// parent
// const parentElement = document.querySelector('.todo-container');
console.log(paragraph[0])
parentElement.removeChild(paragraph[0]);





