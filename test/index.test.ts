import { createReadStream } from 'fs';
import { src, dest } from 'gulp';
import { Transform } from 'stream';
import source from 'vinyl-source-stream';

import filenames from '../src';


describe('gulp-filesnames', (): void => {
    afterEach((): void => {
        filenames.forget('all');
    });

    it('Should grab the name of every file that passes through it', (done): void => {
        src('test/files/**/*.*')
            .pipe(filenames())
            .pipe(dest('test/dump/'))
            .on('end', (): void => {
                expect(filenames.get()).toEqual(['a.cc', 'a.empty', 'a.txt','b.txt']);

                done();
            });
    });

    it('Should support absolute paths', (done): void => {
        src('test/files/**/*.*')
            .pipe(filenames())
            .pipe(dest('test/dump/'))
            .on('end', (): void => {
                filenames.get(filenames.DEFAULT, 'absolute').forEach((file: string): void => {
                    expect(file.includes('test/files/')).toBeTruthy();
                });

                done();
            });
    });

    it('Should support absolute paths', (done): void => {
        src('test/files/**/*.*')
            .pipe(filenames())
            .pipe(dest('test/dump/'))
            .on('end', (): void => {
                filenames.get(filenames.DEFAULT, 'base').forEach((file: string): void => {
                    expect(file.includes('test/files/')).toBeTruthy();
                });

                done();
            });
    });

    it('Supports namespacing', (done): void => {
        src('test/files/**/*.txt')
            .pipe(filenames('txt'))
            .pipe(dest('test/dump'))
            .on('end', (): void => {
                expect(filenames.get('txt')).toEqual(['a.txt', 'b.txt']);

                done();
            });
    });

    it('Can retrieve different things using options', (done): void => {
        src('test/files/**/*.txt')
            .pipe(filenames('txt'))
            .pipe(dest('test/dump'))
            .on('end', (): void => {
                expect(typeof filenames.get('txt', 'all')[0]).toBe('object');
                expect(typeof filenames.get('txt', 'relative')[0]).toBe('string');

                done();
            });
    });

    it('Can forget', (done): void => {
        src('test/files/**/*.txt')
            .pipe(filenames('txt'))
            .pipe(dest('test/dump'))
            .on('end', (): void => {
                expect(filenames.get('txt')).toHaveLength(2);

                filenames.forget('txt');

                expect(filenames.get('txt')).toHaveLength(0);

                done();
            });
    });

    it('Support overriding previous file on new one through override', (done): void => {
        src('test/files/**/*.*')
            .pipe(filenames('override'))
            .pipe(dest('test/dump/'))
            .on('end', (): void => {
                expect(filenames.get('override')).toEqual(['a.cc', 'a.empty', 'a.txt','b.txt']);

                src('test/files/**/*.txt')
                    .pipe(filenames('override', { override: true }))
                    .pipe(dest('test/dump/'))
                    .on('end', (): void => {
                        expect(filenames.get('override')).toHaveLength(2);

                        done();
                    });
            });
    });

    it('Supports empty files', (done): void => {
        src('test/files/**/*.empty')
            .pipe(filenames())
            .pipe(dest('test/dump/'))
            .on('end', (): void => {
                expect(filenames.get()).toEqual(['a.empty']);

                done();
            });
    });

    it('Should not allow the \'all\' namespace', (done): void => {
        expect(((): Transform => src('test/files/**/*.empty').pipe(filenames('all')))).toThrow();

        done();
    });

    it('Should allow the \'default\' namespace', (done): void => {
        src('test/files/**/*.*')
            .pipe(filenames('default'))
            .pipe(dest('test/dump/'))
            .on('end', (): void => {
                expect(filenames.get('default')).toEqual(['a.cc', 'a.empty', 'a.txt','b.txt']);

                done();
            });
    });

    it('Works with streams', (done): void => {
        createReadStream('test/files/a.cc')
            .pipe(source('a.cc'))
            .pipe(filenames('streams'))
            .pipe(dest('test/dump/'))
            .on('end', (): void => {
                expect(filenames.get('streams')).toEqual(['a.cc']);

                done();
            });
    });
});
