import { Project } from './project-constructor.js'

const addProjectButton = document.querySelector('.add-project-button')
const addProjectPopup = document.querySelector('#add-box')
const addProjectConfirm = document.querySelector('.popup-add')


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
    }