const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
// const iconGrid = document.querySelector('.iconGrid');
// if (iconGrid) {
//     iconGrid.style.display = 'none';
// }
const togglebutton = document.getElementById("togglebtn");
const sidebutton1 = document.getElementById("sidebtn1");
const sidebutton2 = document.getElementById("sidebtn2");
const page3 = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/lUcfDaWt8V4?si=0ZVqNA-q6a5D6YsN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
const page4 = '<div class="iconGrid"><a class="socialLink" href="https://www.instagram.com/mediamediamedia.works/" target="_blank"><img src="../../images/interfaceElmts/Instagram_icon.png" alt="instagram"><label>works</label></a><a class="socialLink" href="https://www.instagram.com/brtkglnski/" target="_blank"><img src="../../images/interfaceElmts/Instagram_icon.png" alt="instagram"><label>contact</label></a><a class="socialLink" href="https://github.com/brtkglnski" target="_blank"><img src="../../images/interfaceElmts/github_icon.png" alt="github"><label>github</label></a><a class="socialLink" href="mailto:glinskib2008@gmail.com" target="_blank"><img src="../../images/interfaceElmts/mail_icon.png" alt="email"><label>e-mail</label></a></div>';
const player = document.getElementById("player");
function changeContent(buttonId) {
    player.innerHTML = '<img src="../../images/interfaceElmts/loading.gif" class="loading" alt="">';
    setTimeout(() => {
        switch (buttonId) {
            case 'btn1':
                player.innerHTML = "<p>button1</p>";
                break;
            case 'btn2':
                player.innerHTML = "<p>Hi</p>";
                break;
            case 'btn3':
                player.innerHTML = page3;
                player.style.backgroundImage = 'none';
                break;
            case 'btn4':
                player.innerHTML = page4;
                player.style.backgroundImage = 'url("../../images/interfaceElmts/displayBg2.jpg")'; player.style.backgroundRepeat = 'round';
                break;
                case 'togglebtn':
                    //crttv close/open effect
                    break;
            default:
                player.innerHTML = '<img src="../../images/interfaceElmts/loading.gif" class="loading" alt="">';
        }
    }, 600);

}