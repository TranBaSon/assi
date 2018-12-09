var btnSubmit = document.forms['register'] ['btn-submit'];
btnSubmit.onclick = function () {

    var _firstName = document.forms['register'] ['firstName'].value;
    var _lastName = document.forms['register'] ['lastName'].value;
    var _password = document.forms['register'] ['password'].value;
    var _address = document.forms['register'] ['address'].value;
    var _phone = document.forms['register'] ['phone'].value;
    var _avatar = document.forms['register'] ['avatar'].value;
    var _gender = document.forms['register'] ['gender'].value;
    var _email = document.forms['register'] ['email'].value;
    var _birthday = '2000-08-18';
    var _introduction = document.forms['register'] ['introduction'].value;

    var registerInformation = {
        firstName: _firstName,
        lastName: _lastName,
        password: _password,
        address: _address,
        phone: _phone,
        avatar: _avatar,
        gender: _gender,
        email: _email,
        birthday: _birthday
    }
    var sendData = JSON.stringify(registerInformation);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201){
            alert('Register success!');
            document.forms['register'].reset();
        }
    };
    xhr.open('POST','https://2-dot-backup-server-002.appspot.com/_api/v2/members',true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendData);

}