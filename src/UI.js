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

}
