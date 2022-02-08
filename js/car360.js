let temp="SWP_";
$(() => {

    $("a.colorSelect").click(function(){
        let txt = $(this).attr("id");
        switch(txt){
            case "colorWhite": temp="SWP_"; console.log("white"); break;
            case "colorBlack": temp="ABP_"; console.log("black"); break;
            case "colorGray": temp="KLM_";  console.log("Gray");break;
        }
        mkImg();
    })

    let cbx = $(".carbox");

    let fnum = 0;

    const mkImg = () => {
        cbx.html("");
        for (let i = 1; i <= 36; i++) {
            cbx.append(
                `<img src="./images/EV6/${temp}${i}.png" alt="car">`);
        }

        cbx.find("img").hide();
        cbx.find("img").eq(fnum).show();
    };

    mkImg();

    let drag = 0;
    let point = 0;
    let prot = 0;

    cbx.on("mousemove touchmove", function (e) {

        if(prot) return;
        prot = 1;
        setTimeout(()=>prot=0,40);

        let pos = e.pageX;
        if(pos===undefined){
            pos=e.touches[0].pageX;
        }
        if (drag) {
            let dir;

            point - pos < 0 ? dir = 0 : dir = 1;

            rotCar(dir);

        }

    });
    
    cbx.on("mousedown touchstart",function (e) {
        
        drag = 1;

        point = e.pageX;
        if(point===undefined){
            point=e.touches[0].clientX;
        }

        cbx.css({cursor:"grabbing"});
    });

    cbx.on("mouseup mouseout touchend", function (e) {
        drag = 0;
        cbx.css({cursor:"grab"});
    });

    const rotCar = dir => {
        if(dir) {
            fnum++;
            if(fnum===36) fnum = 0;
        }
        else{
            fnum--;
            if(fnum===-1) fnum = 35;
        }

        cbx.find("img:visible").hide();
        cbx.find("img").eq(fnum).show();

    };

});
