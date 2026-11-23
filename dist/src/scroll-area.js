/** Scroll area: a scroll region with styled scrollbars. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area';
import { cn } from './cn.js';
function ScrollArea({ className, children, ...props }) {
    return (_jsxs(ScrollAreaPrimitive.Root, { "data-slot": "scroll-area", className: cn('relative', className), ...props, children: [_jsx(ScrollAreaPrimitive.Viewport, { "data-slot": "scroll-area-viewport", className: "size-full rounded-[inherit] outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1", children: children }), _jsx(ScrollBar, {}), _jsx(ScrollAreaPrimitive.Corner, {})] }));
}
function ScrollBar({ className, orientation = 'vertical', ...props }) {
    return (_jsx(ScrollAreaPrimitive.Scrollbar, { "data-slot": "scroll-area-scrollbar", orientation: orientation, className: cn('flex touch-none p-px transition-colors select-none data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent', className), ...props, children: _jsx(ScrollAreaPrimitive.Thumb, { "data-slot": "scroll-area-thumb", className: "bg-border relative flex-1 rounded-full" }) }));
}
export { ScrollArea, ScrollBar };
//# sourceMappingURL=scroll-area.js.map