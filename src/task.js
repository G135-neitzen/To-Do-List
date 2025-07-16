const searchButton = document.getElementById('search-tasks');
const todos = [];

class Task {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
}

function createToDo(){
    const modal = document.getElementById('modal');

}