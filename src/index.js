import "./styles.css";
import Task, { todoStatus, createToDo, displayModal } from "./task.js";

document.addEventListener("DOMContentLoaded", () => {
    createToDo();
    displayModal();
});

