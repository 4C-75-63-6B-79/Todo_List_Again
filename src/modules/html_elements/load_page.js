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

    function makeTitle() {
        const header = document.querySelector('header');
        const h1Title = makeElement({elementType: 'h1'});
        header.appendChild(h1Title);
    }

    function loadFirstPage() {
        makeMain();
        makeHeader();
        makeTitle();
    }

    return {
        loadFirstPage,
    }
})();

const {loadFirstPage} = firstPage;
export default loadFirstPage;