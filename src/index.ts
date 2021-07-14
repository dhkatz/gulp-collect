import { Transform, TransformCallback } from 'stream'

import File = require('vinyl')

export interface CollectorOptions {
  /**
   * Override existing files in the namespace list
   */
  override?: boolean
}

export class Collector extends Function {
  private namespaces: Map<string | symbol, File[]> = new Map()

  public DEFAULT = Symbol('default')

  public constructor() {
    super()

    return new Proxy(this, {
      // eslint-disable-next-line
            apply: (target: this, thisArg: this, args: any[]): any => {
        return this.__call__(...args)
      },
    })
  }

  public __call__(
    namespace: string | symbol = this.DEFAULT,
    options: CollectorOptions = {}
  ): Transform {
    if (options.override) {
      this.namespaces.set(namespace, [])
    }

    return new Transform({
      objectMode: true,
      transform: (file: File, encoding: BufferEncoding, callback: TransformCallback) => {
        this.register(namespace, file)

        callback(null, file)
      },
    })
  }

  /**
   * Retrieve an array of file names/paths for a given namespace.
   * @param {string | symbol} namespace Custom file namespace name
   */
  public get(namespace: string | symbol = this.DEFAULT): File[] {
    if (!this.namespaces.has(namespace)) this.namespaces.set(namespace, [])

    return this.namespaces.get(namespace)
  }

  public all(): Map<string | symbol, File[]> {
    return this.namespaces
  }

  /**
   * Reset the namespace for the given namespace.
   * @param {string | symbol} namespace Name of file namespace
   */
  public forget(namespace: string | symbol = this.DEFAULT): void {
    this.namespaces.set(namespace, [])
  }

  /**
   * Reset all filenames
   */
  public clear(): void {
    this.namespaces = new Map<string | symbol, File[]>()
  }

  public register(namespace: string | symbol = this.DEFAULT, file: File): void {
    if (!this.namespaces.has(namespace)) {
      this.namespaces.set(namespace, [])
    }

    this.namespaces.get(namespace).push(file)
  }

  public [Symbol.iterator](): IterableIterator<[string | symbol, File[]]> {
    return this.namespaces.entries()
  }
}

const collect = new Collector()

module.exports = collect

export default collect
