import { Task, todoStatus, createID } from './task.js';

const Projects = [];
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.id = createID(); // Generate a unique ID for the project
    }

    addTask(title, description, dueDate, priority) {
        const task = new todoStatus(
            title,
            description,
            dueDate,
            priority,
            createID(), // Generate a unique ID for the task
            "pending" // Default status
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

function createProject(name) {
    const project = new Project(name);
    Projects.push(project);
    return project;
}

export { Project, createProject, Projects };