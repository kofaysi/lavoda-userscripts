// ==UserScript==
// @name         Auto-select Lekce Submenu at Lavoda
// @namespace    https://github.com/kofaysi/lavoda-userscripts/edit/main/SelectLekceSubmenuAfterLogin.user.js
// @version      0.2.3
// @description  Automatically selects the 'Lekce' submenu after login at https://lavoda.auksys.cz/master/
// @author       https://github.com/kofaysi/
// @match        https://lavoda.auksys.cz/master/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to get the base URL from the current URL
    function getBaseUrl(url) {
        const urlParts = url.split('/');
        return urlParts.slice(0, 4).join('/') + '/'; // Gets 'https://domain.com/path/'
    }

    // Function to redirect to the Lekce submenu
    function redirectToLekce(baseUrl) {
        const currentUrl = window.location.href;
        const targetUrl = baseUrl + 'detail_lide.php?zalozka=lekce';

        if (currentUrl === baseUrl) {
            window.location.href = targetUrl;
        }
    }

    // Determine the base URL dynamically
    const baseUrl = getBaseUrl(window.location.href);

    // Call the redirect function
    redirectToLekce(baseUrl);
})();
