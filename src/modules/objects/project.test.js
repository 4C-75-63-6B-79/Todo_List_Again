/* global test, expect */

import Project from "./project";

test("Project returns a object which has title and taskList as own property", () => {
    const testProject = new Project({ title: "test project" });
    expect(Object.prototype.hasOwnProperty.call(testProject, "title")).toBe(true);
    expect(Object.prototype.hasOwnProperty.call(testProject, "taskList")).toBe(true);
});