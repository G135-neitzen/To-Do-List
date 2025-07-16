
class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
class todoStatus extends Task {
    constructor(title, description, dueDate, priority, status) {
        super(title, description, dueDate, priority);
        this.status = status;
    }
}

function createToDo() {
    const modal = document.createElement("modal");
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
                <label for="status">Status:</label>
                <button type="submit" class="submitToDo">Add To-Do</button>
               <button type="reset" class="resetToDo">Reset</button>
            </form>
            <button data-close-modal>Close</button>
        </dialog>
    `;
    document.body.appendChild(modal);
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
    createToDo();
    displayModal();
});
export default Task;
export { todoStatus, createToDo, displayModal };