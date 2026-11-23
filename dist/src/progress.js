/** Progress: a progress bar. */
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Progress as ProgressPrimitive } from '@base-ui/react/progress';
import { cn } from './cn.js';
function Progress({ className, value, indicatorClassName, ...props }) {
    return (_jsx(ProgressPrimitive.Root, { "data-slot": "progress", value: value, className: cn('relative h-2 w-full overflow-hidden rounded-full bg-primary/20', className), ...props, children: _jsx(ProgressPrimitive.Track, { className: "h-full w-full", children: _jsx(ProgressPrimitive.Indicator, { "data-slot": "progress-indicator", className: cn('h-full bg-primary transition-all', indicatorClassName) }) }) }));
}
export { Progress };
//# sourceMappingURL=progress.js.map