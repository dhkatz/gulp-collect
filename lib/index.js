"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const through2_1 = tslib_1.__importDefault(require("through2"));
class Filenames extends Function {
    constructor() {
        super();
        this.names = new Map();
        this.DEFAULT = Symbol('default');
        return new Proxy(this, {
            // eslint-disable-next-line
            apply: (target, thisArg, args) => {
                return this.__call__(...args);
            },
        });
    }
    __call__(name = this.DEFAULT, options = { override: false }) {
        if (typeof name === 'string' && name === 'all')
            throw new Error(`'${name}' is a reserved namespace and cannot be used!`);
        if (options.override) {
            this.names.set(name, []);
        }
        return through2_1.default.obj((file, enc, callback) => {
            this.register(file, name, Object.assign({}, options, { override: false }));
            callback(null, file);
        });
    }
    get(name = this.DEFAULT, type = 'relative') {
        if (typeof name === 'string' && name === 'all')
            return this.names;
        /* istanbul ignore next */
        if (!this.names.has(name))
            this.names.set(name, []);
        const files = this.names.get(name);
        switch (type) {
            case 'all':
                return files;
            case 'absolute':
                return files.map((file) => file.absolute);
            case 'base':
                return files.map((file) => file.base);
            case 'relative':
            default:
                return files.map((file) => file.relative);
        }
    }
    /**
     * Reset the namespace for the given namespace.
     * @param {string | symbol} name Name of file namespace
     */
    forget(name = this.DEFAULT) {
        if (typeof name === 'string' && name === 'all') {
            this.names = new Map();
        }
        else {
            this.names.set(name, []);
        }
    }
    register(file, name = this.DEFAULT, options = { override: false }) {
        if (options.override || !this.names.has(name)) {
            this.names.set(name, []);
        }
        this.names.get(name).push({
            relative: file.relative,
            absolute: file.path,
            base: file.base,
        });
    }
}
exports.Filenames = Filenames;
const filenames = new Filenames();
module.exports = filenames;
exports.default = filenames;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsZ0VBQStCO0FBc0IvQixNQUFhLFNBQVUsU0FBUSxRQUFRO0lBS25DO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFMSixVQUFLLEdBQWlDLElBQUksR0FBRyxFQUFFLENBQUM7UUFFakQsWUFBTyxHQUFXLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUt2QyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtZQUNuQiwyQkFBMkI7WUFDM0IsS0FBSyxFQUFFLENBQUMsTUFBWSxFQUFFLE9BQWEsRUFBRSxJQUFXLEVBQU8sRUFBRTtnQkFDckQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxRQUFRLENBQUMsT0FBd0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFtQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7UUFDeEYsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLEtBQUs7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSwrQ0FBK0MsQ0FBQyxDQUFDO1FBRXpILElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDNUI7UUFFRCxPQUFPLGtCQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBbUMsRUFBUSxFQUFFO1lBQ2xHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksb0JBQU8sT0FBTyxJQUFFLFFBQVEsRUFBRSxLQUFLLElBQUcsQ0FBQztZQUUzRCxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FB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