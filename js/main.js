/**
 * Created by Tarek AlQaddy on 5/6/2017.
 */
//TODO: add navbar init


$(document).ready(function () {
    var par = $('#how-it-works');
    var offset = (window.innerHeight-500)/2;
    $('#iphone').stick_in_parent({
        parent: par,
        offset_top: offset
    });



    var controller = new ScrollMagic.Controller();

// new ScrollMagic.Scene({triggerElement:'#sec1', duration: 1600, offset: 400}).setPin('#iphone').addTo(controller);

    new ScrollMagic.Scene({triggerElement:'#sec2'}).setClassToggle('#screen2', 'visible').addTo(controller);
    new ScrollMagic.Scene({triggerElement:'#sec3'}).setClassToggle('#screen3', 'visible').addTo(controller);


    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var box3 = document.getElementById('box3');
    var why = document.getElementById('why-carpooler');
    var height = why.clientHeight;

    new ScrollMagic.Scene({triggerElement: why, duration: height, offset: -50})
        .setTween(TweenMax.from(box1, 1, {x:-100, y:100}))
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: why, duration: height, offset: -50})
        .setTween(TweenMax.from(box2, 1, {x:150, y:-150}))
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: box2, duration: height, offset: -50})
        .setTween(TweenMax.from(box3, 1, {x:200,y:100}))
        .addTo(controller)


});
