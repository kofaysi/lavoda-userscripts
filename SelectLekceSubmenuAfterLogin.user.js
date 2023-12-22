// ==UserScript==
// @name         Auto-select Lekce Submenu at Lavoda
// @namespace    https://github.com/kofaysi/
// @version      0.1
// @description  Automatically selects the 'Lekce' submenu after login at https://lavoda.auksys.cz/master/
// @author       Milan Berta
// @match        https://lavoda.auksys.cz/master/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to redirect to the Lekce submenu
    function redirectToLekce() {
        const currentUrl = window.location.href;
        const targetUrl = 'https://lavoda.auksys.cz/master/detail_lide.php?zalozka=lekce';

        if (currentUrl === 'https://lavoda.auksys.cz/master/') {
            window.location.href = targetUrl;
        }
    }

    // Call the redirect function
    redirectToLekce();
})();
