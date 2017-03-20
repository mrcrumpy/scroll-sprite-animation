# Responsive Sprite Animation with Scroll Control

This Project is an experiment with Sprite Animation for more advanced parallax effects.
The animation gets synchronized with the scroll position. Giving the possibility to play it for- and backward by scrolling down and upwards.

The result can be seen here: https://github.com/mrcrumpy/scroll-sprite-animation

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