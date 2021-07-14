import { createReadStream } from 'fs'
import { src, dest } from 'gulp'

import source from 'vinyl-source-stream'

import collect from '../src'

describe('gulp-filename', (): void => {
  afterEach((): void => {
    collect.clear()
  })

  it('Should grab the name of every file that passes through it', (done): void => {
    src('test/files/**/*.*')
      .pipe(collect())
      .pipe(dest('.temp/'))
      .on('end', (): void => {
        expect(collect.get()).toHaveLength(4)

        done()
      })
  })

  it('Supports namespacing', (done): void => {
    src('test/files/**/*.txt')
      .pipe(collect('txt'))
      .pipe(dest('.temp/'))
      .on('end', (): void => {
        const files = collect.get('txt')
        expect(files).toHaveLength(2)

        done()
      })
  })

  it('Can forget', (done): void => {
    src('test/files/**/*.txt')
      .pipe(collect('txt'))
      .pipe(dest('.temp/'))
      .on('end', (): void => {
        expect(collect.get('txt')).toHaveLength(2)

        collect.forget('txt')

        expect(collect.get('txt')).toHaveLength(0)

        done()
      })
  })

  it('Support overriding previous file on new one through override', (done): void => {
    src('test/files/**/*.*')
      .pipe(collect('override'))
      .pipe(dest('.temp/'))
      .on('end', (): void => {
        expect(collect.get('override')).toHaveLength(4)

        src('test/files/**/*.txt')
          .pipe(collect('override', { override: true }))
          .pipe(dest('.temp/'))
          .on('end', (): void => {
            expect(collect.get('override')).toHaveLength(2)

            done()
          })
      })
  })

  it('Supports empty files', (done): void => {
    src('test/files/**/*.empty')
      .pipe(collect())
      .pipe(dest('.temp/'))
      .on('end', (): void => {
        const files = collect.get()
        expect(files).toHaveLength(1)

        done()
      })
  })

  it("Should allow the 'default' namespace", (done): void => {
    src('test/files/**/*.*')
      .pipe(collect('default'))
      .pipe(dest('.temp/'))
      .on('end', (): void => {
        expect(collect.get('default')).toHaveLength(4)

        done()
      })
  })

  it('Works with streams', (done): void => {
    createReadStream('test/files/a.cc')
      .pipe(source('a.cc'))
      .pipe(collect('streams'))
      .pipe(dest('.temp/'))
      .on('end', (): void => {
        const streams = collect.get('streams')
        expect(streams).toHaveLength(1)

        done()
      })
  })

  it('Should allow retrieving all namespaces', (done): void => {
    src('test/files/**/*.*')
      .pipe(collect())
      .pipe(dest('.temp/'))
      .on('end', (): void => {
        const names = collect.all()

        expect(names).toBeInstanceOf(Map)
        expect(names.size).toBe(1)
        expect(names.get(collect.DEFAULT)).toHaveLength(4)

        done()
      })
  })
})
