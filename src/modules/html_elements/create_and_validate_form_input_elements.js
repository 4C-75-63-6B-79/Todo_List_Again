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

    function makeFormPriorityInput() {

        
        const mediumPriorityInput = makeInput({type: "radio", name: "priority", value: "medium"});
        const highPriorityInput = makeInput({type: "radio", name: "priority", value: "high"});
        radioButtonFieldset.appendChild(lowPriorityInput);
        radioButtonFieldset.appendChild(mediumPriorityInput);
        radioButtonFieldset.appendChild(highPriorityInput);
    }

})();