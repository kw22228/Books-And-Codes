export default class Router {
    ROUTE_PARAMETER_REGEX = /:(\w+)/g;
    URL_FRAGMENT_REGEX = '([^\\/]+)';
    #routes;
    #notFound;

    constructor() {
        this.#routes = [];
    }

    addRoute(route, view) {
        const params = [];
        const parsedRoute = route
            .replace(this.ROUTE_PARAMETER_REGEX, (match, paramName) => {
                params.push(paramName);

                return this.URL_FRAGMENT_REGEX; // 경로 파라미터를 ([^\\/]+)로 치환
            })
            .replace(/\//g, '\\/'); // / -> \/ 로 변환 (/를 정규식 처리 해주기위함)

        this.#routes.push({
            testRegExp: new RegExp(`^${parsedRoute}$`),
            view,
            params,
        });

        return this;
    }

    extractURLParams(route, pathName) {
        if (route.params.length === 0) return {};

        const matches = pathName.match(route.testRegExp);
        matches.shift();

        const params = {};
        matches.forEach((paramsValue, index) => {
            const paramName = route.params[index];

            params[paramName] = paramsValue;
        });

        return params;
    }

    setNotFound(callback) {
        this.#notFound = callback;
        return this;
    }

    checkRoutes() {
        const path = window.location.pathname;
        const currentRoute = this.#routes.find(({ testRegExp }) => testRegExp.test(path));

        if (!currentRoute) {
            this.#notFound();
            return;
        }

        const urlParams = this.extractURLParams(currentRoute, path);

        currentRoute.view(urlParams);
    }

    start() {
        // button[data-navigate] 클릭
        window.addEventListener('click', ({ target }) => {
            if (target.matches('button[data-navigate]')) {
                const { navigate } = target.dataset;

                history.pushState({}, '', navigate);

                this.checkRoutes();
            }
        });

        //앞으로가기, 뒤로가기
        window.addEventListener('popstate', () => this.checkRoutes);

        //페이지 로딩
        this.checkRoutes();

        return this;
    }
}
