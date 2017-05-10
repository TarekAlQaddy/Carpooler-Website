/**
 * Created by Tarek AlQaddy on 5/6/2017.
 */
//TODO: add navbar init
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
