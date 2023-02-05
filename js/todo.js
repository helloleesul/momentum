const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const total = document.querySelector("#total-todo");

let todos = [];

const TODO_KEY = "todos";

function saveTodos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  todos = todos.filter((el) => el.id !== parseInt(li.id));
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
  total.innerText = todos.length;
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.id = newTodo.id;
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.classList.add("delete-btn");
  button.innerText = "🙅‍♀️";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.prepend(li);
  total.innerText = todos.length;
}

function onTodoSubmit(e) {
  e.preventDefault();
  if (todoInput.value === "") {
    return;
  }
  const newTodo = todoInput.value;
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todoInput.value = "";
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos !== null) {
  const parseTodos = JSON.parse(savedTodos);
  todos = parseTodos;
  parseTodos.forEach(paintTodo);
  total.innerText = todos.length;
}

// 문자
console.log(savedTodos);
// 배열
console.log(JSON.parse(savedTodos));
// 문자
console.log(JSON.stringify(savedTodos));
