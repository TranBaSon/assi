loadSong();
function playSong(link) {
    var audioPlayer= document.getElementsByTagName('audio') [0];
    audioPlayer.src = link;
    audioPlayer.play();
    var stylesPlayer = document.getElementsByClassName('style-player');
    stylesPlayer[0].innerHTML = '<link rel="stylesheet" href="style-player.css" class="css-player">';
    var remove = stylesPlayer.children[1];
    stylesPlayer.removeChild(remove);
}
function loadSong() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // alert('Everything is ok!');
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
                //content += '<div class="song-control " onclick="playSong(\'' + song.link + '\')">Play</div>';
                //cach 2
                content += `<div class="song-control" onclick="playSong('${song.link}')">Play</div>`;
                content += '<div class="song-control"><a href="#">Detail></a></div>';
                content += '</div>';
            }
            document.getElementById('list-song').innerHTML += content;
        }
    };
    xhr.open('GET', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-mine', true);
    xhr.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('token-key'));
    xhr.send();
}