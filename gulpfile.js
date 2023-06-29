const { src, dest, watch, series } = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const browsersync = require("browser-sync").create()
// const webp = require("gulp-webp")
const autoprefixer = require("autoprefixer")
const postcss = require("gulp-postcss")

// Browsersync Tasks
function browsersyncServe(d) {
 browsersync.init({
  server: {
   baseDir: "docs",
  },
 })
 d()
}

function browsersyncReload(d) {
 browsersync.reload()
 d()
}

// html task
function htmlTask() {
 return src("src/*.html").pipe(dest("docs"))
}

// scss task
function scssTask() {
 return src("src/scss/style.scss")
  .pipe(sass())
  .pipe(postcss([autoprefixer()]))
  .pipe(dest("docs/css"))
}

// js task
function jsTask() {
 return src("src/js/*.js").pipe(dest("docs/js"))
}

// img task
// function webpTask() {
//  return src("src/img/*.{jpg,jpeg,png}").pipe(webp()).pipe(dest("docs/img"))
// }

function imgCopyTask() {
 return src("src/img/*").pipe(dest("docs/img"))
}

// Watch Task
function watchTask() {
 watch("src/*.html", series(htmlTask, browsersyncReload))
 watch("src/scss/**/*.scss", series(scssTask, browsersyncReload))
 watch("src/js/**/*.js", series(jsTask, browsersyncReload))
}

// Default Gulp task
exports.default = series(htmlTask, scssTask, jsTask, imgCopyTask, browsersyncServe, watchTask)