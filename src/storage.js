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


    //PROBLEM
    
    static submitEdit(name) {
    }
}