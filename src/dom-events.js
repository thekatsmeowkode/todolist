import { Project } from './projects.js'
import { Tasks } from './tasks.js'
import { Store } from './storage.js'
import { add, format } from 'date-fns'
import { UI } from './UI.js'

const addProjectButton = document.querySelector('.add-project-button')
const projectButtons = document.getElementsByClassName('project-button')
const addProjectPopup = document.querySelector('#add-box')
const addProjectConfirm = document.querySelector('.popup-add')
const addTaskButton = document.querySelector('.add-task-button')
const taskForm = document.querySelector('.task-form')
const taskSubmitButton = document.querySelector('#task-submit')
const form = document.querySelector('.popup-form')
const taskButtons = document.getElementsByClassName('task-list')
const editButton = document.querySelector('#edit-submit')
const cancelButton = document.querySelector('#cancel')
const projectHeader = document.querySelector('.project-header')
const addTaskProjectButton = document.querySelector('.add-task-to-project-button')

export function domEvents() {
    addProjectButton.addEventListener('click', () => {
        addProjectButton.style.display = 'none'
        addProjectPopup.style.visibility = 'visible'
    })

    addProjectConfirm.addEventListener('click', () => {
        let projectName = document.querySelector('#project-name').value;
        console.log(projectName)
        let newProject = new Project(projectName)
        Store.addProject(newProject)
        UI.addProjectDisplay(newProject)
        addProjectPopup.style.visibility = 'hidden'
        addProjectButton.style.display = 'block'
    })

    addTaskButton.addEventListener('click', () => {
        addTaskButton.style.visibility = 'hidden'
        cancelButton.style.visibility = 'visible'
        editButton.style.visibility = 'hidden'
        taskForm.style.visibility = 'visible'
        taskSubmitButton.style.visibility = 'visible'
    })

    addTaskProjectButton.addEventListener('click', () => {
        addTaskButton.style.visibility = 'hidden'
        cancelButton.style.visibility = 'visible'
        editButton.style.visibility = 'hidden'
        taskForm.style.visibility = 'visible'
        taskSubmitButton.style.visibility = 'visible'
    })

    taskSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let name = document.querySelector('#name').value
        let description = document.querySelector('#description').value
        const radioButtons = document.querySelectorAll('input[name="priority"]');
        let priority
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                priority = radioButton.value;
                break;
            }}
        let dueDate = document.querySelector('#dueDate').value
            //create new task
            let task = new Tasks(name, description, priority, dueDate)
            //store new task
            if (projectHeader.textContent === 'Inbox') {
                Store.addTasks(task)
                addTaskButton.style.display = 'block'}
            else {
                Store.addTaskToProject(task)
                addTaskButton.style.display = 'none'
            }
            UI.addTaskDisplay(task)
            form.reset()
            addTaskButton.style.display = ''
            taskForm.style.visibility = 'hidden'
            editButton.style.visibility = 'hidden'
            cancelButton.style.visibility = 'hidden'
            taskSubmitButton.style.visibility = 'hidden'

           
        }
    )

    //convoluted way to access dynamically created task elements
    document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('list-close-button')) {
            if (projectHeader.textContent === 'Inbox') {
                let name = event.target.previousElementSibling.previousElementSibling.children[1].textContent
                Store.removeTask(name);
                event.target.parentNode.remove()}
            else {
                let projectName = projectHeader.textContent
                let name = event.target.previousElementSibling.previousElementSibling.children[1].textContent
                Store.removeTaskFromProject(projectName, name)
                event.target.parentNode.remove()
            }
        };

        if (event.target.classList.contains('list-edit-button')) {
            editButton.style.visibility = 'visible'
            cancelButton.style.visibility = 'visible'
            taskSubmitButton.style.visibility = 'hidden'
            if (projectHeader.textContent === 'Inbox') {
                addTaskButton.style.visibility = 'hidden'
            }
            else {addTaskProjectButton.style.visibility = 'hidden'}
            let parent = event.target.parentElement
            let name = event.target.previousElementSibling.children[1].textContent
            UI.editItem(name, parent)
        }
        if (event.target.id == 'task-list-task-name') {
            console.log('view status')
        }

        if (event.target.classList.contains('project-close-button')) {
            {
                let name = event.target.parentElement.children[0].children[1].textContent
                console.log(name)
                Store.removeProject(name)
                event.target.parentElement.remove()
            }
        }

        if (event.target.classList.contains('project-button')) {
            addTaskButton.style.display = 'none'
            addTaskProjectButton.style.visibility = 'visible'
            let name = event.target.children[0].children[1].textContent
            projectHeader.textContent = name
            UI.displayTasksInProjects(name)
        }

        if (event.target.id == 'project-button') {
            addTaskButton.style.display = 'none'
            addTaskProjectButton.style.visibility = 'visible'
            let name = event.target.textContent
            projectHeader.textContent = name
            UI.displayTasksInProjects(name)
        }
    });

    editButton.addEventListener('click', (e) => {
        e.preventDefault()
        let name = e.target.parentElement.parentElement.children[1].value
        let name2 = document.querySelector('#name').value
        let description = document.querySelector('#description').value
        const radioButtons = document.querySelectorAll('input[name="priority"]');
        let priority
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                priority = radioButton.value;
                break;
            }
        }
        let dueDate = document.querySelector('#dueDate').value
        //create new task
        let task = new Tasks(name2, description, priority, dueDate)
        //store new task
        if (projectHeader.textContent === 'Inbox') {
            Store.addTasks(task)}
        else {
            addTaskProjectButton.style.visibility = 'visible'
            Store.addTaskToProject(task)}
        UI.addTaskDisplay(task)
        form.reset()
        taskForm.style.visibility = 'hidden'
        editButton.style.visibility = 'hidden'
        cancelButton.style.visibility = 'hidden'
        addTaskButton.style.visibility = 'visible'
    })

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault()
        taskForm.style.visibility = 'hidden'
        editButton.style.visibility = 'hidden'
        cancelButton.style.visibility = 'hidden'
        addTaskButton.style.visibility = 'visible'
        taskSubmitButton.style.visiblity = 'hidden'
    })


}
