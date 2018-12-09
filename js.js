var content = '';
for (var i = 0; i < 15; i++) {
    content += '<div class="obj" >';
    content += '</div>';
}
var middle = document.getElementsByClassName('middle');
middle[0].innerHTML += content;
