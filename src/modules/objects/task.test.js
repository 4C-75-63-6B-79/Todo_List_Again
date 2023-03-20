/* global test, expect */

import Task from "./task";

test("mark complete function of the task makes the iscompleted to true and returns the value of isCompleted", () => {
    const testTask = new Task({ title: "new task", description: "testing task" });
    expect(testTask.markComplete()).toBe(true);
});