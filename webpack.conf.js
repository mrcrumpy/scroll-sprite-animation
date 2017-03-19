var path = require('path');
var webpack = require('webpack');
var version = require('./package.json').version;

var babelReactLoader = path.resolve(__dirname, 'node_modules/babel-loader') +
    '?' + ['babel-preset-es2015', 'babel-preset-stage-0'].map(function(s) {
        // Miserable fix from https://github.com/babel/babel-loader/issues/166#issuecomment-160866946
        return 'presets[]=' + require.resolve(s);
    }).join(',');

module.exports = {
    bail: false,
    entry: [
        './src/js\/index.js'
    ],
    resolveLoader: {
        root: path.join(__dirname, "node_modules")
    },
    resolve: {
        root: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ],
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.css', '.html', '.scss'],
        alias: {
            "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
            "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
            "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
            "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
            "animation.gsap": path.resolve(__dirname, 'node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js')
        }
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: [
                    babelReactLoader
                ],
                exclude: /node_modules/
            }, {
                // HTML LOADER
                // Reference: https://github.com/webpack/raw-loader
                // Allow loading html through js
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            },{
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader" // creates style nodes from JS strings
            },
        ],
    },
    debug: true,
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'assets',
        filename: 'main.js'
    }
};
