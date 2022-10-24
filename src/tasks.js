export class Tasks {
    constructor(name, description, priority = 'Low', dueDate = 'No date') {
        this.name = name
        this.description = description
        this.priority = priority
        this.dueDate = dueDate
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setDescription(description) {
        this.description = description
    }

    getDescription() {
        return this.description
    }

    setPriority(priority) {
        this.priority = priority
    }

    getPriority() {
        return this.priority
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate
    }

    getDueDate() {
        return this.dueDate
    }
}