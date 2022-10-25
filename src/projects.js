import { domEvents } from "./dom-events"

export class Project {
    constructor(name) {
        this.name = name
        this.projects = []
    }

    add(name) {
        this.projects.push(name)}
}