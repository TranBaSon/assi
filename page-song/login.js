var btnSubmit = document.forms['login'] ['btnSubmit'];
btnSubmit.onclick = function () {
    if (validateForm()) {
    var _email = document.forms['login'] ['email'].value;
    var _password = document.forms['login'] ['password'].value;

    var loginInformmation = {
        email:_email,
        password:_password
    }

    var sendData = JSON.stringify(loginInformmation);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201){
            var responseData = JSON.parse(xhr.responseText);
            // alert('login success!');
            localStorage.setItem('token-key', responseData.token);
            document.forms['login'].reset();
            location.href = 'page.html';
        }
    };
    xhr.open('POST','https://2-dot-backup-server-003.appspot.com/_api/v2/members/authentication', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendData);
}}

function validateForm() {

    var isValid = true;

    var isValidPassword = true;

    var isValidEmail = true;

    var pwdPassword = document.forms['login']['password'];
    var msgPassword = pwdPassword.nextElementSibling;
    if (pwdPassword.value == null || pwdPassword.value.length == 0) {
        msgPassword.classList.remove('msg-success');
        msgPassword.classList.add('msg-error');
        msgPassword.innerHTML = 'Password is required!';
        isValidPassword = false;
    } else {
        msgPassword.classList.remove('msg-error');
        msgPassword.classList.add('msg-success');
        msgPassword.innerHTML = 'Ok.';
    }

    var txtEmail= document.forms['login']['email'];
    var msgEmail= txtEmail.nextElementSibling;
    if (txtEmail.value == null || txtEmail.value.length == 0 ) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email is required!';
        isValidEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Ok!';
    }

    isValid = isValidPassword && isValidEmail;
    return isValid;
}