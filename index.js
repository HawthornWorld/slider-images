/**
 * Created by mayan on 2017/7/13.
 */
(function () {
    var sliderInterval = setInterval(play(),3000);
    var sliderClock = setInterval(clock(),2000);
    var i = 1;
    function play() {
        var box = document.getElementsByClassName('slider-img-box')[0];
        box.style.marginLeft = (1-i)*1180+'px';
    }
    function clock() {
        i = i+1;
        if(i===5){
            i = 1;
        }
    }
})();

