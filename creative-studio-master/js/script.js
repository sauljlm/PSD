let btn = document.getElementById('icon_menu');
let menu = document.getElementById('menu_responsive');
let close = false;
function open_close(){
    if( close==false){
        menu.classList.remove("close");
        menu.className = 'open';
        close=true;
    }else{
        menu.classList.remove("open");
        menu.className = 'close';
        close=false;
    }
}

console.log("close");

btn.addEventListener('click', open_close);