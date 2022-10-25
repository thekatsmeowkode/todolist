import { Project } from './projects.js'
import { Tasks } from './tasks.js'
import { Store } from './storage.js'
import { add } from 'date-fns'
import { UI } from './UI.js'

const addProjectButton = document.querySelector('.add-project-button')
const addProjectPopup = document.querySelector('#add-box')
const addProjectConfirm = document.querySelector('.popup-add')
const addTaskButton = document.querySelector('.add-task-button')
const taskForm = document.querySelector('.task-form')
const taskSubmitButton = document.querySelector('#task-submit')

export function domEvents() {
    addProjectButton.addEventListener('click', () => {
        addProjectButton.style.display = 'none'
        addProjectPopup.style.visibility= 'visible'
    })

    addProjectConfirm.addEventListener('click', () => {
        let projectName = document.querySelector('#project-name').value;
        let newProject = new Project(projectName)
        newProject.add(projectName)
        console.log(newProject.projects)
    }
        ) 

    addTaskButton.addEventListener('click', () => {
        addTaskButton.style.display = 'none'
        taskForm.style.visibility='visible'
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
                    break;}}
        let dueDate = document.querySelector('#dueDate').value
        //create new task
        let task = new Tasks(name, description, priority, dueDate)
        //store new task
        Store.addTasks(task)
        addTaskButton.style.display = ''
        taskForm.style.visibility = 'hidden'
        UI.addTaskDisplay(task)
    }
    )

    
    }