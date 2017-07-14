/**
 * Created by mayan on 2017/7/13.
 */


window.onload = (function() {
    var $ = function (id) {
        return document.getElementById(id);
    };
    var wrapper = document.getElementsByClassName('slider-img-wrapper')[0];
    var box = $('sliderImgBox');
    var btnLeft = $('sliderLeft');
    var btnRight = $('sliderRight');
    var dot = $('dotNav').getElementsByTagName('a');
    var animated = false;
    var index = 1;
    var len = 5;
    var interval = 3000;
    var timer;

    //滑动动画
    function animate(offset) {
        if (offset === 0) {
            return;
        }
        animated = true;
        var time = 300;
        var inteval = 10;
        var speed = offset / (time / inteval);
        var marginLeft = parseInt(box.style.marginLeft) + offset;
        var go = function () {
            if (speed > 0 && parseInt(box.style.marginLeft < marginLeft) || speed < 0 && parseInt(box.style.marginLeft > marginLeft)) {
                box.style.marginLeft = parseInt(box.style.marginLeft) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                box.style.marginLeft = marginLeft + 'px';
                if (marginLeft > -1180) {
                    box.style.marginLeft = -1180 * len + 'px';
                }
                if (marginLeft < (-1180 * len)) {
                    box.style.marginLeft = '-1180px';
                }
                animated = false;
            }
            go();
        };
        // animate();

        //切换时拉长小圆点
        function translateDot() {
            for (var i = 0; i < dot.length; i++) {
                if (dot[i].className === 'on') {
                    dot[i].className = 'active';
                    break;
                }
            }
            dot[index - 1].className = 'active';
        }

        //自动轮播
        function play() {
            timer = setTimeout(function () {
                btnRight.onclick();
                play();
            }, interval);
        }

        //停止轮播
        function stop() {
            clearTimeout(timer);
        }

        //点击右箭头，向左移动
        btnRight.onclick = function () {
            if (animated) {
                return;
            }
            if (index === 5) {
                index = 1;
            } else {
                index += 1;
            }
            translateDot();
            if (!animated) {
                this.animate(-1180);
            }
        };

        //点击左箭头，向右移动
        btnLeft.onclick = function () {
            if (animated) {
                return;
            }
            if (index === 1) {
                index = 5;
            } else {
                index -= 1;
            }
            translateDot();
            if (!animated) {
                animate(-1180);
            }
        };

        //点击圆点触发事件
        for (var i = 0; i < dot.length; i++) {
            dot[i].onclick = function () {
                if (animated) {
                    return;
                }
                if (this.className === 'active') {
                    return;
                }
                var currIndex = parseInt(this.getAttribute('index'));
                var offset = -1180 * (currIndex - index);
                if (!animated) {
                    animate(offset);
                }
                index = currIndex;
                translateDot();
            }
        }
        wrapper.onmouseover = stop;
        wrapper.onmouseout = play;
        play();
    }
});









