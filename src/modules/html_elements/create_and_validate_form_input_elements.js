import { makeInput } from "./html_create_function";

const createFormsElements = (function initFromElements() {

    function makeFromTitleInput() {
        const form = document.querySelector("form");
        const inputTitle = makeInput({type: "name", name: "title", minLength: "3", maxLength: "50", placeholder: "Title", required: "true"});
        form.appendChild(inputTitle);
    }

    function makeFromDescriptionInput() {
        const form = document.querySelector("form");
        const inputDescription = makeInput({type: "text", name: "description", minLength: "20", maxLength: "80", placeholder: "Task Description", required: "true"});
        form.appendChild(inputDescription);
    }

})();