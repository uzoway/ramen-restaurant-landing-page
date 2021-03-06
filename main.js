var mobiletoggle = document.getElementById("mobiletoggle");
var mobilenav = document.getElementById("mobilenav");

mobilenav.style.left = "-30rem";

mobiletoggle.onclick = function(){
    if(mobilenav.style.left == "-30rem"){
        mobilenav.style.left = "0";
        mobiletoggle.src = "images/icon-close.svg";
    }

    else{
        mobilenav.style.left = "-30rem";
        mobiletoggle.src = "images/icon-hamburger.svg";
    }
}