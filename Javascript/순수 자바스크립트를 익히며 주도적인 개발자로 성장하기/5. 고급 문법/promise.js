// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('success');
//     } else {
//         reject(new Error('error!!'));
//     }
// });

function getDataPromise(url, method) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = xhr.response;
                const data = JSON.parse(response);

                resolve(data);
            } else {
                reject(new Error(`${xhr.status} ${xhr.statusText}`));
            }
        };
    });
}

const url = 'https://jsonplaceholder.typicode.com/posts';
const method = 'GET';

getDataPromise(url, method)
    .then(data => {
        console.log(data);
        console.log('Next Code');
    })
    .catch(e => console.error(e));
