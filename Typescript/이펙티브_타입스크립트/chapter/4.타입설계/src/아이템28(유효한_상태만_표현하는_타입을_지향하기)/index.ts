(function () {
    interface State {
        pageText: string;
        isLoading: boolean;
        error?: string;
    }

    function renderPage(state: State) {
        if (state.error) return `Error! Unable to load CurrentPage: ${state.error}`;
        else if (state.isLoading) return `Loading CurrentPage`;
        else return /*html*/ `<h1>CurrentPage</h1>\n${state.pageText}`;
    }

    async function changePage(state: State, newPage: string) {
        state.isLoading = true;
        try {
            const response = await fetch('url');
            if (!response.ok) {
                throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
            }

            const text = await response.text();
            state.isLoading = false;
            state.pageText = text;
        } catch (e) {
            state.error = '' + e;
        }
    }
    /*
        위함수는 오류가있다.
        1. 오류가 발생했을때 state.isLoading을 false로 설정하는 로직이 빠져있음.
        2. state.error를 초기화하지 않았기 때문에 페이지 전환중에 로딩메세지 대신 과거의 오류 메세지를 보여줄 수 있다.
        3. 페이지로딩중에 또 페이지를 바꾸면 무슨일이 벌어질지 예상 할 수 없다.
    */

    ///////////////////////////////////////////////////////////

    interface RequestPending {
        state: 'pending';
    }
    interface RequestError {
        state: 'error';
        error: string;
    }
    interface RequestSuccess {
        state: 'ok';
        pageText: string;
    }
    type RequestState = RequestPending | RequestError | RequestSuccess;

    interface StateRefactor {
        currentPage: string;
        requests: {
            [page: string]: RequestState;
        };
    }

    function renderPageRefactor(state: StateRefactor) {
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

    async function changePageRefactor(state: StateRefactor, newPage: string) {
        state.requests[newPage] = { state: 'pending' };
        state.currentPage = newPage;

        try {
            const response = await fetch('url');
            if (!response.ok) {
                throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
            }

            const pageText = await response.text();
            state.requests[newPage] = { state: 'ok', pageText };
        } catch (e) {
            state.requests[newPage] = { state: 'error', error: '' + e };
        }
    }

    //////////////////////////////////////////////////////////
    interface CockPitControls {
        leftSideStick: number; //왼쪽 사이드 스틱의 각도, 0 = 중립, + = 앞으로
        rightSideStick: number; //오른쪽 사이드 스틱의 각도, 0 = 중립, + = 앞으로
    }

    function getStickSetting(controls: CockPitControls) {
        const { leftSideStick, rightSideStick } = controls;
        if (leftSideStick === 0) {
            return rightSideStick;
        } else if (rightSideStick === 0) {
            return leftSideStick;
        }

        if (Math.abs(leftSideStick - rightSideStick) < 5) {
            return (leftSideStick + rightSideStick) / 2;
        }
    }
})();
