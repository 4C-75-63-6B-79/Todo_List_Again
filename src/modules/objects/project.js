import Task from "./task";

export default function Project({ title }) {
    this.title = title;
    this.taskList = [];
}

Project.prototype.addTask = function addTask({ title, description }) {
    const task = new Task({ title, description });
    this.taskList.push(task);
};

