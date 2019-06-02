import vinyl from 'vinyl';
import through from 'through2';
import { Transform } from 'stream';

export type PathType = 'relative' | 'all' | 'absolute' | 'base';

export interface File {
    relative: string;
    absolute: string;
    base: string;
}

export interface Options {
    /**
     * Override existing files in the namespace list
     */
    override: boolean;
}

export interface Filenames {
    (name?: string | symbol, options?: Options): Transform;
}

export class Filenames extends Function {
    private names: Map<string | symbol, File[]> = new Map();

    public DEFAULT: symbol = Symbol('default');

    public constructor() {
        super();
        
        return new Proxy(this, {
            // eslint-disable-next-line
            apply: (target: this, thisArg: this, args: any[]): any => {
                return this.__call__(...args);
            },
        });
    }

    public __call__(name: string | symbol = this.DEFAULT, options: Options = { override: false }): Transform {
        if (typeof name === 'string' && name === 'all') throw new Error(`'${name}' is a reserved namespace and cannot be used!`);

        if (options.override) {
            this.names.set(name, []);
        }

        return through.obj((file: vinyl.StreamFile, enc: string, callback: through.TransformCallback): void => {
            this.register(file, name, { ...options, override: false });

            callback(null, file);
        });
    }

    /**
     * Retrieve an array of file names/paths for a given namespace.
     * @param {string | symbol} name Custom file namespace name
     * @param {PathType} type Type of path to retrieve for each file
     */
    public get(name: 'all', type?: PathType): Map<string | symbol, File[]>;
    public get(name?: string | symbol, type?: PathType): string[];
    public get(name: string | symbol, type: 'all'): File[];
    public get(name: 'all' | string | symbol = this.DEFAULT, type: PathType = 'relative'): Map<string | symbol, File[]> | string[] | File[] {
        if (typeof name === 'string' && name === 'all') return this.names;

        if (!this.names.has(name)) this.names.set(name, []);

        const files = this.names.get(name);

        switch (type) {
            case 'all':
                return files;
            case 'absolute':
                return files.map((file: File): string => file.absolute);
            case 'base':
                return files.map((file: File): string => file.base);
            case 'relative':
            default:
                return files.map((file: File): string => file.relative);
        }
    }

    /**
     * Reset the namespace for the given namespace.
     * @param {string | symbol} name Name of file namespace
     */
    public forget(name: 'all' | string | symbol = this.DEFAULT): void {
        if (typeof name === 'string' && name === 'all') {
            this.names = new Map();
        } else {
            this.names.set(name, []);
        }
    }

    public register(file: vinyl.StreamFile, name: string | symbol = this.DEFAULT, options: Options = { override: false }): void {
        if (options.override || !this.names.has(name))  {
            this.names.set(name, []);
        }

        this.names.get(name).push({
            relative: file.relative,
            absolute: file.path,
            base: file.base,
        });
    }
}

const filenames = new Filenames();

module.exports = filenames;

export default filenames;
