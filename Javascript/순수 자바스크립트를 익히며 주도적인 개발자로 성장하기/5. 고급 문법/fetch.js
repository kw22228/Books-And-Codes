const url = 'https://jsonplaceholder.typicode.com/posts';
// const data = {
//     title: 'test title',
//     body: 'hello test',
//     userId: 20000,
// };

fetch(url, {
    method: 'GET',
    headers: {
        'content-type': 'application/json; charset=UTF-8',
    },
    // body: JSON.stringify(data),
})
    .then(res => res.json())
    .then(data => console.log(data));

// let formData = new FormData();
// let fileField = document.querySelector('input[type="file"]');

// formData.append('username', 'kjw');
// formData.append('attachment', fileField.files[0]);
