// console.log('---- XHR setting start ----');

// const xhr = new XMLHttpRequest();
// const url = 'https://jsonplaceholder.typicode.com/posts';

// GET
// xhr.open('GET', url + '/1');
// xhr.setRequestHeader('content-type', 'application/json');
// xhr.send();

// console.log('---- XHR setting end ----');

// xhr.onload = function () {
//     if (xhr.status === 200) {
//         const response = JSON.parse(xhr.response);

//         console.log(response);
//     } else {
//         console.error(xhr.status, xhr.statusText);
//     }
// };

//POST
// xhr.open('POST', url);
// xhr.setRequestHeader('content-type', 'application/json;charset=UTF-8');
// const data = {
//     title: 'test title',
//     body: 'hello test',
//     userId: 20000,
// };
// xhr.send(JSON.stringify(data));

// xhr.onload = function () {
//     if (xhr.status === 201) {
//         const response = JSON.parse(xhr.response);

//         console.log(response);
//     } else {
//         console.error(xhr.status, xhr.statusText);
//     }
// };

function getData(url, method) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            const response = JSON.stringify(xhr.response);
            return response;
        } else {
            console.error(xhr.status, xhr.statusText);
            return;
        }
    };
}

const url = 'https://jsonplaceholder.typicode.com/posts';
const method = 'GET';

getData(url, method);
