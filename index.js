let taskForm = document.querySelector('#task')
let addTask = document.querySelector('#add')
let ul = document.querySelector('#ul')
let tasks = []

function displayTasks() {
    ul.innerHTML = ''
    for (let x=0; x<tasks.length; x++) {
        let li = document.createElement('li')
        li.innerHTML = `${tasks[x]} <button onclick="deleteTasks(${x})">x</button>`
        ul.appendChild(li)
    }
}

addTask.onclick = function(e) {
    e.preventDefault();
    if (taskForm.value) {
        tasks.push(taskForm.value)
        taskForm.value = ''
    }
    displayTasks()
}

function deleteTasks(x) {
    tasks.splice(x, 1)
    displayTasks()
}
