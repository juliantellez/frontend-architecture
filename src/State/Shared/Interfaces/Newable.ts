/**
 * Utility to allow object to be constructed
 * e.g. new Model()
 */
type Newable<T, U> = new (...args: U[]) => T;

export default Newable;
