// src/index.js
// src/index.js
import { createToDo, displayModal, createmodalToDo, addTaskToList, ToDos, setupDeleteListener } from './task.js';
import { createProjectModal, showProjectModal, setupProjectForm, displayProjects } from './projectsUI.js';
import styles from './styles.css';

// Initialize the To-Do List application
document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
});

function initializeApp() {
    // Inicializar modales
    createmodalToDo();
    createProjectModal();
    
    // Configurar eventos de modales
    displayModal();
    
    // Configurar formularios
    createToDo(displayTodayToDos);
    setupProjectForm(displayProjects);
    
    // Configurar botones de navegación
    setupNavigationButtons();
    
    // Mostrar contenido inicial
    displayTodayToDos();
    displayProjects();
}

function setupNavigationButtons() {
    // Botón para agregar To-Do
    const addTodoBtn = document.getElementById("AddTo-Do");
    if (addTodoBtn) {
        addTodoBtn.addEventListener("click", () => {
            const todoModal = document.querySelector('[data-modal]');
            if (todoModal) {
                todoModal.showModal();
            }
        });
    }

    // Botón para agregar proyecto
    const addProjectBtn = document.getElementById("add-project");
    if (addProjectBtn) {
        addProjectBtn.addEventListener("click", showProjectModal);
    }

    // Botón para mostrar tareas de hoy
    const todayBtn = document.getElementById("Today-tasks");
    if (todayBtn) {
        todayBtn.addEventListener("click", () => {
            showSection('today-tasks');
            displayTodayToDos();
        });
    }

    // Botón para mostrar proyectos
    const viewProjectsBtn = document.getElementById("view-projects");
    if (viewProjectsBtn) {
        viewProjectsBtn.addEventListener("click", () => {
            showSection('project-section');
            displayProjects();
        });
    }

    // Agregar más botones según necesites
    setupOtherNavigationButtons();
}

function setupOtherNavigationButtons() {
    // Botón para tareas completadas
    const completedBtn = document.getElementById("Completed-tasks");
    if (completedBtn) {
        completedBtn.addEventListener("click", () => {
            showSection('today-tasks');
            displayCompletedTasks();
        });
    }

    // Botón para próximas tareas
    const upcomingBtn = document.getElementById("Upcoming-tasks");
    if (upcomingBtn) {
        upcomingBtn.addEventListener("click", () => {
            showSection('today-tasks');
            displayUpcomingTasks();
        });
    }
}

function showSection(sectionClass) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('main > div');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    const targetSection = document.querySelector(`.${sectionClass}`);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

function displayTodayToDos() {
    const today = new Date().toISOString().split('T')[0];
    const todayTasks = ToDos.filter(task => task.dueDate === today);
    const taskList = document.querySelector("#task-listToday");
    
    if (!taskList) return;
    
    taskList.innerHTML = ""; // Clear existing tasks
    
    if (todayTasks.length === 0) {
        taskList.innerHTML = "<li>No tasks for today! 🎉</li>";
        return;
    }
    
    todayTasks.forEach(task => {
        const listItem = createTodayTaskItem(task);
        taskList.appendChild(listItem);
    });
    
    setupDeleteListener(displayTodayToDos); // Set up delete listeners for each task
}

function createTodayTaskItem(task) {
    const listItem = document.createElement("li");
    listItem.classList.add("today-task-item");
    
    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");
    taskInfo.innerHTML = `
        <span class="task-title">${task.title}</span>
        <span class="task-description">${task.description}</span>
        <span class="task-due-date">Due: ${task.dueDate}</span>
        <span class="task-priority priority-${task.priority}">Priority: ${task.priority}</span>
    `;
    
    const taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");
    
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-task");
    deleteButton.dataset.taskId = task.id;
    deleteButton.textContent = "Delete";
    
    listItem.appendChild(taskInfo);
    
    // Agregar selector de estado
    const statusSelect = task.toggleStatus();
    statusSelect.classList.add("task-status-select");
    taskActions.appendChild(statusSelect);
    taskActions.appendChild(deleteButton);
    
    listItem.appendChild(taskActions);
    
    return listItem;
}

function displayCompletedTasks() {
    const completedTasks = ToDos.filter(task => task.status === "completed");
    const taskList = document.querySelector("#task-listToday");
    
    if (!taskList) return;
    
    taskList.innerHTML = "";
    
    if (completedTasks.length === 0) {
        taskList.innerHTML = "<li>No completed tasks yet.</li>";
        return;
    }
    
    completedTasks.forEach(task => {
        const listItem = createTodayTaskItem(task);
        taskList.appendChild(listItem);
    });
    
    setupDeleteListener(displayCompletedTasks);
}

function displayUpcomingTasks() {
    const today = new Date().toISOString().split('T')[0];
    const upcomingTasks = ToDos.filter(task => task.dueDate > today);
    const taskList = document.querySelector("#task-listToday");
    
    if (!taskList) return;
    
    taskList.innerHTML = "";
    
    if (upcomingTasks.length === 0) {
        taskList.innerHTML = "<li>No upcoming tasks.</li>";
        return;
    }
    
    upcomingTasks.forEach(task => {
        const listItem = createTodayTaskItem(task);
        taskList.appendChild(listItem);
    });
    
    setupDeleteListener(displayUpcomingTasks);
}