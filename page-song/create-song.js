var token = localStorage.getItem('token-key');
if(token == null || token.length == 0){
    location.href = 'login.html';
}


var btnSubmit = document.forms['create-song'] ['btnSubmit'];
btnSubmit.onclick = function () {
    if (validateForm()){
        createSong();
    }
}

function createSong() {
    var _name = document.forms["create-song"] ["name"];
    var _author = document.forms["create-song"] ["author"];
    var _link = document.forms["create-song"] ["link"];
    var _singer = document.forms["create-song"] ["singer"];
    var _thumbnail = document.forms["create-song"] ["thumbnail"];
    var _description = document.forms["create-song"] ["description"];

    var songInformation = {
        thumbnail: _thumbnail.value,
        name: _name.value,
        singer: _singer.value,
        link: _link.value,
        author: _author.value,
        description: -_description
    }

    var jsonSongInfomation = JSON.stringify(songInformation);

    var xhr = new  XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 201){
            var responseData = JSON.parse(xhr.responseText);
            alert('Save sucess !');
        } else if (xhr.readyState == 4){
            var responseData = JSON.parse(xhr.responseText);
            alert('Save fails, please try again!' + xhr.responseText);
        }
    };
    xhr.open('POST','https://2-dot-backup-server-002.appspot.com/_api/v2/songs', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('token-key'));
    xhr.send(jsonSongInfomation);
}

