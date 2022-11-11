import Router from './router/router';

const createPages = container => {
    const home = () => {
        container.innerHTML = 'home page';
    };

    const list = ({ category }) => {
        container.innerHTML = `list ${category} page`;
    };

    const blog = ({ category, post }) => {
        container.innerHTML = `category: ${category}<br> post: ${post}`;
    };

    const notFound = () => {
        container.innerHTML = 'not found';
    };

    return {
        home,
        list,
        blog,
        notFound,
    };
};

const pages = createPages(document.querySelector('main'));
const router = new Router();

router
    .addRoute('/', pages.home)
    .addRoute('/list/:category', pages.list)
    .addRoute('/blog/:category/:post', pages.blog)
    .setNotFound(pages.notFound)
    .start();
