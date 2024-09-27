document.addEventListener("DOMContentLoaded", function() {
    let menu_burger=document.querySelector(".header_burger");
    let menu_vetement=document.querySelector(".menu_deroulant_vetement");
    let main=document.querySelector('html');

    menu_burger.addEventListener("click",function(event){
        event.preventDefault();
        menu_vetement.classList.toggle("active");
        

    });

    let liens = document.querySelectorAll(".menu_deroulant_vetement a");

    liens.forEach(function(lien){
        lien.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = lien.href;

        });
    });

  });