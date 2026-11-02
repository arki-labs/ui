/** `useAsyncMemo`: the result of an async function, recomputed when its dependencies change, with stale results dropped. A rejected promise becomes `failure`, and `retry()` runs the function again. */
import type { DependencyList } from 'react';
export type AsyncMemo<Value> = {
    /** The last resolved value, or `initial` until one resolves. A failed run keeps the previous value. */
    value: Value;
    /** True from the start of a run until it resolves or rejects. */
    isPending: boolean;
    /** The value the last run rejected with, or `undefined` when it did not reject. A new run clears it. */
    failure: unknown;
    /** Runs the function again with the same dependencies. */
    retry: () => void;
};
export declare function useAsyncMemo<T>(factory: () => Promise<T> | undefined | null, deps: DependencyList): AsyncMemo<T | undefined>;
export declare function useAsyncMemo<T>(factory: () => Promise<T> | undefined | null, deps: DependencyList, initial: T): AsyncMemo<T>;
//# sourceMappingURL=async-memo.d.ts.map