function validateForm (){

    var isValid = true;
    // Lưu trữ trạng thái validate của first name.
    var isValidName = true;
    // Lưu trữ trạng thái validate của last name.
    var isValidThumbnail= true;
    // Lưu trữ trạng thái validate của password.
    var isValidSinger= true;
    // Lưu trữ trạng thái validate của confirm password.
    var isValidLink= true;

    var isValidAuthor =true;

    var isValidDescription = true;

    // Lấy ra phần tử span nằm kế tiếp của txtFirstName. (dùng để hiển thị thông báo lỗi)
    var txtName = document.forms['create-song'] ['name'];
    var msgName = txtName.nextElementSibling;
    // Kiểm tra dữ liệu trong input txtFirstName. Nếu không có dữ liệu thì tạo thông báo lỗi.
    if (txtName.value == null || txtName.value.length == 0) {
        // Xoá class msg-success (chuyển chữ thành xanh) khỏi span thông báo lỗi (nếu có).
        msgName.classList.remove('msg-success');
        // Thêm class msg-error (chuyển chữ thành màu đỏ)
        msgName.classList.add('msg-error');
        // Chuyển nội dung text.
        msgName.innerHTML = 'Name is required!';
        // Chuyển trạng thái validate của fistName thành false.
        isValidName = false;
    } else {
        msgName.classList.remove('msg-error');
        msgName.classList.add('msg-success');
        msgName.innerHTML = 'Ok.';
    }


    var txtThumbnail = document.forms['create-song'] ['thumbnail'];
    var msgThumbnail = txtThumbnail.nextElementSibling;
    // Kiểm tra dữ liệu trong input txtFirstName. Nếu không có dữ liệu thì tạo thông báo lỗi.
    if (txtThumbnail.value == null || txtThumbnail.value.length == 0) {
        // Xoá class msg-success (chuyển chữ thành xanh) khỏi span thông báo lỗi (nếu có).
        msgThumbnail.classList.remove('msg-success');
        // Thêm class msg-error (chuyển chữ thành màu đỏ)
        msgThumbnail.classList.add('msg-error');
        // Chuyển nội dung text.
        msgThumbnail.innerHTML = 'Thumbnail is required!';
        // Chuyển trạng thái validate của fistName thành false.
        isValidThumbnail = false;
    } else {
        msgThumbnail.classList.remove('msg-error');
        msgThumbnail.classList.add('msg-success');
        msgThumbnail.innerHTML = 'Ok.';
    }

    var txtSinger = document.forms['create-song'] ['singer'];
    var msgSinger = txtSinger.nextElementSibling;
    // Kiểm tra dữ liệu trong input txtFirstName. Nếu không có dữ liệu thì tạo thông báo lỗi.
    if (txtSinger.value == null || txtSinger.value.length == 0) {
        // Xoá class msg-success (chuyển chữ thành xanh) khỏi span thông báo lỗi (nếu có).
        msgSinger.classList.remove('msg-success');
        // Thêm class msg-error (chuyển chữ thành màu đỏ)
        msgSinger.classList.add('msg-error');
        // Chuyển nội dung text.
        msgSinger.innerHTML = 'Singer is required!';
        // Chuyển trạng thái validate của fistName thành false.
        isValidSinger = false;
    } else {
        msgSinger.classList.remove('msg-error');
        msgSinger.classList.add('msg-success');
        msgSinger.innerHTML = 'Ok.';
    }

    var txtLink= document.forms['create-song'] ['link'];
    var msgLink = txtLink.nextElementSibling;
    // Kiểm tra dữ liệu trong input txtFirstName. Nếu không có dữ liệu thì tạo thông báo lỗi.
    if (txtLink.value == null || txtLink.value.length == 0) {
        // Xoá class msg-success (chuyển chữ thành xanh) khỏi span thông báo lỗi (nếu có).
        msgLink.classList.remove('msg-success');
        // Thêm class msg-error (chuyển chữ thành màu đỏ)
        msgLink.classList.add('msg-error');
        // Chuyển nội dung text.
        msgLink.innerHTML = 'Link is required!';
        // Chuyển trạng thái validate của fistName thành false.
        isValidLink = false;
    } else {
        msgLink.classList.remove('msg-error');
        msgLink.classList.add('msg-success');
        msgLink.innerHTML = 'Ok.';
    }

    var txtAuthor  = document.forms['create-song'] ['author'];
    var msgAuthor = txtAuthor.nextElementSibling;
    // Kiểm tra dữ liệu trong input txtFirstName. Nếu không có dữ liệu thì tạo thông báo lỗi.
    if (txtAuthor.value == null || txtAuthor.value.length == 0) {
        // Xoá class msg-success (chuyển chữ thành xanh) khỏi span thông báo lỗi (nếu có).
        msgAuthor.classList.remove('msg-success');
        // Thêm class msg-error (chuyển chữ thành màu đỏ)
        msgAuthor.classList.add('msg-error');
        // Chuyển nội dung text.
        msgAuthor.innerHTML = 'Author is required!';
        // Chuyển trạng thái validate của fistName thành false.
        isValidAuthor = false;
    } else {
        msgAuthor.classList.remove('msg-error');
        msgAuthor.classList.add('msg-success');
        msgAuthor.innerHTML = 'Ok.';
    }

    var txtDescription  = document.forms['create-song'] ['description'];
    var msgDescription = txtDescription.nextElementSibling;
    // Kiểm tra dữ liệu trong input txtFirstName. Nếu không có dữ liệu thì tạo thông báo lỗi.
    if (txtDescription.value == null || txtDescription.value.length == 0) {
        // Xoá class msg-success (chuyển chữ thành xanh) khỏi span thông báo lỗi (nếu có).
        msgDescription.classList.remove('msg-success');
        // Thêm class msg-error (chuyển chữ thành màu đỏ)
        msgDescription.classList.add('msg-error');
        // Chuyển nội dung text.
        msgDescription.innerHTML = 'Description is required!';
        // Chuyển trạng thái validate của fistName thành false.
        isValidDescription = false;
    } else {
        msgDescription.classList.remove('msg-error');
        msgDescription.classList.add('msg-success');
        msgDescription.innerHTML = 'Ok.';
    }
    isValid = isValidAuthor && isValidLink && isValidName && isValidSinger && isValidThumbnail && isValidDescription;
    return isValid;
}