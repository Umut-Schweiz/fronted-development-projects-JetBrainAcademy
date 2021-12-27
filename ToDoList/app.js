const addTaskButton = document.querySelector('#add-task-button');
const removeButtons = document.querySelectorAll('.delete-btn');
const listTask = document.querySelector('#task-list');
const inputTask = document.querySelector('#input-task');

let toDoList = [
    // .. tasks objects
];

const loadLocalStorage = () => {
    //We will use local storage to store the tasks. The localStorage property allows saving key/value pairs right in a web browser.

    if (localStorage.getItem("tasks")) {
        toDoList = JSON.parse(localStorage.getItem("tasks")) || [];
        showTasks();
    }
}

const addTask = () => {

    let newTask = {
        taskName: inputTask.value,
        checked: false
    }

    if (inputTask.value !== "") {
        // Add task to list and localstorage
        toDoList.push(newTask); // push toDoList
        showTasks();
        updateLocalStorage(); // push LocalStorage
    }
}

//Show tasks on the screen
const showTasks = () => {

    let tasksTemplate = '';

    toDoList.forEach(function(item, index) {
        // Clear input task
        document.getElementById("input-task").value = '';

        tasksTemplate += `
        <li>
            <input type="checkbox" class="check" onclick="checkedTask(${index})" ${item.checked ? 'checked' : ''}>
            <span class="task">${item.taskName}</span>
            <button class="delete-btn"  onclick="removeTask(${index})">X</button>
        </li>
        `;
    });

    listTask.innerHTML = tasksTemplate;
    
}

loadLocalStorage();

const updateLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(toDoList));
}

const removeTask = (index) => {
    // Remove  a task from local storage
    toDoList.splice(index, 1);
    updateLocalStorage();
    showTasks();

    // Remove  a task from list
    return this.parentNode.remove();
}

// Update state of task and save to local storage
const checkedTask = (index) => {
    toDoList[index].checked = !toDoList[index].checked;
    updateLocalStorage();
    showTasks();
}

const clearAll = () => {
    localStorage.clear();
    while (listTask.firstChild) {
        listTask.removeChild(listTask.firstChild);
    }
    toDoList = [];    
}
