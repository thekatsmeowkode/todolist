
export class Project {
    constructor(name) {
        this.name = name
        this.taskList = []
    }

    add(name) {
        this.taskList.push(name)}
}