/**
 * Utility to allow object to be constructed
 * e.g. new Model()
 */
type INewable<T> = new (...args: any[]) => T;

export default INewable;
