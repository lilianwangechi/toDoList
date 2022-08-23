let taskForm = document.querySelector('#task')
let addTask = document.querySelector('#add')
let ul = document.querySelector('#ul')
let tasks = []    // array to store all the tasks

function displayTasks() {
    ul.innerHTML = ''    // clear the ul list to prevent appending elements and list again afresh
    for (let x=0; x<tasks.length; x++) {
        let li = document.createElement('li')
        li.innerHTML = `${tasks[x]} <button onclick="deleteTasks(${x})">x</button>`
        ul.appendChild(li)
    }
}

addTask.onclick = function(e) {
    e.preventDefault();    // prevent page from refreshing and clearing the tasks array
    if (taskForm.value) {    // checks if task form is not empty
        tasks.push(taskForm.value)    // add task form value to tasks array
        taskForm.value = ''    // clear the task form
    }
    displayTasks()
}

function deleteTasks(x) {
    tasks.splice(x, 1)    // delete tasks element by index
    displayTasks()
}
