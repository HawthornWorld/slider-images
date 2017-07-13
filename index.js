/**
 * Created by mayan on 2017/7/13.
 */


window.onload = (function() {
    var $ = function (id) {
        return document.getElementById(id);
    };
    var box = $('sliderImgBox');
    var btnLeft = $('sliderLeft');
    var btnRight = $('sliderRight');
    var dot = $('dotNav').getElementsByTagName('a');
    var index = 1;


    //自动轮播
    function play() {
        box.style.left = (1-index)*1180+'px';
    }
    function clock() {
        index = index+1;
        if(index===5){
            index = 1;
        }
    }
    var slide = setInterval(play(),3000);
    var time = setInterval(clock(),2000);


    //点击dot切换图片
    for(i<dot.length+1; i++){
        dot[i].onclick = function () {
            var index = Number(this.href.replace(/.*#/g, "")) || 1;
            box.style.left = (1 - index) * 1180 + "px";
            // dot[i].addClass('active');
            return false;
        };
    }


    //点击左右按钮切换图片
    btnLeft.onclick = function () {
        if(index = 5){
            index = 1;
        }else{
            index += 1;
        }
        play()
    }
    btnRight.onclick = function () {
        if(index = 1){
            index = 5;
        }else{
            index -= 1;
        }
        play()
    }




})();




