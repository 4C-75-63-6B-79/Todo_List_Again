import { makeElement, makeInput } from "./html_create_function";

const createFormsElements = (function initFormElements() {

    function makeFormTitleInput() {
        const form = document.querySelector("form");
        const inputTitle = makeInput({type: "text", name: "title", minLength: "5", maxLength: "40",  size: "40",  placeholder: "Title", required: "true"});
        form.appendChild(inputTitle);
    }

    function makeFormDescriptionInput() {
        const form = document.querySelector("form");
        const inputDescription = makeElement({elementType: "textarea", attributesAndValues: {
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
        const inputDate = makeInput({type: "date", name: "dueDate", required: "true"});
        form.appendChild(inputDate);
    }

    function makeFormPriorityRadioButtonsFieldset() {
        const form = document.querySelector("form");
        const radioButtonsFieldset = makeElement({elementType: "fieldset"});
        form.appendChild(radioButtonsFieldset);
    }

    function makeFormPriorityLegend() {
        const radioButtonFieldset = document.querySelector("fieldset");
        const priorityLegend = makeElement({elementType: "legend", textContent: "Priority", title: "priority"});
        radioButtonFieldset.appendChild(priorityLegend);
    }

    function makeFromLowPriorityInput() {
        const radioButtonFieldset = document.querySelector("fieldset");
        const lowPriorityLabel = makeElement({elementType: "label", textContent: "Low", title: "low priority", attributesAndValues: {"for": "lowPriority"} })
        const lowPriorityInput = makeInput({type: "radio", id: "lowPriority", name: "priority", value: "low", required: "true"});
        lowPriorityLabel.appendChild(lowPriorityInput);
        radioButtonFieldset.appendChild(lowPriorityLabel);
    }

    function makeFromMediumPriorityInput() {
        const radioButtonFieldset = document.querySelector("fieldset");
        const mediumPriorityLabel = makeElement({elementType: "label", textContent: "Medium", title: "medium priority", attributesAndValues: {"for": "mediumPriority"} })
        const mediumPriorityInput = makeInput({type: "radio", id: "mediumPriority", name: "priority", value: "medium", required: "true"});
        mediumPriorityLabel.appendChild(mediumPriorityInput);
        radioButtonFieldset.appendChild(mediumPriorityLabel);
    }

    function makeFromHighPriorityInput() {
        const radioButtonFieldset = document.querySelector("fieldset");
        const highPriorityLabel = makeElement({elementType: "label", textContent: "High", title: "high priority", attributesAndValues: {"for": "highPriority"} })
        const highPriorityInput = makeInput({type: "radio", id: "highPriority", name: "priority", value: "high", required: "true"});
        highPriorityLabel.appendChild(highPriorityInput);
        radioButtonFieldset.appendChild(highPriorityLabel);
    }

    function makeFormPriorityInputs() {
        makeFormPriorityRadioButtonsFieldset();
        makeFormPriorityLegend();
        makeFromLowPriorityInput();
        makeFromMediumPriorityInput();
        makeFromHighPriorityInput();
    }

    function makeInputFieldsForNewProject() {
        makeFormTitleInput();
    }

    return {
        makeInputFieldsForNewProject,
    }

})();

const { makeInputFieldsForNewProject } = createFormsElements;

export default makeInputFieldsForNewProject;