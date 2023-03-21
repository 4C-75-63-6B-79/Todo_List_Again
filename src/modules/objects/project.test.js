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
    expect(Object.prototype.hasOwnProperty.call(testTask, "isCompleted")).toBe(true);
});

test("function markTaskCompleteAtIndex returns false if index is more than the task list length", () => {
    const testProject = new Project("test project");
    expect(testProject.markTaskCompleteAtIndex(0)).toBe(false);
});

test("function markTaskCOmpleteAtIndex marks the task at index complete and returs the isComplete value of the task", () => {
    const testProject = new Project("test project");
    testProject.addTask({ title: "test task", description: "test task description" });
    expect(testProject.markTaskCompleteAtIndex(0)).toBe(true);
});

test("function deleteTaskAtIndex returns false if the index is more than the task in that index.", () => {
    const testProject = new Project("test project");
    expect(testProject.markTaskCompleteAtIndex(0)).toBe(false);
});

test("function deleteTaskAtIndex delete the task at the index an returns the deleted task", () => {
    const testProject = new Project("test project");
    testProject.addTask({ title: "test task", description: "test task description" });
    const deletedTask = testProject.deleteTaskAtIndex(0);
    console.log(deletedTask);
    expect(Object.prototype.hasOwnProperty.call(deletedTask, "title")).toBe(true);
    expect(Object.prototype.hasOwnProperty.call(deletedTask, "description")).toBe(true);
});