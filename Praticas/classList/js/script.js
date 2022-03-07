const body = document.querySelector("body");
const btns = document.querySelectorAll(".btn");
const dlbtn = document.querySelector(".light-dark-btn");
const menu = document.querySelector(".btns");
function activeDarkMode(){
    if(dlbtn.classList.contains("dark")){
        dlbtn.textContent = "Dark";
        dlbtn.classList.remove('dark');
        body.classList.remove('active');
    }else{
        body.classList.add('active');
        dlbtn.textContent = "Light";
        dlbtn.classList.remove('light');
        dlbtn.classList.add('dark');
    }
}
function activeBar(){
    menu.classList.add('active');
}
function desactiveBar(){
    menu.classList.remove('active');
}
menu.addEventListener('mouseover', activeBar);
menu.addEventListener('mouseout', desactiveBar);
dlbtn.addEventListener('click', activeDarkMode);
function activeDivs(){
    btns.forEach((elemento) => {
        elemento.classList.remove('active');
        this.classList.add('active');
    })
}
btns.forEach((elemento)=> {
    elemento.addEventListener('click', activeDivs);
})