const ROUTE_PARAMETER_REGEX = /:(\w+)/g; // :post 같은 파라미터
const URL_FRAGMENT_REGEX = '([^\\/]+)';

const createRouter = () => {
    const routes = [];
    let notFound = () => {};

    function addRoute(route, view) {
        const params = [];
        const parsedRoute = route
            .replace(ROUTE_PARAMETER_REGEX, (match, paramName) => {
                params.push(paramName);

                return URL_FRAGMENT_REGEX;
            })
            .replace(/\//g, '\\/');

        routes.push({
            testRegExp: new RegExp(`^${parsedRoute}$`),
            view,
            params,
        });

        return this;
    }

    const extractURLParams = (route, pathName) => {
        if (route.params.length === 0) return {};

        const matches = pathName.match(route.testRegExp);

        matches.shift();

        const params = {};
        matches.forEach((paramsValue, index) => {
            const paramName = route.params[index];

            params[paramName] = paramsValue;
        });

        return params;
    };

    function setNotFound(cb) {
        notFound = cb;
        return this;
    }

    function checkRoutes() {
        const path = window.location.pathname;
        const currentRoute = routes.find(({ testRegExp }) => testRegExp.test(path));
        if (!currentRoute) {
            notFound();
            return;
        }

        const urlParams = extractURLParams(currentRoute, path);
        console.log(currentRoute, urlParams);

        currentRoute.view(urlParams);
    }

    function start() {
        //navigate 버튼 클릭
        window.addEventListener('click', event => {
            const { target } = event;

            if (target.matches('button[data-navigate]')) {
                const { navigate } = target.dataset;

                history.pushState({}, '', navigate);
                checkRoutes();
            }
        });

        //앞으로가기, 뒤로가기
        window.addEventListener('popstate', () => {
            console.log('popstate');
            checkRoutes();
        });

        //페이지 로딩
        checkRoutes();

        return this;
    }

    return { addRoute, setNotFound, checkRoutes, start };
};

export default createRouter;
