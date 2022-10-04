const DOMAIN = 'http://localhost:3000/';
const method = 'POST';
const type = 'posts';

const url = DOMAIN + type;

const data = {
    title: 'The Great',
    author: 'Jeremy',
};
function fetchData(url, method, data) {
    fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log(e));
}

fetchData(url, method, data);
