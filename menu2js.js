




const bars = document.querySelector(".fa-video");
const cross = document.querySelector(".fa-times");
const sidebar = document.querySelector(".sidebar");


bars.addEventListener("click", () => {sidebar.classList.toggle("show-sidebar")});

cross.addEventListener("click", () => {sidebar.classList.remove("show-sidebar")});





////////////////////

var modalbtn = document.querySelectorAll(".modal-open");

modalbtn.forEach(function(btn) {

    btn.onclick = function(){

        var modal = btn.getAttribute("data-modal");

        document.getElementById(modal).style.display="block";
    };
    
});

var closebutton = document.querySelectorAll(".modal-close");

closebutton.forEach(function(btn){
    btn.onclick = function(){
        var modal=(btn.closest(".modal").style.display="none");
    }
});