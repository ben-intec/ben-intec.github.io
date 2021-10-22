const input_number = document.getElementById("todo-number");
const btn_fetch_todo = document.getElementById('fetch-todo');
const btn_fetch_all_todos = document.getElementById('fetch-todos');
const btn_fetch_all_users = document.getElementById('fetch-users');

input_number.addEventListener('change', (e) => {
    let max = input_number.max - 1;
    let min = input_number.min + 1;
    let val = e.target.value;

    if (val > max) {
        e.target.value = +min;
    } else if (val < min) {
        e.target.value = max;
    }
});

btn_fetch_todo.addEventListener('click', () => fetchTodo(document.getElementById("todo-number").value));

btn_fetch_all_todos.addEventListener('click', fetchTodos);

btn_fetch_all_users.addEventListener('click', fetchUsers);

