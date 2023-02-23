import { makeElement, makeInput, makeButton } from "./html_create_function";

const firstPage = (function initFirstPage() {
    
    function makeToDoListContainer() {
        const body = document.querySelector("body");
        const toDoListContainer = makeElement({id: "mainContainer"});
        body.appendChild(toDoListContainer);
    }

    function makeHeader() {
        const mainContainer = document.getElementById("mainContainer");
        const header = makeElement({elementType: "header"});
        mainContainer.appendChild(header);
    }

    function makeVerticalNav() {
        const mainContainer = document.getElementById("mainContainer");
        const verticalNav = makeElement({elementType: "nav"});
        mainContainer.appendChild(verticalNav);
    }

    function makeMain() {
        const mainContainer = document.getElementById("mainContainer");
        const main = makeElement({elementType: "main"});
        mainContainer.appendChild(main);
    }

    function makeMenuOpenCloseButton() {
        const header = document.querySelector("header");
        const menuOpenCloseButton = makeButton({type: "button", id: "menuOpenCloseButton", textContent: "Menu", title: "menu button"});
        header.appendChild(menuOpenCloseButton);
    }

    function makeTitle() {
        const header = document.querySelector("header");
        const h1Title = makeElement({elementType: "h1", textContent: "To Do List", title: "To Do List"});
        header.appendChild(h1Title);
    }

    function makeDarkLightModeToggle() {
        const header = document.querySelector("header");
        const darkLightModeToggle = makeInput({type: "checkbox", id:"darkLightModeToggle", value: "dark"});
        header.appendChild(darkLightModeToggle);
    }

    function makeHomeSectionContainer() {
        const verticalNav = document.querySelector("nav");
        const homeSectionContainer = makeElement({id: "homeSectionContainer"});
        verticalNav.appendChild(homeSectionContainer);
    }

    function makeProjectSectionContainer() {
        const verticalNav = document.querySelector("nav");
        const projectSectionContainer = makeElement({id: "projectSectionContainer"});
        verticalNav.appendChild(projectSectionContainer);
    }

    function loadFirstPage() {
        makeToDoListContainer();
        makeHeader();
        makeVerticalNav();
        makeMain();
        makeMenuOpenCloseButton();
        makeTitle();
        makeDarkLightModeToggle();
        makeHomeSectionContainer();
        makeProjectSectionContainer();
    }

    return {
        loadFirstPage,
    }
})();

const {loadFirstPage} = firstPage;
export default loadFirstPage;