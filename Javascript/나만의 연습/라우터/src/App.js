import createRouter from './router';

const createPages = container => {
    const home = () => {
        container.innerHTML = 'home page';
    };
    const list = () => {
        container.innerHTML = 'list page';
    };
    const notFound = () => {
        container.innerHTML = 'not found';
    };

    return { home, list, notFound };
};

const container = document.querySelector('main');
const pages = createPages(container);

const router = createRouter();
router //
    .addRoute('/', pages.home)
    .addRoute('/list', pages.list)
    .setNotFound(pages.notFound)
    .start();
