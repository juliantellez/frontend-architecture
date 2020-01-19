/**
 * Utility to allow object to be constructed
 * e.g. new Model()
 */
type Newable<T> = new () => T;

export default Newable;
