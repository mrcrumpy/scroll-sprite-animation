import 'css/sprite';
import ScrollMagic from 'ScrollMagic';
import TimelineMax from 'TimelineMax';
import 'animation.gsap';

const controller = new ScrollMagic.Controller();

function sprite(n, element, parent, trigger = "onCenter", duration = 1000){

    const tween = TweenMax.to(element, 1.0, {
        backgroundPosition: "0 100%", 
        ease: SteppedEase.config(n)
    })

    const scene = new ScrollMagic.Scene({duration})
        .triggerHook(trigger)
        .setTween(tween)
        .addTo(controller);

    return true;
};

export {sprite};