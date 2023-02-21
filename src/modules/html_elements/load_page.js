import { makeElement } from "./html_create_function";

const firstPage = (function initFirstPage() {
    
    function makeToDoListContainer() {
        const body = document.querySelector('body');
        const toDoListContainer = makeElement({id: 'mainContainer'});
        body.appendChild(toDoListContainer);
    }

    function makeHeader() {
        const mainContainer = document.getElementById('mainContainer');
        const header = makeElement({elementType: 'header'});
        mainContainer.appendChild(header);
    }

    function makeMain() {
        const mainContainer = document.getElementById('mainContainer');
        const main = makeElement({elementType: 'main'});
        mainContainer.appendChild(main);
    }

    function makeTitle() {
        const header = document.querySelector('header');
        const h1Title = makeElement({elementType: 'h1', textContent: 'To Do List', title: 'To Do List'});
        header.appendChild(h1Title);
    }

    function loadFirstPage() {
        makeToDoListContainer();
        makeHeader();
        makeTitle();
        makeMain();
    }

    return {
        loadFirstPage,
    }
})();

const {loadFirstPage} = firstPage;
export default loadFirstPage;