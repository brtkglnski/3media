const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");

const togglebutton = document.getElementById("togglebtn");
const sidebutton1 = document.getElementById("sidebtn1");
const sidebutton2 = document.getElementById("sidebtn2");

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
                player.innerHTML = "<p>Hi</p>";
                break;
            case 'btn4':
                //socials
                player.innerHTML = "";
                player.style.backgroundImage = 'url("../../images/interfaceElmts/displayBg.jpg")'; player.style.backgroundRepeat = 'round';
                break;
                case 'togglebtn':
                    //crttv close/open effect
                    break;
            default:
                player.innerHTML = '<img src="../../images/interfaceElmts/loading.gif" class="loading" alt="">';
        }
    }, 600);

}