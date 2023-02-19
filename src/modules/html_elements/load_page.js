import { makeElement } from "./html_create_function";

const firstPage = (function initFirstPage() {
    function makeMain() {
        const body = document.querySelector('body');
        const main = makeElement({elementType: 'main'});
        body.appendChild(main);
    }

    function makeHeader() {
        const main = document.querySelector('main');
        const header = makeElement({elementType: 'header'});
        main.appendChild(header);
    }

    function loadFirstPage() {
        makeMain();
        makeHeader();
    }

    return {
        loadFirstPage,
    }
})();

const {loadFirstPage} = firstPage;
export default loadFirstPage;