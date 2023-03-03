import { makeButton, makeElement, makeInput } from "./html_create_function";

const createDialogs = (function initDialogs() {

    // const body = document.querySelector("body");
    // const dialog = makeElement({elementType: "dialog", id: "addNewProjectDialog"});
    // const h2 = makeElement({elementType: "h2", textContent: "Create A New Project", title: "Create A New Project"});
    // const form = makeElement({elementType: "form", attributesAndValues: { "method": "dialog"}});
    // const button = makeButton({attributesAndValues: {"type": "submit"}});
    // dialog.appendChild(h2);
    // form.appendChild(button);
    // dialog.appendChild(form);
    // body.appendChild(dialog);
    // dialog.showModal();

    function makeNewDialog({dialogFor}) {
        const body = document.querySelector("body");
        const addNewProjectDialog = makeElement({id: `addNew${dialogFor}dialog`});
        body.appendChild(addNewProjectDialog);
    }

    function makeHeaderInDialog() {
        const dialog = document.querySelector("dialog");
        const header = makeElement({elementType: "header", id:"dialogHeader"});
        dialog.appendChild(header);
    }

    function makeTitleInDialog({dialogTitle}) {
        const header = document.getElementById("dialogHeader");
        const h2Title = makeElement({elementType: "h2", textContent: dialogTitle, title: dialogTitle});
        header.appendChild(h2Title);
    }

    function makeCloseButtonInDialog() {
        const header = document.getElementById("dialogHeader");
        const closeButton = makeButton({id: "closeButtonInDialog", textContent: "X", title: "Close Dialog Button"});
        header.appendChild(closeButton);
    }

    function makeFormInDialog() {
        const dialog = document.querySelector("dialog");
        const form = makeElement({elementType: "form", attributesAndValues: {"method": "dialog"}});
        dialog.appendChild(form);
    }

    function makeTextInputForTitle() {
        const form = document.querySelector("form");
        const textInputForTitle = makeInput({type: "text", name: "name", minLength: "4", maxLength: "50", placeholder: "Project Title", required: "true"});
        form.appendChild(textInputForTitle);
    }

    function makeFormSubmitButton({buttonTextcontent}) {
        const form = document.querySelector("form");
        const submitButton = makeButton({textContent: buttonTextcontent, title: `Confirm ${buttonTextcontent} Button`, attributesAndValues: {"type": "submit"}});
        form.appendChild(submitButton);
    }



})();