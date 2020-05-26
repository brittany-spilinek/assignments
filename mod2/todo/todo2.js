const url = "https://api.vschool.io/brittany/todo"
const list = document.getElementById('todo');
const todoForm = document.todoform;

axios.get(url)
    .then(response => createTodo(response.data[0]))
    .catch(error => console.log(error));


function createTodo(response) {
    const li = document.createElement('li');
    li.textContent = `${response.title}`;
    list.appendChild(li);
}