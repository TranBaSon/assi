var btnSubmit = document.forms['login'] ['btnSubmit'];
btnSubmit.onclick = function () {
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
            alert('login success!');
            localStorage.setItem('token-key', responseData.token);
            document.forms['login'].reset();
        }
    };
    xhr.open('POST','https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendData);
}