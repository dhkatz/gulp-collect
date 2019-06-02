
# gulp-filenames

[![GitHub version](https://badge.fury.io/gh/dhkatz%2Fgulp-filenames.svg)](https://badge.fury.io/gh/dhkatz%2Fgulp-filenames) [![Build Status](https://travis-ci.com/dhkatz/gulp-filenames.svg?branch=master)](https://travis-ci.com/dhkatz/gulp-filenames)  [![Coverage Status](https://coveralls.io/repos/github/dhkatz/gulp-filenames/badge.svg?branch=master)](https://coveralls.io/github/dhkatz/gulp-filenames?branch=master) [![dependencies Status](https://david-dm.org/dhkatz/gulp-filenames/status.svg)](https://david-dm.org/dhkatz/gulp-filenames)

A JavaScript/TypeScript file name gathering plugin for [gulp](https://github.com/gulpjs/gulp)

## Installation

```shell
npm install --save-dev dhkatz/gulp-filenames
```

## Usage

Then, add it to your `gulpfile.js`:

```typescript
const filenames = require('gulp-filenames');

gulp.src('src/**/*.ts')
	.pipe(filenames('typescript'))
	.pipe(gulp.dest('dist/'));

gulp.src('src/**/*.js')
  .pipe(filenames('javascript'))
  .pipe(gulp.dest('dist/'));

const files = filenames.get('typescript') // ['a.ts','b.ts']
```

## API

### filenames([name], [options])

#### name

Namespace the filenames. Do not use the name "all" which is reserved by gulp-filenames to retrieve all namespaces.

### options

#### override (default: false)

Override previous files within the specified namespace when a new collection begins

### filenames.get([name], [type])

#### name
Get only these filenames ("all" to get everything)

#### type

"relative" or "absolute" or "base" for an array of filenames

"all" for an array of objects

### filenames.forget([name])

#### name
Forget the filenames stored in namespace "name" ("all" to forget all files). gulp-filenames does not clear a namespace between runs by design.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
