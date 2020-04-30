const form = document.addItem;
const input = form.momList;;
const ul = document.getElementById('list')

function createLI(text) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.textContent = text;
    li.appendChild(div);
    const editButton = document.createElement('button');
    editButton.textContent = "edit";
    li.appendChild(editButton);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    li.appendChild(deleteButton);
    return li;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = "";
    const li = createLI(text);
    ul.appendChild(li);
})

ul.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        const button = e.target;
        const li = e.target.parentNode;
        if (e.target.textContent === "X") {
            ul.removeChild(li);
        } else if (e.target.textContent === "edit") {
            const div = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = div.textContent;
            li.insertBefore(input, div);
            li.removeChild(div);
            button.textContent = "save";
        } else if (e.target.textContent === "save") {
            const input = li.firstElementChild;
            const div = document.createElement('div');
            div.textContent = input.value;
            li.insertBefore(div, input);
            li.removeChild(input);
            button.textContent = "edit";
        }
    }
})