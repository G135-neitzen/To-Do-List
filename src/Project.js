import { Task, todoStatus, createID, toggleStatus } from './task.js';


const Projects = [];
class Project {
    constructor(name) {
        this.name = name;
        this.dueDate = null; // Optional due date for the project
        this.tasks = [];
        this.id = createID(); // Generate a unique ID for the project
    }

    addTask(title, description, dueDate, priority, id, status) {
        const task = new todoStatus(
            title,
            description,
            dueDate,
            priority,
            id = createID(), // Generate a unique ID for the task
            status = "pending" // Default status
        );
        this.tasks.push(task);
        return task;
    }

    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    getTasks() {
        return this.tasks;
    }
}

function createProjectModal() {
    const modal = document.createElement("div");
    modal.classList.add("data-open-modal");
    modal.innerHTML = `
        <dialog data-project-modal>
            <form id="Project-form">
                <h3>Create a new Project</h3>
                <label for="title">Title:</label>
                <input type="text" id="titleProject" name="titleProject" required>
                <label for="dueDate">Due Date:</label>
                <input type="date" id="dueDateProject" name="dueDateProject">
                <button type="submit" class="submitProject">Add To-Do</button>
               <button type="reset" class="resetProject">Reset</button>
            </form>
            <button data-close-project-modal>Close</button>
        </dialog>
    `;
    document.body.appendChild(modal);

    // Cerrar modal de proyecto
    const dialog = modal.querySelector("[data-project-modal]");
    const closeBtn = modal.querySelector("[data-close-project-modal]");
    closeBtn.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (e) => {
        if (e.target === dialog) dialog.close();
    });
}

function createProject(onCreateCallback) {
    const form = document.querySelector("#Project-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.elements["titleProject"].value;
        const dueDate = form.elements["dueDateProject"].value;
        const newProject = new Project(name);
        if (dueDate) {
            newProject.dueDate = dueDate;
        }
        Projects.push(newProject);
        form.reset();
        if (onCreateCallback) onCreateCallback();

        const projectContaiener = document.querySelector("#project-container");
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <h3>${newProject.name}</h3>
            <p>Due Date: ${newProject.dueDate || "No due date"}</p>
            <button class="add-task-to-project" data-project-id="${newProject.id}">Add Task</button>
            <ul id="task-list-${newProject.id}"></ul>
        `;
        projectContaiener.appendChild(projectCard);
        projectCard.querySelector(".add-task-to-project").addEventListener("click", () => {
            const title = prompt("Task title:");
            const description = prompt("Task description:");
            const dueDate = prompt("Task due date (YYYY-MM-DD):");
            const priority = prompt("Priority (low, medium, high):");

            if (title) {
                const newTask = new todoStatus(title, description, dueDate, priority, crypto.randomUUID(), "pending");
                newProject.addTask(newTask); // Agrega a ese proyecto

                // Mostrar la tarea en el UI
                const taskList = projectCard.querySelector(`#task-list-${newProject.id}`);
                const li = document.createElement("li");
                li.textContent = `${newTask.title} - ${newTask.description} - ${newTask.dueDate} - ${newTask.priority} - ${newTask.status}`;
                const statusSelect = newTask.toggleStatus();
                li.appendChild(statusSelect);
                taskList.appendChild(li);
            }
        });
    });
}

export { Project, Projects, createProject, createProjectModal };