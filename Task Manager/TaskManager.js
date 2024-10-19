let tasks = [];
let taskIdCounter = 1; 

const addTask = (description) => {
    const newTask = {
        id: taskIdCounter++,
        description: description,
        completed: false
    };
    tasks.push(newTask);
    console.log(`Task added: "${newTask.description}"`); 
};

const displayTasks = () => {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("Current Tasks:");
        tasks.forEach(task => {
            console.log(`${task.id}. ${task.description} [${task.completed ? "completed" : "not completed"}]`);
        });
    }
};

const toggleTaskCompletion = (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        console.log(`Task "${task.description}" is now marked as ${task.completed ? "completed" : "not completed"}`); 
    } else {
        console.log(`Task with ID ${taskId} not found.`);
    }
};

const removeTask = (taskId) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        console.log(`Task removed:"${tasks[taskIndex].description}"`);
        tasks.splice(taskIndex, 1);
    } else {
        console.log(`Task with ID ${taskId} not found.`);
    }
};

const updateTaskDescription = (taskId, newDescription) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.description = newDescription;
        console.log(`Task description updated:"${newDescription}"`);
    } else {
        console.log(`Task with ID ${taskId} not found.`);
    }
};

const displayMenu = () => {
    console.log("\nTask Manager Menu:");
    console.log("1. Add task");
    console.log("2. View all tasks");
    console.log("3. Toggle task completion");
    console.log("4. Remove task");
    console.log("5. Update task description");
    console.log("6. Exit");
};

const startTaskManager = () => {
    displayMenu();
    
    const userChoice = prompt("Select an option (1-6): ");

    switch (userChoice) {
        case "1":
            const taskDescription = prompt("Enter task description: ");
            addTask(taskDescription);
            startTaskManager(); 
            break;
        case "2":
            displayTasks();
            startTaskManager();
            break;
        case "3":
            const toggleId = parseInt(prompt("Enter task ID to toggle completion: "));
            toggleTaskCompletion(toggleId);
            startTaskManager();
            break;
        case "4":
            const removeId = parseInt(prompt("Enter task ID to remove: "));
            removeTask(removeId);
            startTaskManager();
            break;
        case "5":
            const updateId = parseInt(prompt("Enter task ID to update: "));
            const newDescription = prompt("Enter new description: ");
            updateTaskDescription(updateId, newDescription);
            startTaskManager();
            break;
        case "6":
            console.log("Exiting Task Manager...");
            break;
        default:
            console.log("Invalid option. Please try again.");
            startTaskManager();
            break;
    }
};

startTaskManager();
