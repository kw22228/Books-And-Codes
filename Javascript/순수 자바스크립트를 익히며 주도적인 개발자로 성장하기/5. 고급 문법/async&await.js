const url = 'https://jsonplaceholder.typicode.com/posts';
const method = 'GET';

// function promiseFetch(url, method) {
//     fetch(url, { method })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);

//             const fetchData = {
//                 id: 1,
//                 title: 'title test',
//                 body: 'body test',
//                 userId: '20000',
//             };
//             fetch(url + data.userId, {
//                 method: 'PUT',
//                 body: JSON.stringify(fetchData),
//                 headers: {
//                     'content-type': 'application/json; charset=UTF-8',
//                 },
//             })
//                 .then(response => response.json())
//                 .then(data => console.log(data));
//         });
// }

async function asyncFetch(url, method) {
    const res1 = await fetch(url);
    const res1Data = await res1.json();

    console.log(res1Data);

    const fetchData = {
        id: 1,
        title: 'title test',
        body: 'body test',
        userId: '20000',
    };
    const res2 = await fetch(url + '/1', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(fetchData),
    });
    const res2Data = await res2.json();
    console.log(res2Data);
}
