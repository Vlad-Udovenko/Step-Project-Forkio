let e=document.querySelector(".header__navBar"),t=document.querySelector(".header__menu");document.querySelectorAll(".header__menu_items");document.body.clientWidth<481&&(e.addEventListener("click",function(){"flex"===t.style.display?t.style.display="none":t.style.display="flex"}),t.addEventListener("click",function(e){for(i=0;i<t.children.length;i++)t.children[i].classList.remove("header__menu_items_block");e.target.classList.add("header__menu_items_block")}));