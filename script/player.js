const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");

const player = document.getElementById("player");

const page1 = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1214.5331136041639!2d19.13403232801396!3d50.267113037599785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716dbe890978aa7%3A0x72a04755996b8d9b!2sZesp%C3%B3%C5%82%20Szk%C3%B3%C5%82%20Elektronicznych%20i%20Informatycznych!5e1!3m2!1spl!2spl!4v1726342563991!5m2!1spl!2spl" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
const page2 = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2lIZef4lzdvZkiiCzvPKj7?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
const page3 = '<div class="fileExplorer">   <div class="sectionDivider">    <div class="fileList">         <ul class="fileOptions">       <li id="downloads" onclick="folderChange(this.id); return false;"><i class="material-symbols-outlined">folder</i>Downloads</li>        <li id="projects" onclick="folderChange(this.id); return false;"><i class="material-symbols-outlined">folder</i>Projects</li>    <li id="music" onclick="folderChange(this.id); return false;"><i class="material-symbols-outlined">folder</i>Music</li>      <li id="other" onclick="folderChange(this.id); return false;"><i class="material-symbols-outlined">folder</i>Other</li>   </ul>    </div>     <div id="fileGrid" class="fileGrid">     </div>    </div></div>';
const page4 = '<div class="iconGrid"><a class="socialLink" href="https://www.instagram.com/mediamediamedia.works/" target="_blank"><img src="../../images/interfaceElmts/Instagram_icon.png" alt="instagram"><label>works</label></a><a class="socialLink" href="https://www.instagram.com/brtkglnski/" target="_blank"><img src="../../images/interfaceElmts/Instagram_icon.png" alt="instagram"><label>contact</label></a><a class="socialLink" href="https://github.com/brtkglnski" target="_blank"><img src="../../images/interfaceElmts/github_icon.png" alt="github"><label>github</label></a><a class="socialLink" href="mailto:glinskib2008@gmail.com" target="_blank"><img src="../../images/interfaceElmts/mail_icon.png" alt="email"><label>e-mail</label></a></div>';

const togglebutton = document.getElementById("togglebtn");
const sidebutton1 = document.getElementById("sidebtn1");
const sidebutton2 = document.getElementById("sidebtn2");

const downloads = document.getElementById("downloads");
const projects = document.getElementById("projects");
const music = document.getElementById("music");
const other = document.getElementById("other");

const downloadsGrid = '<a class="explorerItem" href="../../files/cv_en.pdf" download><img src="../../images/interfaceElmts/document_icon.png" alt="file"><label>CV (EN)</label></a><a class="explorerItem" href="../../files/cv_pl.pdf" download><img src="../../images/interfaceElmts/document_icon.png" alt="file"><label>CV (PL)</label></a> <a class="explorerItem" href="../../files/overview_en.pdf" download><img src="../../images/interfaceElmts/document_icon.png" alt="file"><label>Overview (EN)</label></a> <a class="explorerItem" href="../../files/overview_pl.pdf" download><img src="../../images/interfaceElmts/document_icon.png" alt="file"><label>Overview (PL)</label></a>';
const projectsGrid = '<a class="explorerItem" href="https://www.roblox.com/games/18561239122/Treasure-Seeker" target="_blank"><img src="../../images/interfaceElmts/roblox_icon.png" alt="file"><label>Treasure Seeker</label></a>';
const musicGrid = '<a class="explorerItem" href="https://open.spotify.com/playlist/75bP1LOKkjrfgpnDYGREGz?si=8ca9d4d7940e4dcd" target="_blank"><img src="../../images/interfaceElmts/spotify_icon.png" alt="file"><label>"sentimental"</label></a>';
const otherGrid = '';

function changeContent(buttonId) 
{
    player.innerHTML = '<img src="../../images/interfaceElmts/loading.gif" class="loading" alt="">';
    setTimeout(() => {
        switch (buttonId) 
        {
            case 'btn1':
                player.innerHTML = page1;
                player.style.backgroundImage = 'none';
                break;
            case 'btn2':
                player.innerHTML = page2;
                player.style.backgroundImage = 'none';
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

function folderChange(pageId)
{
    const fileGrid = document.getElementById("fileGrid");
    switch (pageId) 
    {
        case 'downloads':
        fileGrid.innerHTML=downloadsGrid;
            break;
        case 'projects':
            fileGrid.innerHTML=projectsGrid;
            break;
        case 'music':
            fileGrid.innerHTML=musicGrid;
            break;
        case 'other':
            fileGrid.innerHTML=otherGrid;
            break;
        default:
            fileGrid.innerHTML="";
            
    }
}