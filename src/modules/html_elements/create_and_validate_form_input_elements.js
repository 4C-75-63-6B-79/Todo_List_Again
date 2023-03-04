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

})();