/* global test, expect */

import Task from "./task";

test("mark complete function of the task makes the iscompleted function true", () => {
    const testTask = new Task({ title: "new task", description: "testing task" });
    testTask.markComplete();
    expect(testTask.isCompleted).toBe(true);
});