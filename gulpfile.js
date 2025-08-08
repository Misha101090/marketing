const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const del = require("del");

function clean() {
    return del(["dist"]);
}

function copyStatic() {
    return src("public/**/*").pipe(dest("dist")).pipe(browserSync.stream());
}

function copyAssets() {
    return src("src/assets/**/*").pipe(dest("dist/assets")).pipe(browserSync.stream());
}

function styles() {
    return src("src/styles/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write("."))
        .pipe(dest("dist"))
        .pipe(browserSync.stream());
}

function scripts() {
    return src([
        "src/scripts/banner-change-image.js",
        "src/scripts/parallax.js",
        "src/scripts/vertical-slider.js",
        "src/scripts/animation-cards.js",
        "src/scripts/steps-animation.js",
        "src/scripts/modal.js",
        "src/scripts/send-request.js",
        "src/scripts/anchor.js",
        "src/scripts/client-slider-mobile.js",
        "src/scripts/faq.js",
    ])
        .pipe(sourcemaps.init())
        .pipe(concat("bundle.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(dest("dist"))
        .pipe(browserSync.stream());
}

function serve() {
    browserSync.init({
        server: "dist",
        port: 3000,
        open: false,
    });

    watch("public/**/*", copyStatic);
    watch("src/assets/**/*", copyAssets);
    watch("src/styles/**/*.scss", styles);
    watch("src/scripts/**/*.js", scripts);
}

exports.clean = clean;
exports.build = series(clean, parallel(copyStatic, copyAssets, styles, scripts));
exports.default = series(clean, parallel(copyStatic, copyAssets, styles, scripts), serve);
