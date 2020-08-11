// const axios = require('axios');
const list = document.getElementById("todo");
const todoForm = document.todoform;
const url = "https://api.vschool.io/brittany/todo"

function clearList() {
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
}

//1. GET
function getTodo() {
    axios.get(url)
        .then(response => response.data.forEach((response) => {createTodo(response)}))
        .catch(error => console.log(error));
}

getTodo()

function createTodo (response) {

    // Create elements
    const li = document.createElement('li');
    li.id = "todoItem";
    list.appendChild(li);
    const div = document.createElement('div');
    div.textContent = `${response.title} - $${response.price} - ${response.description}`;
    div.id = "text";
    li.appendChild(div);
    const checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.name = "checkbox"
    checkbox.id = response._id;
    checkbox.checked = response.completed
    if(checkbox.checked){
        div.style.textDecoration = 'line-through'
    }else {
        div.style.textDecoration = 'none'
    }

    li.appendChild(checkbox);
    const button = document.createElement('button');
    button.id = response._id;
    button.textContent = 'Delete';
    li.appendChild(button);
    const img = document.createElement('img');
    img.src = response.imgUrl;
    li.appendChild(img); 
}

//2. POST
todoForm.addEventListener("submit", (event) => {
    event.preventDefault()



    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

    clearList()

    axios.post(url, newTodo)
        .then(response => getTodo())
        .catch(error => console.log(error))

    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.imgUrl.value = "" 
})

//3.PUT
document.getElementById("todo").addEventListener("click", handleCheck)

function handleCheck(event){
    const checkedInputs = []
    if(event.target.name === "checkbox") {
        if(event.target.checked) {
            checkedInputs.push(event.target.id)
            const done = checkedInputs[0]
            const todoDone = {
                completed: true
            }
            axios.put(`${url}/${done}`, todoDone)
                .then(response => document.getElementById(done).parentNode.style.textDecoration = "line-through")
                .catch(error => console.log(error))
        } else if(event.target.value = "off") {
            checkedInputs.push(event.target.id)
            const notDone = checkedInputs[0]
            const todoDone = {
                completed: false
            }
            axios.put(`${url}/${notDone}`, todoDone)
                .then(response => document.getElementById(notDone).parentNode.style.textDecoration = "none")
                .catch(error => console.log(error))
        }
    }
}

//4. DELETE
document.getElementById("todo").addEventListener("click", (event) => {
    if(event.target.textContent === "Delete") {
        const deleteItem = event.target.id
        clearList()
        axios.delete(`${url}/${deleteItem}`)
            .then(response => getTodo())
            .catch(error => console.log(error))
    }
})