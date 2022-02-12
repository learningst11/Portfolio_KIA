//서브페이지 EV6 차량 360도 VR이미지 js파일입니다. 
$(() => {
    let temp = "SWP_";
    //차량 color 변경하기
    $("a.colorSelect").click(function () {
        let txt = $(this).attr("id");
        switch (txt) {
            case "colorWhite":
                temp = "SWP_";
                break;
            case "colorBlack":
                temp = "ABP_";
                break;
            case "colorGray":
                temp = "KLM_";
                break;
        }
        mkImg();
    })

    //이벤트대상
    let cbx = $(".carbox");
    //보여질 이미지 번호
    let fnum = 0;

    const mkImg = () => {
        cbx.html(""); //초기화
        //이미지 셋업
        for (let i = 1; i <= 36; i++) {
            cbx.append(
                `<img src="./images/EV6/${temp}${i}.png" alt="car">`);
        }
        //원래 보여지던 이미지(fnum) color 변경 후 그대로 보이게하기
        cbx.find("img").hide();
        cbx.find("img").eq(fnum).show();
    };

    mkImg();

    //드래그 상태값(0-드래그 중 아님, 1-드래그 중)
    let drag = 0;
    //클릭시 위치값
    let point = 0;
    //이벤트 횟수 조절 막기 변수
    let prot = 0;

    //드래그 이벤트 함수
    cbx.on("mousemove touchmove", function (e) {

        //이벤트 횟수 조절
        if (prot) return;
        prot = 1;
        setTimeout(() => prot = 0, 40);

        //포인터 현 위치
        let pos = e.pageX;
        if (pos === undefined) {
            pos = e.touches[0].pageX;
        }

        //마우스 버튼이 눌러져있을 때
        if (drag) {
            //왼쪽방향 1, 오른쪽방향 0
            let dir;

            point - pos < 0 ? dir = 0 : dir = 1;

            rotCar(dir);
        }

    });

    //마우스 버튼 down 이벤트 함수
    cbx.on("mousedown touchstart", function (e) {

        drag = 1;

        point = e.pageX;
        if (point === undefined) {
            point = e.touches[0].clientX;
        }

        cbx.css({
            cursor: "grabbing"
        });
        
    });

    //마우스 버튼 업 & 마우스 커서 아웃 이벤트 함수
    cbx.on("mouseup mouseout touchend", function (e) {
        drag = 0;
        cbx.css({
            cursor: "grab"
        });
    });

    const rotCar = dir => {
        //dir(1-왼쪽, 0-오른쪽)
        if (dir) {
            fnum++;
            if (fnum === 36) fnum = 0;
        } else {
            fnum--;
            if (fnum === -1) fnum = 35;
        }

        cbx.find("img:visible").hide();
        cbx.find("img").eq(fnum).show();

    };

});