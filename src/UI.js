import { Store } from "./storage"



export class UI {

    static addTaskDisplay(task) {
        const addTaskButton = document.querySelector('.add-task-button')
        const container = document.querySelector('.task-container')
        const newTask = document.createElement('button')
        newTask.classList.add('task-list')
        container.appendChild(newTask)
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

    static clearAllTasks() {
        let container = document.getElementsByClassName('task-list')
        Array.from(container).forEach(n => n.remove())
    }

    static displayTasksInProjects(name) {
        this.clearAllTasks()
        let storage = Store.getProjects()
        storage.forEach((project) => {
            if (project.name === name) {
                let list = project.taskList
                list.forEach((item) => {
                    UI.addTaskDisplay(item)
            })
        }})
    }

    static editItem(name, parent) {
        let projectHeader = document.querySelector('.project-header')
        if (projectHeader.textContent === 'Inbox') 
        {const tasks = Store.getTasks()
            tasks.forEach((task) =>
            {if (task.name === name) {
                document.querySelector('#name').value = name
                document.querySelector('#description').value = task.description  
                document.querySelectorAll('input[name="priority"]').value = task.priority;
                document.querySelector('#dueDate').value = task.dueDate
            }})
            Store.removeTask(name)}
        else {
            let projectName = projectHeader.textContent
            const projects = Store.getProjects()
            projects.forEach((project) => {
            if (project.name === projectName) {
                project.taskList.forEach((task) => {
                    if (task.name === name) {
                        document.querySelector('#name').value = name
                        document.querySelector('#description').value = task.description  
                        document.querySelectorAll('input[name="priority"]').value = task.priority;
                        document.querySelector('#dueDate').value = task.dueDate
                    }
                })}})
            Store.removeTaskFromProject(projectName, name)
        }
        parent.remove()
        document.querySelector('.task-form').style.visibility = 'visible'
    }

    static addProjectDisplay(project) {
        if (project.name !== '') {
        let name = project.name
        const newButton = document.createElement('button')
        newButton.classList.add('project-button')
        newButton.innerHTML = `<div class="project-button-name">
            <i class="fa-solid fa-bars"></i>
            <span id='project-button'>${name}</span>
            </div>
            <div class="project-close-button">
            <i class="fa-solid fa-xmark"></i>
            </div>`
        let container = document.querySelector('.project-list')
        let addButton = document.querySelector('.add-project-div')
        container.insertBefore(newButton, addButton)}
    }
}