const url = "http://localhost:3000/users/";


// function signin

let btn2 = document.getElementById('login');
if (btn2) {
    btn2.addEventListener('click', (e) => {
        e.preventDefault()
        console.log("aku di klik")
        let email = document.getElementById('email').value;
        let pw = document.getElementById('pw').value;

        fetch(url + 'signin/' + email)
            .then((res) => res.json())
            .then((data) => {
                if (pw != data.password) {
                    let err = document.getElementById('errPass')
                    err.innerHTML = "password salah";
                    return false;
                } else {
                    window.location.href = "/"
                }
            })
    })
}

// function tambah data user
let btn = document.getElementById("signUp");
if (btn) {
    btn.addEventListener('click', e => {
        e.preventDefault();
        formSignUP()
    })
}
const formSignUP = () => {
    if (validation()) {
        let add = myInput()
        newUser(add)
        resetForm();
        window.location.href = "/signin"

    }


}

const myInput = () => {
    let email = document.getElementById("email-users");
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

const validation = () => {
    let email = document.getElementById("email-users").value;
    let pw = document.getElementById('pw').value
    isvalid = true;
    if (email == "") {
        isvalid = false;
        let err = document.getElementById("errEmail")
        err.innerHTML = "email tidak boleh kosong";
        return false;
    } else {
        isvalid = true;
        let err = document.getElementById("errEmail")
        err.innerHTML = ""
    }
    if (pw == "") {
        isvalid = false
        let err = document.getElementById("errPass");
        err.innerHTML = "password tidak boleh kosong";
        return false;
    }
    else {
        isvalid = true;
        let err = document.getElementById("errPass");
        err.innerHTML = ""
    }
    return isvalid;
}


const resetForm = () => {
    document.getElementById('email-users').value = "";
    document.getElementById("pw").value = ""
}

// end of function tambah data user


