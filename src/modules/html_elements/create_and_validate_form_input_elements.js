import { makeElement, makeInput } from "./html_create_function";

const createFormsElements = (function initFormElements() {

    function makeFormTitleInput() {
        const form = document.querySelector("form");
        const inputTitle = makeInput({ type: "text", name: "title", minLength: "5", maxLength: "40",  size: "40",  placeholder: "Title", required: "true" });
        form.appendChild(inputTitle);
    }

    function makeFormDescriptionInput() {
        const form = document.querySelector("form");
        const inputDescription = makeElement({ elementType: "textarea", attributesAndValues: {
            "minLength": "20",
            "maxLength": "60",
            "rows": "4",
            "name": "description",
            "placeholder": "Task Description",
            "required": "",
        } });
        form.appendChild(inputDescription);
    }

    function makeFormDateInput() {
        const form = document.querySelector("form");
        const inputDate = makeInput({ type: "date", name: "dueDate", required: "true" });
        form.appendChild(inputDate);
    }

    function makeFormPriorityRadioButtonsFieldset() {
        const form = document.querySelector("form");
        const radioButtonsFieldset = makeElement({ elementType: "fieldset" });
        form.appendChild(radioButtonsFieldset);
    }

    function makeFormPriorityLegend() {
        const radioButtonFieldset = document.querySelector("fieldset");
        const priorityLegend = makeElement({ elementType: "legend", textContent: "Priority", title: "priority" });
        radioButtonFieldset.appendChild(priorityLegend);
    }

    function makePriorityInput({ textContent, id, title, value }) {
        const radioButtonFieldset = document.querySelector("fieldset");
        const priorityInputLabel = makeElement({ elementType: "label", textContent, title, attributesAndValues: { "for": id } });
        const priorityInput = makeInput({ type: "radio", id, name: "priority", value, required: "true" });
        radioButtonFieldset.appendChild(priorityInput);
        radioButtonFieldset.appendChild(priorityInputLabel);
    }

    function makeAllPriorityInput() {
        makePriorityInput({ textContent: "Low", id: "lowPriority", title: "low priority", value: "low" });
        makePriorityInput({ textContent: "Medium", id: "mediumPriority", title: "medium priority", value: "medium" });
        makePriorityInput({ textContent: "High", id: "highPriority", title: "high priority", value: "high" });
    }

    function makeFormPriorityInputs() {
        makeFormPriorityRadioButtonsFieldset();
        makeFormPriorityLegend();
        makeAllPriorityInput();
    }

    function makeInputFieldsForNewProject() {
        makeFormTitleInput();
    }

    function makeInputFieldsForNewTask() {
        makeFormTitleInput();
        makeFormDescriptionInput();
        makeFormDateInput();
        makeFormPriorityInputs();
    }

    return {
        makeInputFieldsForNewProject,
        makeInputFieldsForNewTask,
    };

})();

const { makeInputFieldsForNewProject, makeInputFieldsForNewTask } = createFormsElements;

export { makeInputFieldsForNewProject, makeInputFieldsForNewTask };