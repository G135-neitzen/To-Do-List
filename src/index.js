// src/index.js
import { createToDo, displayModal,createmodalToDo, Task, todoStatus, addTaskToList } from './task.js';
import styles from './styles.css';

// Initialize the To-Do List application
function displayToDoList() {
    const todoListToday = document.querySelector("#task-listToday")
}

document.addEventListener("DOMContentLoaded", () => {
    createToDo();
    displayModal();
});


