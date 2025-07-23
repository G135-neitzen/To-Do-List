// src/index.js
import { createToDo, displayModal, createmodalToDo, Task, todoStatus, addTaskToList, ToDos, setupDeleteListener, createID } from './task.js';
import styles from './styles.css';

// Initialize the To-Do List application

document.addEventListener("DOMContentLoaded", () => {
    createmodalToDo();
    displayModal();
    createToDo(displayTodayToDos); // Pass the displayTodayToDos function to createToDo
    displayTodayToDos(); // Display today's tasks on load
});

function displayTodayToDos() {
    const today = new Date().toISOString().split('T')[0];
    const todayTasks = ToDos.filter(task => task.dueDate === today);
    const taskList = document.querySelector("#task-listToday");
    taskList.innerHTML = ""; // Clear existing tasks
    todayTasks.forEach(task => {
        const listItem = document.createElement("li");
        const text = document.createTextNode(
            `${task.title} - ${task.description} - (Due: ${task.dueDate}) - Priority: ${task.priority} - Status: `
        );
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-task");
        deleteButton.dataset.taskId = task.id; // Set the task ID for deletion
        deleteButton.textContent = "Delete";
        listItem.appendChild(text);
        const statusSelect = task.toggleStatus();
        listItem.appendChild(statusSelect);
        taskList.appendChild(listItem);
        listItem.appendChild(deleteButton);
       
    }); 
    setupDeleteListener(displayTodayToDos); // Set up delete listeners for each task
}
