let btn =document.querySelector(".header__navBar");
let menu =document.querySelector(".header__menu");
let container = document.querySelector(".container_top-section ");
let menuItems = document.querySelectorAll(".header__menu_items");
let header = document.querySelector(".header");

if(document.body.clientWidth < 481){

btn.addEventListener("click",function(){

    if(menu.style.display === "flex"){
    menu.style.display = "none";
    }
    else{
        menu.style.display = "flex";
    }

});

menu.addEventListener("click", function(e){
    for(i=0 ; i<menu.children.length ;i++){
        menu.children[i].classList.remove("header__menu_items_block");
    }
    e.target.classList.add("header__menu_items_block");
    menu.style.display = "none";
    });
container.addEventListener("click", function(e){
    menu.style.display = "none";
});
// header.addEventListener("click", function(e){
//     menu.style.display = "none";
// });
}



