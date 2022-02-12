//모바일용 GNB메뉴 열고 닫기 js파일입니다.

window.addEventListener("DOMContentLoaded",
function(){
    console.log("로딩완료");

    document.querySelector(".ham").onclick=
    function(){

        var tg=document.querySelector("#mobx");
        
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

