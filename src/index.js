import "../node_modules/@fontsource/montserrat"
import "./styles.css"
import { domEvents } from "./dom-events.js"
import { UI } from './UI.js'

document.addEventListener('DOMContentLoaded', function () {UI.displayAllTasks(); UI.displayAllProjects()})

domEvents()

