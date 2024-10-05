window.onload = function() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
        const todoArray = JSON.parse(savedTodos);
        todoArray.forEach(task => addTaskToList(task));
    }
}

function saveTodos() {
    const listItems = document.querySelectorAll("#todo-list li");
    const tasks = [];
    listItems.forEach(item => {
        const taskText = item.firstChild.textContent;
        tasks.push(taskText);
    });
    localStorage.setItem("todos", JSON.stringify(tasks)); 
}

function addTaskToList(taskInput) {
    const list = document.getElementById("todo-list");
    const listItem = document.createElement("li");
    const taskText = document.createTextNode(taskInput);
    listItem.appendChild(taskText);
    document.getElementById("todo-input").value = "";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "x";
    deleteBtn.addEventListener("click", function() {
        list.removeChild(listItem);
        saveTodos(); 
    });
    listItem.appendChild(deleteBtn);

   
    list.appendChild(listItem);

    
    saveTodos();
}

document.getElementById("add-btn").addEventListener("click", function() {
    const taskInput = document.getElementById("todo-input").value;
    if (taskInput === "") {
        alert("To-do list is empty");
        return;
    }
    addTaskToList(taskInput);
});
document.getElementById("clearall").addEventListener("click", function() {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";
    localStorage.clear();
});
