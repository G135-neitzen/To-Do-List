import { v4 as uuidv4 } from 'uuid';
const ToDos = [];
/**
 * Represents a Task with a title, description, due date, priority, and status.
 */
class Task {
    constructor(title, description, dueDate, priority, id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = id
    }
}
class todoStatus extends Task {
    constructor(title, description, dueDate, priority, id, status) {
        super(title, description, dueDate, priority, id);
        this.status = status;
    }
    toggleStatus() {
        const status = document.createElement("select");
        status.innerHTML = `
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
        `;
        status.value = this.status;
        status.addEventListener("change", (e) => {
            this.status = e.target.value;
        });
        return status;
    }
}
function addTaskToList(task) {
    ToDos.push(task);
}

function createID() {
    return (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : Date.now().toString();
}
function createmodalToDo() {
    const modal = document.createElement("div");
    modal.classList.add("data-open-modal");
    modal.innerHTML = `
        <dialog data-modal>
            <form id="todo-form">
                <h3>Create a new To-Do</h3>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" required>
                <label for="description">Description:</label>
                <textarea id="description" name="description"></textarea>
                <label for="dueDate">Due Date:</label>
                <input type="date" id="dueDate" name="dueDate">
                <label for="priority">Priority:</label>
                <select id="priority" name="priority">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button type="submit" class="submitToDo">Add To-Do</button>
               <button type="reset" class="resetToDo">Reset</button>
            </form>
            <button data-close-modal>Close</button>
        </dialog>
    `;
    document.body.appendChild(modal);
}
function setupDeleteListener(onDeleteCallback) {
    const deleteButtons = document.querySelectorAll(".delete-task");
    deleteButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const taskId = e.target.dataset.taskId;
            const taskIndex = ToDos.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                ToDos.splice(taskIndex, 1);
                if(onDeleteCallback) onDeleteCallback();
            }
        });
    });
}

function createToDo(onCreateCallback) {
    const form = document.querySelector("#todo-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = form.elements["title"].value;
        const description = form.elements["description"].value;
        const dueDate = form.elements["dueDate"].value;
        const priority = form.elements["priority"].value;
        const status = "pending"; // Default status
        const newTask = new todoStatus(
            title,
            description,
            dueDate,
            priority,
            createID(), // Generate a unique ID for the task
            status
        );
        form.reset();
        document.querySelector("[data-modal]").close();
        addTaskToList(newTask);
        if (onCreateCallback) onCreateCallback();
        setupDeleteListener(); // Set up delete listeners after adding a new task
    });
}

function displayModal() {
    const modal = document.querySelector("[data-modal]");
    const openModal = document.querySelector("#AddTo-Do");
    const closeModal = document.querySelector("[data-close-modal]");

    openModal.addEventListener("click", () => {
        modal.showModal();
    });
    closeModal.addEventListener("click", () => {
        modal.close();
    });
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    createmodalToDo();
    displayModal();
});
export { createToDo, createmodalToDo, displayModal, addTaskToList, Task, todoStatus, ToDos, setupDeleteListener, createID};