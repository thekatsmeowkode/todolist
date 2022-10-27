import { Store } from "./storage"

export class UI {
    static addTaskDisplay(task) {
        const addTaskButton = document.querySelector('.add-task-button')
        const container = document.querySelector('.main-content')
        const newTask = document.createElement('button')
        newTask.classList.add('task-list')
        container.insertBefore(newTask, addTaskButton)
        newTask.innerHTML = `<div class="task-list-text">
        <input type="checkbox" class="checkbox">
        <span id="task-list-task-name">${task.name}</span>
        </div>
        <div class="list-edit-button">
        <i class="fa-solid fa-pen-nib"></i>
        </div>
        <a class="list-close-button">
        <i class="fa-solid fa-xmark"></i>
        </a>`
    }

    static displayAllTasks() {
        let storage = Store.getTasks()
        storage.forEach((task) => {
            UI.addTaskDisplay(task)
        })
    }

    static displayAllProjects() {
        let storage = Store.getProjects()
        storage.forEach((project) => {
            UI.addProjectDisplay(project)
        })
    }

    static DisplayTasksInProjects() {
        let storage 
    }

    static editItem(name, parent) {
        const tasks = Store.getTasks()
        parent.remove()
        tasks.forEach((task) =>
        {if (task.name === name) {
            document.querySelector('#name').value = name
            document.querySelector('#description').value = task.description  
            document.querySelectorAll('input[name="priority"]').value = task.priority;
            document.querySelector('#dueDate').value = task.dueDate
        }
        }
        )
        document.querySelector('.task-form').style.visibility = 'visible'
        Store.removeTask(name)
    }

    static addProjectDisplay(project) {
        let name = project.name
        const newButton = document.createElement('button')
        newButton.classList.add('project-button')
        newButton.innerHTML = `<div class="project-button-name">
            <i class="fa-solid fa-bars"></i>
            <span>${name}</span>
            </div>
            <div class="project-close-button">
            <i class="fa-solid fa-xmark"></i>
            </div>`
        let container = document.querySelector('.project-list')
        let addButton = document.querySelector('.add-project-div')
        container.insertBefore(newButton, addButton)
    }
}