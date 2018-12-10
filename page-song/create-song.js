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
    xhr.open('POST','https://2-dot-backup-server-003.appspot.com/_api/v2/songs', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('token-key'));
    xhr.send(jsonSongInfomation);
}

function validateForm (){

    var isValid = true;

    var isValidName = true;

    var isValidThumbnail= true;

    var isValidSinger= true;

    var isValidLink= true;

    var isValidAuthor =true;

    var isValidDescription = true;


    var txtName = document.forms['create-song'] ['name'];
    var msgName = txtName.nextElementSibling;

    if (txtName.value == null || txtName.value.length == 0) {

        msgName.classList.remove('msg-success');

        msgName.classList.add('msg-error');

        msgName.innerHTML = 'Name is required!';

        isValidName = false;
    } else {
        msgName.classList.remove('msg-error');
        msgName.classList.add('msg-success');
        msgName.innerHTML = 'Ok.';
    }


    var txtThumbnail = document.forms['create-song'] ['thumbnail'];
    var msgThumbnail = txtThumbnail.nextElementSibling;

    if (txtThumbnail.value == null || txtThumbnail.value.length == 0) {

        msgThumbnail.classList.remove('msg-success');

        msgThumbnail.classList.add('msg-error');

        msgThumbnail.innerHTML = 'Thumbnail is required!';

        isValidThumbnail = false;
    } else {
        msgThumbnail.classList.remove('msg-error');
        msgThumbnail.classList.add('msg-success');
        msgThumbnail.innerHTML = 'Ok.';
    }

    var txtSinger = document.forms['create-song'] ['singer'];
    var msgSinger = txtSinger.nextElementSibling;

    if (txtSinger.value == null || txtSinger.value.length == 0) {

        msgSinger.classList.remove('msg-success');

        msgSinger.classList.add('msg-error');

        msgSinger.innerHTML = 'Singer is required!';

        isValidSinger = false;
    } else {
        msgSinger.classList.remove('msg-error');
        msgSinger.classList.add('msg-success');
        msgSinger.innerHTML = 'Ok.';
    }

    var txtLink= document.forms['create-song'] ['link'];
    var msgLink = txtLink.nextElementSibling;

    if (txtLink.value == null || txtLink.value.length == 0) {

        msgLink.classList.remove('msg-success');

        msgLink.classList.add('msg-error');

        msgLink.innerHTML = 'Link is required!';

        isValidLink = false;
    } else {
        msgLink.classList.remove('msg-error');
        msgLink.classList.add('msg-success');
        msgLink.innerHTML = 'Ok.';
    }

    var txtAuthor  = document.forms['create-song'] ['author'];
    var msgAuthor = txtAuthor.nextElementSibling;

    if (txtAuthor.value == null || txtAuthor.value.length == 0) {

        msgAuthor.classList.remove('msg-success');

        msgAuthor.classList.add('msg-error');

        msgAuthor.innerHTML = 'Author is required!';

        isValidAuthor = false;
    } else {
        msgAuthor.classList.remove('msg-error');
        msgAuthor.classList.add('msg-success');
        msgAuthor.innerHTML = 'Ok.';
    }

    var txtDescription  = document.forms['create-song'] ['description'];
    var msgDescription = txtDescription.nextElementSibling;

    if (txtDescription.value == null || txtDescription.value.length == 0) {

        msgDescription.classList.remove('msg-success');

        msgDescription.classList.add('msg-error');

        msgDescription.innerHTML = 'Description is required!';

        isValidDescription = false;
    } else {
        msgDescription.classList.remove('msg-error');
        msgDescription.classList.add('msg-success');
        msgDescription.innerHTML = 'Ok.';
    }
    isValid = isValidAuthor && isValidLink && isValidName && isValidSinger && isValidThumbnail && isValidDescription;
    return isValid;
}