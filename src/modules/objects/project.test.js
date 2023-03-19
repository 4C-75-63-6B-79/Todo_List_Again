/* global test, expect */

import Project from "./project";

test("Project returns a object which has title and taskList as own property", () => {
    const testProject = new Project({ title: "test project" });
    expect(Object.prototype.hasOwnProperty.call(testProject, "title")).toBe(true);
    expect(Object.prototype.hasOwnProperty.call(testProject, "taskList")).toBe(true);
});

test("function add task add a task to the task list in project", () => {
    const testProject = new Project("test project");
    testProject.addTask({ title: "test task", description: "to test the add function" });
    expect(testProject.taskList.length).toBe(1);
});

test("function getTaskAtIndex returns false if index is greater than tasklist length", () => {
    const testProject = new Project("test project");
    expect(testProject.getTaskAtIndex(10)).toBe(false);
});

test("function getTaskAtIndex returns task at specific index in tasklist", () => {
    const testProject = new Project("test project");
    testProject.addTask({ title: "test task", description: "test task description" });
    const testTask = testProject.getTaskAtIndex(0);

    // testing if the return value is task object with specific properties
    expect(Object.prototype.hasOwnProperty.call(testTask, "title")).toBe(true);
    expect(Object.prototype.hasOwnProperty.call(testTask, "description")).toBe(true);
});