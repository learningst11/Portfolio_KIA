//메인페이지 차량주행영상 슬라이더 js파일입니다.
$(() => {
    //현재 화면에 보여지고 있는 영상 번호 (1~3)
    let currentVideo = 1;

    //오른쪽 화살표 버튼
    $('.slide-next').click(function () {

        if (currentVideo == 1) {
            $('.slide-container').css('transform', 'translateX(-100vw)');
            $('#enter').html(`<a href="./sub1.html">
                <span>
                내일을 위한 여정의 시작, The Kia EV6 &gt;</span>
            </a>
        `);
            currentVideo = currentVideo + 1;
        } else if (currentVideo == 2) {
            $('.slide-container').css('transform', 'translateX(-200vw)');
            $('#enter').html(`<a href="./sub2.html">
            <span>
            영감은 낯선 것으로부터, The Outstanding, The Kia K8 &gt;</span>
        </a>
        `);
            currentVideo = currentVideo + 1;
        } 

    });

    //왼쪽 화살표 버튼
    $('.slide-prev').click(function () {
       if (currentVideo == 2) {
            $('.slide-container').css('transform', 'translateX(+0vw)');
            $('#enter').html(`<a href="./sub3.html">
            <span>
            궁금한 그곳으로, 나를 Discover your world The all-new Sportage &gt;</span>
        </a>
        `);
            currentVideo = currentVideo - 1;
        } else if (currentVideo == 3) {
            $('.slide-container').css('transform', 'translateX(-100vw)');
            $('#enter').html(`<a href="./sub1.html">
        <span>
        내일을 위한 여정의 시작, The Kia EV6 &gt;</span>
    </a>
    `);
            currentVideo = currentVideo-1;
        }

    });
    

});