const url = "http://localhost/3000/users/";

const formSignUP = () => {
    let add = myInput()
    newUser(add)

}

const myInput = () => {
    let email = document.getElementById("email-user");
    let pw = document.getElementById("pw");
    let result = {
        "email": email.value,
        "password": pw.value
    }
    return result
}
const newUser = add => {
    const option = {
        method: "POST",
        body: JSON.stringify(add),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
    return fetch(url + 'signup', option)
        .then((res) => console.log('registrasi telah sukses'))
}