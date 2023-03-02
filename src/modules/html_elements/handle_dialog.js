import { makeButton, makeElement } from "./html_create_function";

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

    function makeNewProjectDialog() {
        const body = document.querySelector("body");
        const addNewProjectDialog = makeElement({id: "addNewProject"});
        body.appendChild(addNewProjectDialog);
    }

    function makeHeaderInDialog() {
        const dialog = document.querySelector("dialog");
        const header = makeElement({elementType: "header", id:"dialogHeader"});
        dialog.appendChild(header);
    }

    function makeTitleInDialog() {
        const header = document.getElementById("dialogHeader");
        const h2Title = makeElement({elementType: "h2", textContent: "Create New Project.", title: "Create New Project"});
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

})();