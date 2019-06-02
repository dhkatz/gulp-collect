
# gulp-filenames

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

A JavaScript/TypeScript file name gathering plugin for [gulp](https://github.com/gulpjs/gulp)

## Installation

```shell
npm install --save-dev gulp-filenames
```

## Usage

Then, add it to your `gulpfile.js`:

```typescript
const filenames = require("gulp-filenames");

gulp.src("src/**/*.ts")
	.pipe(filenames("typescript"))
	.pipe(gulp.dest("dist/"));

gulp.src("src/**/*.js")
  .pipe(filenames("javascript"))
  .pipe(gulp.dest("dist/"));

filenames.get("typescript") // ["a.ts","b.ts"]
                              // Do Something With it
```

## API

### filenames([name], [options])

#### name

Namespace the filenames. Do not use the name "all" which is reserved by gulp-filenames to retrieve all namespaces.

### options

#### override (default: false)

override previous files when a new one passes through

### filenames.get([name], [type])

#### name
Get only these filenames ("all" to get everything)

#### type

"relative" or "full" or "base" for an array of filenames

"all" for an array of objects

### filenames.forget(name)

#### name
Forget the filenames stored in namespace "name" ("all" to forget all files). gulp-filenames does not clear a namespace between runs by design.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[npm-url]: https://npmjs.org/package/gulp-filenames
[npm-image]: https://badge.fury.io/js/gulp-filenames.png

[travis-url]: http://travis-ci.com/dhkatz/gulp-filenames
[travis-image]: https://secure.travis-ci.com/dhkatz/gulp-filenames.png?branch=master

[coveralls-url]: https://coveralls.io/r/dhkatz/gulp-filenames
[coveralls-image]: https://coveralls.io/repos/dhkatz/gulp-filenames/badge.png

[depstat-url]: https://david-dm.org/dhkatz/gulp-filenames
[depstat-image]: https://david-dm.org/dhkatz/gulp-filenames.png
