import { Project, addProject, removeProject, getProjectById, getAllProjects } from './Project.js';
import { todoStatus, createID } from './task.js';

// Crear el modal para proyectos
function createProjectModal() {
    const modal = document.createElement("div");
    modal.classList.add("project-modal-container");
    modal.innerHTML = `
        <dialog data-project-modal>
            <form id="project-form">
                <h3>Create a new Project</h3>
                <label for="titleProject">Title:</label>
                <input type="text" id="titleProject" name="titleProject" required>
                <label for="dueDateProject">Due Date:</label>
                <input type="date" id="dueDateProject" name="dueDateProject">
                <div class="form-buttons">
                    <button type="submit" class="submit-project">Add Project</button>
                    <button type="reset" class="reset-project">Reset</button>
                </div>
            </form>
            <button data-close-project-modal>Close</button>
        </dialog>
    `;
    document.body.appendChild(modal);

    // Event listeners para el modal
    const dialog = modal.querySelector("[data-project-modal]");
    const closeBtn = modal.querySelector("[data-close-project-modal]");
    
    closeBtn.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (e) => {
        if (e.target === dialog) dialog.close();
    });

    return modal;
}

// Función para mostrar el modal de proyecto
function showProjectModal() {
    const projectDialog = document.querySelector('[data-project-modal]');
    if (projectDialog) {
        projectDialog.showModal();
    } else {
        console.error("No se encontró el modal de proyectos en el DOM.");
    }
}

// Manejar la creación de proyectos desde el formulario
function setupProjectForm(onCreateCallback) {
    const form = document.querySelector("#project-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = form.elements["titleProject"].value.trim();
        const dueDate = form.elements["dueDateProject"].value;

        if (!name) {
            alert("Please enter a project name");
            return;
        }

        // Crear el proyecto
        const newProject = new Project(name);
        if (dueDate) {
            newProject.dueDate = dueDate;
        }

        // Agregarlo al array
        addProject(newProject);
        
        // Limpiar formulario y cerrar modal
        form.reset();
        document.querySelector("[data-project-modal]").close();
        
        // Callback para actualizar la UI
        if (onCreateCallback) onCreateCallback();
    });
}

// Mostrar todos los proyectos en el contenedor
function displayProjects() {
    const projectContainer = document.querySelector("#project-container");
    if (!projectContainer) return;

    projectContainer.innerHTML = ""; // Clear existing projects
    
    const projects = getAllProjects();
    
    if (projects.length === 0) {
        projectContainer.innerHTML = "<p>No projects yet. Create your first project!</p>";
        return;
    }

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectContainer.appendChild(projectCard);
    });
}

// Crear una tarjeta individual de proyecto
function createProjectCard(project) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.dataset.projectId = project.id;

    projectCard.innerHTML = `
        <div class="project-header">
            <h3>${project.name}</h3>
            <button class="delete-project" data-project-id="${project.id}">×</button>
        </div>
        <p class="project-due-date">Due Date: ${project.dueDate || "No due date"}</p>
        <div class="project-actions">
            <button class="add-task-to-project" data-project-id="${project.id}">Add Task</button>
            <span class="task-count">${project.tasks.length} tasks</span>
        </div>
        <ul class="task-list" id="task-list-${project.id}"></ul>
    `;

    // Event listeners para la tarjeta
    setupProjectCardEvents(projectCard, project);
    
    // Mostrar las tareas existentes
    displayProjectTasks(project);

    return projectCard;
}

// Configurar eventos para una tarjeta de proyecto
function setupProjectCardEvents(projectCard, project) {
    // Botón para agregar tarea
    const addTaskBtn = projectCard.querySelector(".add-task-to-project");
    addTaskBtn.addEventListener("click", () => {
        showAddTaskModal(project.id);
    });

    // Botón para eliminar proyecto
    const deleteBtn = projectCard.querySelector(".delete-project");
    deleteBtn.addEventListener("click", () => {
        if (confirm(`Are you sure you want to delete the project "${project.name}"?`)) {
            removeProject(project.id);
            displayProjects(); // Refresh the display
        }
    });
}

// Mostrar modal simple para agregar tarea (mejoraremos esto después)
function showAddTaskModal(projectId) {
    const title = prompt("Task title:");
    if (!title) return;
    
    const description = prompt("Task description:");
    const dueDate = prompt("Task due date (YYYY-MM-DD):");
    const priority = prompt("Priority (low, medium, high):") || "medium";

    const project = getProjectById(projectId);
    if (project) {
        project.addTask(title, description, dueDate, priority);
        displayProjectTasks(project);
        updateTaskCount(projectId);
    }
}

// Mostrar las tareas de un proyecto específico
function displayProjectTasks(project) {
    const taskList = document.querySelector(`#task-list-${project.id}`);
    if (!taskList) return;

    taskList.innerHTML = "";
    
    project.tasks.forEach(task => {
        const taskItem = createTaskItem(task, project.id);
        taskList.appendChild(taskItem);
    });
}

// Crear un elemento de tarea
function createTaskItem(task, projectId) {
    const li = document.createElement("li");
    li.classList.add("task-item");
    li.dataset.taskId = task.id;

    li.innerHTML = `
        <div class="task-content">
            <span class="task-title">${task.title}</span>
            <span class="task-description">${task.description}</span>
            <span class="task-due-date">${task.dueDate || "No due date"}</span>
            <span class="task-priority priority-${task.priority}">${task.priority}</span>
        </div>
        <div class="task-actions">
            <button class="delete-task" data-task-id="${task.id}" data-project-id="${projectId}">Delete</button>
        </div>
    `;

    // Agregar el selector de estado
    const taskContent = li.querySelector(".task-content");
    const statusSelect = task.toggleStatus();
    statusSelect.classList.add("task-status");
    taskContent.appendChild(statusSelect);

    // Event listener para eliminar tarea
    const deleteBtn = li.querySelector(".delete-task");
    deleteBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this task?")) {
            const project = getProjectById(projectId);
            if (project) {
                project.removeTask(task.id);
                displayProjectTasks(project);
                updateTaskCount(projectId);
            }
        }
    });

    return li;
}

// Actualizar el contador de tareas en la tarjeta del proyecto
function updateTaskCount(projectId) {
    const project = getProjectById(projectId);
    const taskCount = document.querySelector(`[data-project-id="${projectId}"] .task-count`);
    if (project && taskCount) {
        taskCount.textContent = `${project.tasks.length} tasks`;
    }
}

export {
    createProjectModal,
    showProjectModal,
    setupProjectForm,
    displayProjects,
    createProjectCard,
    displayProjectTasks,
    showAddTaskModal
};