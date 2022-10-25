import "../node_modules/@fontsource/montserrat"
import "./styles.css"
import { domEvents } from "./dom-events.js"
import { UI } from './UI.js'

window.addEventListener('DOMContentLoaded', UI.displayAllTasks)

domEvents()

