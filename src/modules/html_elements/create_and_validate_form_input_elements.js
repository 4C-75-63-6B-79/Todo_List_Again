import { makeInput } from "./html_create_function";

const createFormsElements = (function initFormElements() {

    function makeFormTitleInput() {
        const form = document.querySelector("form");
        const inputTitle = makeInput({type: "name", name: "title", minLength: "3", maxLength: "50", placeholder: "Title", required: "true"});
        form.appendChild(inputTitle);
    }

    function makeFormDescriptionInput() {
        const form = document.querySelector("form");
        const inputDescription = makeInput({type: "text", name: "description", minLength: "20", maxLength: "80", placeholder: "Task Description", required: "true"});
        form.appendChild(inputDescription);
    }

    function makeFormDateInput() {
        const form = document.querySelector("form");
        const inputDate = makeInput({type: "date", name: "dueDate", required: "true"});
        form.appendChild(inputDate);
    }

})();