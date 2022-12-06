function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    const obj = {name,email}
    localStorage.setItem('userDetails', JSON.stringify(obj))
}