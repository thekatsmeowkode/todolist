export class Store {
    static getTasks() {
        let tasks
        if (localStorage.getItem('tasks') === null) {
            tasks = []}
        else {tasks = JSON.parse(localStorage.getItem('tasks'))}
    return tasks
    }

    static addTasks(task) {
        const tasks = Store.getTasks()
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    static removeTask(name) {
        const tasks = Store.getTasks()
        tasks.forEach((task, index) => {
            if (task.name === name) {
                tasks.splice(index, 1)
            }})
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    static addProject(project) {
        if (project.name === '') {alert('Must name project')}
        else {
        const projects = Store.getProjects()
        projects.push(project)
        localStorage.setItem('projects', JSON.stringify(projects))}
    }

    static removeProject(name) {
        const projects = Store.getProjects()
        projects.forEach((project, index) => {
            if (project.name === name) {
                projects.splice(index, 1)
            }
        })
        localStorage.setItem('projects', JSON.stringify(projects))
    }

    static getProjects() {
        let projects
        if (localStorage.getItem('projects') == null) {
            projects = []
        }
        else {projects = JSON.parse(localStorage.getItem('projects'))}
        return projects
    }
}