function saveToLocalStorage(event){
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;

  //  localStorage.setItem("name",name)
    //localStorage.setItem("email",email)

    const obj = {name,email}
    localStorage.setItem(obj.email,JSON.stringify(obj))

    showNewUserOnScreen(obj)
}
function showNewUserOnScreen(user){
    const parentNode = document.getElementById('my-form')
    const childHTML = `<li id=${user.name}>${user.email}--->${user.name}
    <button onclick = deleteUser('${user.name}')>Delete</button>
    <button onclick = editUser('${user.name}','${user.email}')>Edit</button>
    </li>`

    parentNode.innerHTML = parentNode.innerHTML+childHTML
}
function deleteUser(name){
console.log(name);
localStorage.removeItem(name)
removeUserFromScreen(name)
}

function removeUserFromScreen(name){
    const parentNode = document.getElementById('my-form')
    const childNodeToDeleted = document.getElementById(name)

    parentNode.removeChild(childNodeToDeleted)
}
function editUser(name,email){
    document.getElementById('name').value=name;
    document.getElementById('email').value=email;

    deleteUser(name)
}