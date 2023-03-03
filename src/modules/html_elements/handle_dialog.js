import { makeButton, makeElement } from "./html_create_function";

const createDialogs = (function initDialogs() {

    function makeNewDialog({dialogFor}) {
        const body = document.querySelector("body");
        const addNewProjectDialog = makeElement({elementType: "dialog", id: `addNew${dialogFor}dialog`});
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
    
    function removeDialog() {
        const body = document.querySelector("body");
        const dialog = document.querySelector("dialog");
        body.removeChild(dialog);
    }

    function closeButtonClicked() {
        removeDialog();
    }

    function makeCloseButtonInDialog() {
        const header = document.getElementById("dialogHeader");
        const closeButton = makeButton({id: "closeButtonInDialog", textContent: "X", title: "Close Dialog Button", event: "click", callBackFunction: [closeButtonClicked]});
        header.appendChild(closeButton);
    }

    function makeFormInDialog() {
        const dialog = document.querySelector("dialog");
        const form = makeElement({elementType: "form", attributesAndValues: {"method": "dialog"}});
        dialog.appendChild(form);
    }

    function createButtonClicked(event) {
        event.preventDefault();
        removeDialog();
    }

    function makeFormSubmitButton({buttonTextcontent}) {
        const form = document.querySelector("form");
        const submitButton = makeButton({textContent: buttonTextcontent, title: `Confirm ${buttonTextcontent} Button`, attributesAndValues: {"type": "submit"}, event: "click", callBackFunction: [createButtonClicked]});
        form.appendChild(submitButton);
    }

    function showDialog() {
        const dialog = document.querySelector("dialog");
        dialog.showModal();
    }


    function makeNewProjectDialog() {
        makeNewDialog({dialogFor: "Project"});
        makeHeaderInDialog();
        makeTitleInDialog({ dialogTitle: "Create New Project."})
        makeCloseButtonInDialog();
        makeFormInDialog();
        makeFormSubmitButton({buttonTextcontent: "Create Project"});
        showDialog();
    }

    return {
        makeNewProjectDialog,
    }
})();

const { makeNewProjectDialog } = createDialogs;

export default makeNewProjectDialog;