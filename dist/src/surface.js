import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from './cn.js';
export function Surface({ children, className, withShadow = true, withBorder = true, ...props }) {
    const surfaceClass = cn('rounded-lg bg-white dark:bg-black', withShadow ? 'shadow-xs' : '', withBorder ? 'border border-neutral-200 dark:border-neutral-800' : '', className);
    return (_jsx("div", { className: surfaceClass, ...props, children: children }));
}
Surface.displayName = 'Surface';
//# sourceMappingURL=surface.js.map