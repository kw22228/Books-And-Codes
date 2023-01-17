"use strict";
(function () {
    function renderPage(state) {
        if (state.error)
            return `Error! Unable to load CurrentPage: ${state.error}`;
        else if (state.isLoading)
            return `Loading CurrentPage`;
        else
            return /*html*/ `<h1>CurrentPage</h1>\n${state.pageText}`;
    }
    async function changePage(state, newPage) {
        state.isLoading = true;
        try {
            const response = await fetch('url');
            if (!response.ok) {
                throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
            }
            const text = await response.text();
            state.isLoading = false;
            state.pageText = text;
        }
        catch (e) {
            state.error = '' + e;
        }
    }
    function renderPageRefactor(state) {
        const { currentPage } = state;
        const requestState = state.requests[currentPage];
        switch (requestState.state) {
            case 'pending':
                return `Loading ${currentPage}...`;
            case 'error':
                return `Error! Unable to load ${currentPage}: ${requestState}`;
            case 'ok':
                return /* html */ `<h1>${currentPage}</h1>\n ${requestState.pageText}`;
        }
    }
    async function changePageRefactor(state, newPage) {
        state.requests[newPage] = { state: 'pending' };
        state.currentPage = newPage;
        try {
            const response = await fetch('url');
            if (!response.ok) {
                throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
            }
            const pageText = await response.text();
            state.requests[newPage] = { state: 'ok', pageText };
        }
        catch (e) {
            state.requests[newPage] = { state: 'error', error: '' + e };
        }
    }
    function getStickSetting(controls) {
        const { leftSideStick, rightSideStick } = controls;
        if (leftSideStick === 0) {
            return rightSideStick;
        }
        else if (rightSideStick === 0) {
            return leftSideStick;
        }
        if (Math.abs(leftSideStick - rightSideStick) < 5) {
            return (leftSideStick + rightSideStick) / 2;
        }
    }
})();
