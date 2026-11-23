import { jsx as _jsx } from "react/jsx-runtime";
/** Skeleton: a grey placeholder while content loads. */
import { cn } from './cn.js';
function Skeleton({ className, ...props }) {
    return (_jsx("div", { "data-slot": "skeleton", className: cn('bg-primary/10 motion-safe:animate-pulse rounded-md', className), ...props }));
}
export { Skeleton };
//# sourceMappingURL=skeleton.js.map