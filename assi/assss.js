var btnSubmit = document.forms['info'] ['btn-submit'];
btnSubmit.onclick = function () {
    validate();
}


var txtHoVaTen = document.forms["info"] ["hoVaTen"];
var txtEmail = document.forms["info"] ["email"];
var txtPhone = document.forms["info"] ["phone"];
var gtGioiTinh = document.forms["gioiTinh"] ["gioiTinh"];
function validate() {

    var isValid = true;

    var isValidHoVaTen = true;

    var isValidEmail= true;

    var isValidPhone= true;

    var isValidGioiTinh= true;

    var msgHoVaTen = txtHoVaTen.nextElementSibling;

    if (txtHoVaTen.value == null || txtHoVaTen.value.length == 0 || txtHoVaTen.value.length >= 50) {

        msgHoVaTen.classList.remove('msg-success');

        msgHoVaTen.classList.add('msg-error');

        msgHoVaTen.innerHTML = 'Vui lòng nhập lại họ và tên.';

        isValidHoVaTen = false;
    } else {
        msgHoVaTen.classList.remove('msg-error');
        msgHoVaTen.classList.add('msg-success');
        msgHoVaTen.innerHTML = 'Ok.';
    }

    var msgEmail = txtEmail.nextElementSibling;

    if (txtEmail.value == null || txtEmail.value.length == 0 ) {

        msgEmail.classList.remove('msg-success');

        msgEmail.classList.add('msg-error');

        msgEmail.innerHTML = 'Vui lòng nhập lại email.';

        isValidEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Ok.';
    }

    var msgPhone = txtPhone.nextElementSibling;

    if (txtPhone.value == null || txtPhone.value.length == 0 ) {

        msgPhone.classList.remove('msg-success');

        msgPhone.classList.add('msg-error');

        msgPhone.innerHTML = 'Vui lòng nhập lại số điện thoại.';

        isValidPhone = false;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Ok.';
    }

    var msgGioiTinh = gtGioiTinh.nextElementSibling;

    if (gtGioiTinh.value == null || gtGioiTinh.value.length == 0 ) {

        msgGioiTinh.classList.remove('msg-success');

        msgGioiTinh.classList.add('msg-error');

        msgGioiTinh.innerHTML = 'Vui lòng chọn giới tính.';

        isValidGioiTinh = false;
    } else {
        msgGioiTinh.classList.remove('msg-error');
        msgGioiTinh.classList.add('msg-success');
        msgGioiTinh.innerHTML = 'Ok.';
    }
 isValid = isValidGioiTinh && isValidPhone && isValidEmail && isValidHoVaTen;
    return isValid
}