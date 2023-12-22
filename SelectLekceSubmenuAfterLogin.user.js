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

    // Function to select the Lekce submenu
    function selectLekceSubmenu() {
        // Wait for the page to load
        window.addEventListener('load', () => {
            // Select the Lekce submenu
            // We are using the href attribute to precisely select the 'Lekce' link
            const lekceMenu = document.querySelector('a[href="detail_lide.php?zalozka=lekce"]');
            if (lekceMenu) {
                lekceMenu.click();
            }
        });
    }

    // Check if the user is logged in
    // Implement the actual logic to determine if the user is logged in
    // This example uses a placeholder function and should be replaced with actual logic
    const isLoggedIn = () => {
        // Replace with actual logic to determine if the user is logged in
        // For example, you might check for a specific cookie or a user profile element
        return document.cookie.includes('loggedIn=true'); // Placeholder
    };

    // If the user is logged in, select the Lekce submenu
    if (isLoggedIn()) {
        selectLekceSubmenu();
    }
})();
