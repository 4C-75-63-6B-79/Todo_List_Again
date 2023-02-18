import { makeElement } from "./html_create_function";

const firstPage = (function initFirstPage() {
    function makeMain() {
        const body = document.querySelector('body');
        const main = makeElement({elementType: 'main'});
        body.appendChild(main);
    }

    function loadFirstPage() {
        makeMain();
    }

    return {
        loadFirstPage,
    }
})();

const {loadFirstPage} = firstPage;
export default firstPage;