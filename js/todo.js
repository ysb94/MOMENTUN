const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];


function seveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    seveToDos();
};

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
};




function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),

    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    seveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello() {

}

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

