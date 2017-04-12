# Responsive Sprite Animation with Scroll Control

This Project is an experiment with Sprite Animation for more advanced parallax effects.
The animation gets synchronized with the scroll position. Giving the possibility to play it for- and backward by scrolling down and upwards.

The result can be seen here: https://github.com/mrcrumpy/scroll-sprite-animation

## Why
In a previous project I was requested to develop a fullscreen background video which plays forward while scrolling down and backward while scrolling up again.
I came up with modifying the video controls via javascript. But this was an unsufficient solution as embeding a video automatically shows the videocontrol and disables autoplay on mobile devices.
So using sprites is an approach to reach the same outcome not only on desktop browsers but also on mobile devices.

## How
The simple animation of a sprite can be done by CSS (animation: sprite) but in order to animate on scroll Javascript has to be applied.
Therefore the npm packages "gsap" and "scrollmagic" are used.
So what happens: by scrolling the background position of the element will be modified in order to show a different frame of the video.
Therefore the container needs to have the exact ratio a single frame has. To achieve this in a responsive context, I made use of a simple pure CSS trick: http://www.mademyday.de/css-height-equals-width-with-pure-css.html

## Usage
1. Clone this project
2. `npm install`
3. `npm run watch`
4. Navigate to http://localhost:8080/webpack-dev-server/

## Structure
```
├── build/
├── src/
│   ├──css/
│   │   ├──...
│   │   ├──sprite.scss
│   ├──js/
│   │   ├──index.js
│   │   ├──modules/
│   │   │   ├──sprite.js
├── ...
```

The project includes a webpack build process:
- ES6 -> ES5 compilation with Babel
- Compiling Sass with Sass-Loader