/** Sheet: a panel that slides in from a screen edge. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { Dialog as SheetPrimitive } from '@base-ui/react/dialog';
import { XIcon } from '@arki/icons/phosphor';
import { withAsChild } from './as-child.js';
import { cn } from './cn.js';
function Sheet({ ...props }) {
    return _jsx(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({ asChild, children, ...props }) {
    return (_jsx(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props, ...withAsChild({ asChild, children }) }));
}
function SheetClose({ ...props }) {
    return _jsx(SheetPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({ ...props }) {
    return _jsx(SheetPrimitive.Portal, { ...props });
}
function SheetOverlay({ className, ...props }) {
    return (_jsx(SheetPrimitive.Backdrop, { "data-slot": "sheet-overlay", className: cn('fixed inset-0 z-50 bg-black/50 transition-opacity duration-200 data-starting-style:opacity-0 data-ending-style:opacity-0', className), ...props }));
}
function SheetContent({ className, children, side = 'right', ...props }) {
    return (_jsxs(SheetPortal, { children: [_jsx(SheetOverlay, {}), _jsxs(SheetPrimitive.Popup, { "data-slot": "sheet-content", "data-side": side, className: cn('bg-background fixed z-50 flex flex-col gap-4 shadow-lg outline-none transition duration-200 ease-in-out data-starting-style:opacity-0 data-ending-style:opacity-0', side === 'right' &&
                    'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm data-starting-style:translate-x-[2.5rem] data-ending-style:translate-x-[2.5rem]', side === 'left' &&
                    'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm data-starting-style:-translate-x-[2.5rem] data-ending-style:-translate-x-[2.5rem]', side === 'top' &&
                    'inset-x-0 top-0 h-auto border-b data-starting-style:-translate-y-[2.5rem] data-ending-style:-translate-y-[2.5rem]', side === 'bottom' &&
                    'inset-x-0 bottom-0 h-auto border-t data-starting-style:translate-y-[2.5rem] data-ending-style:translate-y-[2.5rem]', className), ...props, children: [children, _jsxs(SheetPrimitive.Close, { className: "ring-offset-background data-open:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [_jsx(XIcon, { className: "size-4", weight: "regular" }), _jsx("span", { className: "sr-only", children: "Close" })] })] })] }));
}
function SheetHeader({ className, ...props }) {
    return _jsx("div", { "data-slot": "sheet-header", className: cn('flex flex-col gap-1.5 p-4', className), ...props });
}
function SheetFooter({ className, ...props }) {
    return _jsx("div", { "data-slot": "sheet-footer", className: cn('mt-auto flex flex-col gap-2 p-4', className), ...props });
}
function SheetTitle({ className, ...props }) {
    return (_jsx(SheetPrimitive.Title, { "data-slot": "sheet-title", className: cn('text-foreground font-semibold tracking-tight', className), ...props }));
}
function SheetDescription({ className, ...props }) {
    return (_jsx(SheetPrimitive.Description, { "data-slot": "sheet-description", className: cn('text-muted-foreground text-sm', className), ...props }));
}
export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger };
//# sourceMappingURL=sheet.js.map