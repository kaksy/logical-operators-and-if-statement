let url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url)
.then(res => res.json())
.then(data => {
    let posts = [];
    posts = data.slice(7,12);
    console.log(posts);


    let text = posts.map(post => { 
        return `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        `
    });
    document.getElementById('div').innerHTML = text
})

// let user = { 
//     name:'ann',
//     age:23
// }
// localStorage.setItem('chioma',JSON.stringify(user))
// let data = localStorage.getItem('chioma')
// console.log(data);
// let usere = JSON.parse(data);
// console.log(usere);