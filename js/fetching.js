const TODO_URL = 'https://jsonplaceholder.typicode.com/todos/';
const USER_URL = 'https://jsonplaceholder.typicode.com/users/';
function fetchTodo(id) {
    fetch(TODO_URL + id)
        .then(response => response.json())
        .then(todo => singleHandler(todo,'todo-output',htmlForTodo));
}

function fetchTodos() {
    fetch(TODO_URL)
        .then(response => response.json())
        .then(todo => todosHandler(todo,'todos-output'));
}

function fetchUsers() {
    fetch(USER_URL)
        .then(response => response.json())
        .then(user => arrayHandler(user,'users-output',htmlForUser));
}

async function getUsers() {
    let users = await fetch(USER_URL)
        .then(response => response.json());
    return users;
}


function singleHandler(el, targetId, styler) {
    document.getElementById(targetId).innerHTML = styler(el);
}

function arrayHandler(arr, targetId, styler) {
    document.getElementById(targetId).innerHTML = '<progress></progress>';
    let html_string = '';
    for (let i = 0; i < arr.length; i++) {
        html_string += styler(arr[i]);
    }
    document.getElementById(targetId).innerHTML = html_string;
}

async function todosHandler(todos, targetId) {
    document.getElementById(targetId).innerHTML = '<progress></progress>';
    let users = await getUsers();
    let html_string = '';
    for (let i = 0; i < todos.length; i++) {
        let todo = todos[i];
        let user = users[todo.userId - 1];
        html_string += htmlForTodoWithUser(todo, user);
    }
    document.getElementById(targetId).innerHTML = html_string;
}

function htmlForUser(user) {
    return '<fieldset>' +
        '<legend>' + user.name + '</legend>' +
        '<p>' +
        '    "id": ' + user.id + '<br>' +
        '    "username": ' + user.username + '<br>' +
        '    "email": ' + user.email + '<br>' +
        '    "address": ' + user.address.street + '  ' + user.address.suite + ' ' + '<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
        user.address.zipcode + ' ' + user.address.city + ' ' + '<br>' +
        '    "phone": ' + user.phone + '<br>' +
        '    "website": ' + user.website + '<br>' +
        '    "company": ' + user.company.name + '<br>' +
        '</p>' +
        '</fieldset>'
}

function htmlForTodoWithUser(todo, user) {
    return '<fieldset>' +
        '<legend>TODO ' + todo.id + '</legend>' +
        '<p>' +
        '    "user": ' + user.name+ '<br>' +
        '    "title": ' + todo.title + '<br>' +
        '    "completed": ' + todo.completed + '<br>' +
        '</p>' +
        '</fieldset>';
}

function htmlForTodo(todo) {
    return '<fieldset>' +
        '<legend>TODO ' + todo.id + '</legend>' +
        '<p>' +
        '    "userId": ' + todo.userId + '<br>' +
        '    "id": ' + todo.id + '<br>' +
        '    "title": ' + todo.title + '<br>' +
        '    "completed": ' + todo.completed + '<br>' +
        '</p>' +
        '</fieldset>';
}

function errorCatch(targetId) {
    document.getElementById(targetId).innerHTML = 'Something went wrong';
}