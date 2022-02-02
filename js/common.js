window.addEventListener("DOMContentLoaded",
function(){
    console.log("로딩완료");

    document.querySelector(".ham").onclick=
    function(){
        console.log("햄버거");

        var tg=document.querySelector("#mobx");
        console.log("디스플레이:",window.getComputedStyle(tg).display);
        
        if(window.getComputedStyle(tg).display=="none"){
            tg.style.display="block";            
        }
        else{
            tg.style.display="none";
        }

    };

    document.querySelector('.model').onclick=
    function(e){
        e.prevendDefault();
    }
});

