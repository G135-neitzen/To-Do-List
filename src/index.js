// src/index.js
import { createToDo, displayModal, createmodalToDo, Task, todoStatus, addTaskToList, ToDos, setupDeleteListener, createID } from './task.js';
import { Project, Projects, createProject, createProjectModal } from './project.js';
import styles from './styles.css';

// Initialize the To-Do List application

document.addEventListener("DOMContentLoaded", () => {
    createmodalToDo();
    displayModal();
    createToDo(displayTodayToDos); // Pass the displayTodayToDos function to createToDo
    displayTodayToDos();// Display today's tasks on load

    createProjectModal(); 

    // Espera a que el modal esté en el DOM antes de inicializar el formulario
    createProject();

    document.getElementById("add-project").addEventListener("click", () => {
        // Selecciona el dialog correctamente
        const projectDialog = document.querySelector('[data-project-modal]');
        if (projectDialog) {
            projectDialog.showModal();
        } else {
            console.error("No se encontró el modal de proyectos en el DOM.");
        }
    });

    displayProjects(); // Display existing projects on load
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
function displayProjects() {
    const projectList = document.querySelector("#project-list");
    projectList.innerHTML = ""; // Clear existing projects
    Projects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.textContent = project.name;
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-project");
        deleteButton.dataset.projectId = project.id; // Set the project ID for deletion
        deleteButton.textContent = "Delete";
        listItem.appendChild(deleteButton);
        projectList.appendChild(listItem);
    });
    setupProjectDeleteListener(); // Set up delete listeners for each project
}

