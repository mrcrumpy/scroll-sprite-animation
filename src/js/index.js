import 'css/main';
const ScrollMagic = require('ScrollMagic');
require('animation.gsap');
const TimelineMax = require('TimelineMax');

var controller = new ScrollMagic.Controller();

var tween = TweenMax.to("#js-animation", 1.0, {
    backgroundPosition: "0 100%", 
    ease: SteppedEase.config(15)
})

var scene = new ScrollMagic.Scene({duration: 1500})
    .triggerHook("onCenter")
    .setPin("#js-pinned")
    .setTween(tween)
    .addTo(controller);