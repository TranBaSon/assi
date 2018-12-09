function playSong(link) {
    var audioPlayer= document.getElementsByTagName('audio') [0];
    audioPlayer.src = link;
    audioPlayer.play();
}