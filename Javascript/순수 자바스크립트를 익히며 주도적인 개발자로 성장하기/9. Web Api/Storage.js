if (typeof Storage !== 'undefined') {
    localStorage.setItem('title', 'javascript study with book');
}

const data = localStorage.getItem('title');

console.log(data);

localStorage.removeItem('title');
