let btn =document.querySelector(".header__navBar");
let menu =document.querySelector(".header__menu");
let menuItems = document.querySelectorAll(".header__menu_items");
if(document.body.clientWidth < 481){x

btn.addEventListener("click",function(){

    if(menu.style.display === "flex"){
    menu.style.display = "none";
    }
    else{
        menu.style.display = "flex";
    }

})

menu.addEventListener("click", function(e){
    for(i=0 ; i<menu.children.length ;i++){
        menu.children[i].classList.remove("header__menu_items_block");
    }
    e.target.classList.add("header__menu_items_block");


    })
}



