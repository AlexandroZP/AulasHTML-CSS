const list = document.querySelectorAll(".link");
const darkLight = document.querySelector(".light-dark");
const menuBar = document.querySelector(".menuBar");
const body = document.querySelector("body");
const main = document.querySelector("main");
const searchI = document.querySelector(".search-icon");
const search = document.querySelector("#search");

searchI.onclick = function(){
    search.classList.toggle('active');
}

function menuBaractive(){
    if(main.classList.contains('menuBar-active')){
        main.classList.remove('menuBar-active');
    }
    else{
        main.classList.add('menuBar-active');
    }
    
}
function activeDarkmode(){
    if(darkLight.classList.contains('active'))
    {
        darkLight.classList.remove('active');
        body.classList.remove('dl-active')
    }else{
        darkLight.classList.add('active');
        body.classList.add('dl-active');
    }
    
}
function activeLink(){
    list.forEach((elemento)=>{
        elemento.classList.remove('active');
        this.classList.add('active');
    })
}
menuBar.addEventListener('mouseout', menuBaractive);
menuBar.addEventListener('mouseover', menuBaractive);
darkLight.addEventListener('click',activeDarkmode)
list.forEach((elemento)=>{
    elemento.addEventListener('click',activeLink)
})