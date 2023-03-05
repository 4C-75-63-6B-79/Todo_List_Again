import { makeNewProjectDialog, makeNewTaskDialog } from "./handle_dialog";
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
        const containerNames = ["allTasks", "todaysTasks", "nextWeeksTasks", "importantTasks"];

        containerNames.forEach((containerName) => {
            const container = makeElement({id: `${containerName}ButtonIndicatorContainer`, classNames: "buttonIndicatorContainer"});
            homeButtonContainer.appendChild(container);
        });
    }

    function makeHomeButtons() {
        const buttonsProps = [
            { buttonName: "allTasks", textContent: "All Tasks" },
            { buttonName: "todaysTasks", textContent: "Today's tasks" },
            { buttonName: "nextWeeksTasks", textContent: "Next Week's Tasks" },
            { buttonName: "importantTasks", textContent: "Important Tasks" },
        ];

        buttonsProps.forEach(({buttonName, textContent}) => {
            const buttonContainer = document.getElementById(`${buttonName}ButtonIndicatorContainer`);
            const button = makeButton({id: `${buttonName}Button`, classNames: "homeButton", textContent, title: `${textContent} button`});
            buttonContainer.appendChild(button);
        });
    }

    function makeHomeButtonsIndicator() {
        const indicatorProps = [
            { containerName: "allTasks", title: "0 tasks left under All Tasks" },
            { containerName: "todaysTasks", title: "0 tasks left under Today's tasks" },
            { containerName: "nextWeeksTasks", title: "0 tasks left under Next Week's Tasks" },
            { containerName: "importantTasks", title: "0 tasks left under Important Tasks" },
        ];

        indicatorProps.forEach(({containerName, title}) => {
            const buttonContainer = document.getElementById(`${containerName}ButtonIndicatorContainer`);
            const indicator = makeElement({id: `${containerName}LeftIndicator`, classNames: "tasksLeftIndicator", textContent: "0", title});
            buttonContainer.appendChild(indicator);
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

    function addNewProjectButtonClicked() {
        makeNewProjectDialog();
    }

    function makeAddNewProjectButton() {
        const projectSectionContainer = document.getElementById("projectSectionContainer");
        const addNewProjectButton = makeButton({id: "addNewProject", textContent: "+ Add a New Project", title: "Add A New Project", event: "click", callBackFunction: [addNewProjectButtonClicked]});
        projectSectionContainer.appendChild(addNewProjectButton);
    }

    function makeHeaderForMain() {
        const main = document.querySelector("main");
        const header = makeElement({elementType: "header", id: "tasksCategoryProjectTitle"});
        main.appendChild(header);
    }

    function makeTitleForMainHeader() {
        const header = document.getElementById("tasksCategoryProjectTitle");
        const title = makeElement({elementType: "h2", id: "categoryProjectTitle", textContent: "All Tasks", title: "All Tasks"});
        header.appendChild(title);
    }

    function makeTasksContainerInMain() {
        const main = document.querySelector("main");
        const tasksContainer = makeElement({id: "tasksContainer"});
        main.appendChild(tasksContainer);
    }

    function addNewTaskButtonClicked() {
        makeNewTaskDialog();
    }

    function makeAddNewTaskButton() {
        const main = document.querySelector("main");
        const addNewTaskButton = makeButton({id: "addNewTask", textContent: "+ Add New Tasks", title: "Add New Task Button", event: "click", callBackFunction: [addNewTaskButtonClicked]});
        main.appendChild(addNewTaskButton);
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
        makeHomeButtons();
        makeHomeButtonsIndicator();

        // populating the project section
        makeProjectSectionTitle();
        makeProjectSectionButtonContainer();
        makeAddNewProjectButton();

        // populating the main
        makeHeaderForMain();
        makeTitleForMainHeader();
        makeTasksContainerInMain();
        makeAddNewTaskButton();
    }

    return {
        loadFirstPage,
    };
})();

const {loadFirstPage} = firstPage;
export default loadFirstPage;