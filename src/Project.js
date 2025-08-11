import { todoStatus, createID } from './task.js';

const Projects = [];

class Project {
    constructor(name) {
        this.name = name;
        this.dueDate = null; // Optional due date for the project
        this.tasks = [];
        this.id = createID(); // Generate a unique ID for the project
    }

    addTask(title, description, dueDate, priority, status = "pending") {
        const task = new todoStatus(
            title,
            description,
            dueDate,
            priority,
            createID(), // Generate a unique ID for the task
            status // Default status
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

    getTaskById(taskId) {
        return this.tasks.find(task => task.id === taskId);
    }

    updateTask(taskId, updatedFields) {
        const task = this.getTaskById(taskId);
        if (task) {
            Object.assign(task, updatedFields);
            return task;
        }
        return null;
    }
}

// Funciones para manejar el array de proyectos
function addProject(project) {
    Projects.push(project);
    return project;
}

function removeProject(projectId) {
    const index = Projects.findIndex(project => project.id === projectId);
    if (index !== -1) {
        Projects.splice(index, 1);
        return true;
    }
    return false;
}

function getProjectById(projectId) {
    return Projects.find(project => project.id === projectId);
}

function getAllProjects() {
    return Projects;
}

export { 
    Project, 
    Projects, 
    addProject, 
    removeProject, 
    getProjectById, 
    getAllProjects 
};