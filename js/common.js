window.addEventListener("DOMContentLoaded",
function(){
    console.log("로딩완료");

    //1.햄버거 버튼 클릭시
    //대상:.ham
    document.querySelector(".ham").onclick=
    function(){
        console.log("햄버거");

        var tg=document.querySelector("#mobx");
        console.log("디스플레이:",window.getComputedStyle(tg).display);
        
        if(window.getComputedStyle(tg).display=="none"){
            tg.style.display="block";
            tg.style.transition="2s ease-out";
            
        }

        else{
            tg.style.display="none";
        }

    };////////click///////////////
});

