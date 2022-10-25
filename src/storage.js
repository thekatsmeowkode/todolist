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
    static editItem(name) {
        const tasks = Store.getTasks()
        tasks.forEach((task, index) =>
        {if (task.name === name) {
            document.querySelector('#name').value = name
            document.querySelector('#description').value = task.description  
            document.querySelectorAll('input[name="priority"]').value = task.priority;
            document.querySelector('#dueDate').value = task.dueDate
            tasks.splice(index, 1)
            tasks.push(task)
        }
        }
        )
        document.querySelector('.task-form').style.visibility = 'visible'
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
}