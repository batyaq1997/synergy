// index.js

// Synergy - A collaborative platform designed to streamline teamwork and enhance productivity for individuals and teams.

// Synergy functionality
class Synergy {
    constructor() {
        this.tasks = [];
        this.files = [];
    }

    // Method to add a new task
    addTask(taskName, project, assignee, deadline) {
        const task = {
            name: taskName,
            project: project,
            assignee: assignee,
            deadline: deadline
        };
        this.tasks.push(task);
    }

    // Method to share a file
    shareFile(fileName, sharedWith) {
        const file = {
            name: fileName,
            sharedWith: sharedWith
        };
        this.files.push(file);
    }

    // Method to display all tasks and shared files
    displayActivities() {
        console.log("Tasks:");
        this.tasks.forEach(task => {
            console.log(`- ${task.name}`);
            console.log(`  Project: ${task.project}`);
            console.log(`  Assignee: ${task.assignee}`);
            console.log(`  Deadline: ${task.deadline}`);
        });

        console.log("\nShared Files:");
        this.files.forEach(file => {
            console.log(`- ${file.name} (Shared with: ${file.sharedWith})`);
        });
    }
}

// Example usage:
const synergyApp = new Synergy();

// Adding tasks
synergyApp.addTask("Develop Homepage", "Website Redesign", "@developer1", "March 31, 2024");

// Sharing files
synergyApp.shareFile("ProjectProposal.pdf", "@team");

// Displaying tasks and shared files
synergyApp.displayActivities();
