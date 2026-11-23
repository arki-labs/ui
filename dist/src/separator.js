/** Separator: a divider line. */
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Separator as SeparatorPrimitive } from '@base-ui/react/separator';
import { cn } from './cn.js';
function Separator({ className, orientation = 'horizontal', ...props }) {
    return (_jsx(SeparatorPrimitive, { "data-slot": "separator-root", orientation: orientation, className: cn('bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:h-full data-vertical:w-px', className), ...props }));
}
export { Separator };
//# sourceMappingURL=separator.js.map