import 'css/sprite';

const ScrollMagic = require('ScrollMagic');
require('animation.gsap');
const TimelineMax = require('TimelineMax');

const controller = new ScrollMagic.Controller();

function sprite(n, element, parent, trigger){

        const tween = TweenMax.to(element, 1.0, {
            backgroundPosition: "0 100%", 
            ease: SteppedEase.config(n)
        })

        const scene = new ScrollMagic.Scene({duration: 1500})
            .triggerHook(trigger)
            .setPin(parent)
            .setTween(tween)
            .addTo(controller);

        return true;
};

export {sprite};