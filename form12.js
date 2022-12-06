function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    //localStorage.setItem('name', name);
    //localStorage.setItem('email', email);

    const obj = {name,email}
    localStorage.setItem(obj.email, JSON.stringify(obj));

    showNewUserOnScreen(obj);
}

function showNewUserOnScreen (user) {
    const parentNode = document.getElementById('ListOfUsers');
    const childHTML = `<li> ${user.name} --> ${user.email} </li>`

    parentNode.innerHTML = parentNode.innerHTML+childHTML;
}