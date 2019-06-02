/// <reference types="node" />
import vinyl from 'vinyl';
import { Transform } from 'stream';
export declare type PathType = 'relative' | 'all' | 'absolute' | 'base';
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
export declare class Filenames extends Function {
    private names;
    DEFAULT: symbol;
    constructor();
    __call__(name?: string | symbol, options?: Options): Transform;
    /**
     * Retrieve an array of file names/paths for a given namespace.
     * @param {string | symbol} name Custom file namespace name
     * @param {PathType} type Type of path to retrieve for each file
     */
    get(name: 'all', type?: PathType): Map<string | symbol, File[]>;
    get(name?: string | symbol, type?: PathType): string[];
    get(name: string | symbol, type: 'all'): File[];
    /**
     * Reset the namespace for the given namespace.
     * @param {string | symbol} name Name of file namespace
     */
    forget(name?: 'all' | string | symbol): void;
    register(file: vinyl.StreamFile, name?: string | symbol, options?: Options): void;
}
declare const filenames: Filenames;
export default filenames;
