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