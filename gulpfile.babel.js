

import gulp from 'gulp';
import uglify from 'gulp-uglify';
import pump from 'pump';

gulp.task('build:js', callback => {
    pump([
      gulp.src('src/**/*.js'),
      uglify(),
      gulp.dest('dist')
    ], callback);
  });