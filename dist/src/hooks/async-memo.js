import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
function sameDeps(previous, next) {
    return previous.length === next.length && next.every((dep, index) => Object.is(dep, previous[index]));
}
export function useAsyncMemo(factory, deps, initial) {
    const [value, setValue] = useState(initial);
    const [isPending, setIsPending] = useState(false);
    const [failure, setFailure] = useState();
    const [attempt, setAttempt] = useState(0);
    // The caller owns the dependency list, as with useMemo: count a new run whenever it changes.
    const [seenDeps, setSeenDeps] = useState(deps);
    const [depsRun, setDepsRun] = useState(0);
    if (!sameDeps(seenDeps, deps)) {
        setSeenDeps(deps);
        setDepsRun(count => count + 1);
    }
    const latestFactory = useRef(factory);
    useLayoutEffect(() => {
        latestFactory.current = factory;
    });
    useEffect(() => {
        let cancel = false;
        const promise = latestFactory.current();
        if (promise === undefined || promise === null)
            return;
        // The effect starts external async work, so marking the run as started is part of syncing with it.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsPending(true);
        setFailure(undefined);
        promise.then(resolved => {
            if (cancel)
                return;
            setValue(resolved);
            setIsPending(false);
        }, (error) => {
            if (cancel)
                return;
            setFailure(error);
            setIsPending(false);
        });
        return () => {
            cancel = true;
        };
    }, [depsRun, attempt]);
    const retry = useCallback(() => {
        setAttempt(count => count + 1);
    }, []);
    return { value, isPending, failure, retry };
}
//# sourceMappingURL=async-memo.js.map