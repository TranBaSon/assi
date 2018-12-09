// var arraySongs = [
//
//     {
//         thumbnail: 'https://avatar-nct.nixcdn.com/song/2018/11/06/1/9/5/0/1541493045342.jpg',
//         name: 'Không thể chạm được em',
//         singer: 'Gin Tuấn Kiệt',
//         author: 'Gin Tuấn Kiệt',
//         link: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui970/KhongTheChamDuocEm-GinTuanKiet-5732705.mp3'
//     },
//
//     {
//         thumbnail: 'https://avatar-nct.nixcdn.com/song/2018/09/22/e/6/7/d/1537620680674.jpg',
//         name: ' Vô Tình',
//         singer: 'Xesi, Hoaprox ',
//         author: 'Xesi, Hoaprox ',
//         link: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui969/VoTinh-XesiHoaprox-5665188.mp3'
//     },
//
//     {
//         thumbnail: 'https://avatar-nct.nixcdn.com/song/2018/10/11/2/f/4/7/1539252733451.jpg',
//         name: 'Như Lời Đồn',
//         singer: 'Bảo Anh',
//         author: 'Khắc Hưng',
//         link: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui969/NhuLoiDon-BaoAnh-5700656.mp3'
//     },
//
//     {
//         thumbnail: 'https://avatar-nct.nixcdn.com/song/2018/11/06/1/9/5/0/1541495996031.jpg',
//         name: 'Cuộc Sống Mà',
//         singer: 'Yong Anhh',
//         author: 'Yong Anhh',
//         link: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui970/CuocSongMa-YongAnhh-5732726.mp3'
//     },
//
//     {
//         thumbnail: 'https://avatar-nct.nixcdn.com/song/2018/11/09/f/2/3/f/1541750163602.jpg',
//         name: ' Đã Quên Nhau Rồi - Henry ',
//         singer: 'Henry',
//         author: 'Nắng',
//         link: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui971/Nha-MadihuVuThanhVan-5758288.mp3'
//     },
//
// ];
document.getElementById('load-more').onclick = function () {


    loadSong();
};

function playSong(link) {
    var audioPlayer= document.getElementsByTagName('audio') [0];
    audioPlayer.src = link;
    audioPlayer.play();
}

    document.getElementById('addSong').onclick = function () {
    saveSong();
    };
    function saveSong() {
    var name = document.forms["song-form"] ["name"].value;
    var author = document.forms["song-form"] ["author"].value;
    var link = document.forms["song-form"] ["link"].value;
    var singer = document.forms["song-form"] ["singer"].value;
    var thumbnail = document.forms["song-form"] ["thumbnail"].value;

    var song = {
        thumbnail: thumbnail,
        name: name,
        singer: singer,
        link: link,
        author: author
    };
    var sendData = JSON.stringify(song);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            alert('Save success!');
            document.forms['song-form'].reset();
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/post-free', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendData);
}



function loadSong() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert('Everything is ok!');
            var arraySongs = JSON.parse(xhr.responseText);
            var content = "";
            for (var i = 0; i < arraySongs.length; i++) {
                var song = arraySongs [i];
                content += '<div class="song-item">';
                content += '<div class="song-index">' + (i + 1) + '</div>';
                content += '<div class="song-thumbnail">';
                content += '<img src="' + song.thumbnail + '" alt="">';
                content += '</div>';
                content += '<div class="song-infor">';
                content += '<div class="song-name">' + song.name + '</div>';
                content += '<div class="song-singer">' + song.singer + '</div>';
                content += '</div>';
                // cach 1
                content += '<div class="song-control " onclick="playSong(\'' + song.link + '\')">Play</div>';
                //cach 2
                content += `<div class="song-control" onclick="playSong('${song.link}')">Play</div>`;
                content += '<div class="song-control"><a href="#">Detail></a></div>';
                content += '</div>';
            }
            document.getElementById('list-song').innerHTML += content;
        }
    };
    xhr.open('GET', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs', true);
    xhr.send();
}


