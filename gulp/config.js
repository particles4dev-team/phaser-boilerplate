var dest = './build',
    src = './src';

module.exports = {
    browserSync: {
        server: {
            // We're serving the src folder as well
            // for sass sourcemap linking
            baseDir: [dest, src]
        },
        files: [
            dest + '/**'
        ],
        // https://github.com/expressjs/serve-static
        // https://github.com/BrowserSync/browser-sync/issues/514
        middleware: require("serve-static")(".src/assets")
    },
    markup: {
        src: [
            "node_modules/phaser/build/phaser.js",
            src + "/www/**",
            src + "/app/**"
        ],
        dest: dest,
        // https://medium.com/@mattdesl/gulp-and-browserify-shim-f1c587cb56b9 
    },
    browserify: {
        // Enable source maps
        debug: true,
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/app/main.js',
            dest: dest,
            outputName: 'app.js'
        }]
    },
    cordova: {
        js: [
            "node_modules/phaser/build/phaser.js",
            dest + "/app.js"
        ],
        assets: [
            src + "/assets/**"
        ],
        css: [],
        index: "",
        path: "../cordova/www/"
    }
};