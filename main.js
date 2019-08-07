let database = firebase.database().ref();
let center = document.querySelector(".center");
let username = document.querySelector(".nameInput");
let message = document.querySelector(".postInput");
let createPost = document.querySelector("#createPost");
let post = document.querySelector("#post");
//createPost.addEventListener('click', createPost)utton.addEventListener('click', center)
console.log(post);

try {
    post.addEventListener("click", updateDB);
} catch {

}

// let window.location = 'index.html'
function updateDB(event) {
    event.preventDefault();
    let name = username.value;
    let text = message.value;

    console.log(name + " : " + text);

    username.value = "";
    message.value = "";


    let value = {
        NAME: name,
        MESSAGE: text
    }

    database.push(value);
}

database.on('child_added', addMessage);


function addMessage(data) {
    let msgContainer = document.querySelector(".center");
    console.log(msgContainer);
    let row = data.val();
    let name = row.NAME;
    let message = row.MESSAGE;

    let p = document.createElement('p');
    p.innerText = `${name} : ${message}`;
    msgContainer.appendChild(p);
}