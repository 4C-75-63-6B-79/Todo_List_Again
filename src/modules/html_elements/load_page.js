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

    function makeHomeSectionTitle() {
        const homeSectionContainer = document.getElementById("homeSectionContainer");
        const h2 = makeElement({elementType: "h2", textContent: "Home", title: "Home"});
        homeSectionContainer.appendChild(h2);
    }

    function makeHomeSectionButtonContainer() {
        const homeSectionContainer = document.getElementById("homeSectionContainer");
        const buttonContainer = makeElement({id: "homeButtonContainer"});
        homeSectionContainer.appendChild(buttonContainer); 
    }

    function makeHomeButtonsAndIndicatorContainer() {
        const homeButtonContainer = document.getElementById("homeButtonContainer");
        const containerNames = ["allTasks", "todaysTasks", "next7daysTasks", "importantTasks"];

        containerNames.forEach((containerName) => {
            const container = makeElement({id: `${containerName}ButtonIndicatorContainer`, classNames: "buttonIndicatorContainer"});
            homeButtonContainer.appendChild(container);
        });
    }

    function makeProjectSectionContainer() {
        const verticalNav = document.querySelector("nav");
        const projectSectionContainer = makeElement({id: "projectSectionContainer"});
        verticalNav.appendChild(projectSectionContainer);
    }

    function makeProjectSectionTitle() {
        const projectSectionContainer = document.getElementById("projectSectionContainer");
        const h2 = makeElement({elementType: "h2", textContent: "Projects", title: "Projects"});
        projectSectionContainer.appendChild(h2);
    }

    function makeProjectSectionButtonContainer() {
        const projectSectionContainer = document.getElementById("projectSectionContainer");
        const buttonContainer = makeElement({id: "projectSectionButtonContainer"});
        projectSectionContainer.appendChild(buttonContainer);
    }

    function loadFirstPage() {
        makeToDoListContainer();

        // making the big elements 
        makeHeader();
        makeVerticalNav();
        makeMain();

        // populating the header
        makeMenuOpenCloseButton();
        makeTitle();
        makeDarkLightModeToggle();

        // populating the nav
        makeHomeSectionContainer();
        makeProjectSectionContainer();

        // populating the homeSection
        makeHomeSectionTitle();
        makeHomeSectionButtonContainer();
        makeHomeButtonsAndIndicatorContainer();

        // populating the project section
        makeProjectSectionTitle();
        makeProjectSectionButtonContainer();
    }

    return {
        loadFirstPage,
    }
})();

const {loadFirstPage} = firstPage;
export default loadFirstPage;