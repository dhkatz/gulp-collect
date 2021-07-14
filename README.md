# gulp-collect

[![GitHub version](https://badge.fury.io/gh/dhkatz%2Fgulp-filename.svg)](https://badge.fury.io/gh/dhkatz%2Fgulp-filename) [![Build Status](https://travis-ci.com/dhkatz/gulp-filename.svg?branch=master)](https://travis-ci.com/dhkatz/gulp-filename)  [![Coverage Status](https://coveralls.io/repos/github/dhkatz/gulp-filename/badge.svg?branch=master)](https://coveralls.io/github/dhkatz/gulp-filename?branch=master) [![dependencies Status](https://david-dm.org/dhkatz/gulp-filename/status.svg)](https://david-dm.org/dhkatz/gulp-filename)

A JavaScript/TypeScript file gathering plugin for [gulp](https://github.com/gulpjs/gulp)

## Installation

```shell
npm install --save-dev @dhkatz/gulp-collect
```

## Usage

Then, add it to your `gulpfile.js`:

```typescript
const collect = require('gulp-collect');

gulp.src('src/**/*.ts')
	.pipe(collect('typescript'))
	.pipe(gulp.dest('dist/'));

gulp.src('src/**/*.js')
  .pipe(collect('javascript'))
  .pipe(gulp.dest('dist/'));

const files = filenames.get('typescript') // ['a.ts','b.ts']
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
