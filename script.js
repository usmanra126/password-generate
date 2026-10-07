function generatePassword() {

    let length = document.getElementById("length").value;

    let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "!@#$%^&*";

    let password = "";

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        password += characters[randomNumber];
    }

    document.getElementById("password").value = password;
    document.getElementById("message").innerText = "Password generated!";
}

function copyPassword() {

    let password = document.getElementById("password").value;

    if (password == "") {
        document.getElementById("message").innerText =
            "First generate a password!";
        return;
    }

    navigator.clipboard.writeText(password);

    document.getElementById("message").innerText =
        "Password copied!";
}