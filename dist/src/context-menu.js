/** Context menu: a menu on right click. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { ContextMenu as ContextMenuPrimitive } from '@base-ui/react/context-menu';
import { CheckIcon, CaretRightIcon, CircleIcon } from '@arki/icons/phosphor';
import { cn } from './cn.js';
function ContextMenu({ ...props }) {
    return _jsx(ContextMenuPrimitive.Root, { "data-slot": "context-menu", ...props });
}
function ContextMenuTrigger({ ...props }) {
    return _jsx(ContextMenuPrimitive.Trigger, { "data-slot": "context-menu-trigger", ...props });
}
function ContextMenuGroup({ ...props }) {
    return _jsx(ContextMenuPrimitive.Group, { "data-slot": "context-menu-group", ...props });
}
function ContextMenuPortal({ ...props }) {
    return _jsx(ContextMenuPrimitive.Portal, { "data-slot": "context-menu-portal", ...props });
}
function ContextMenuSub({ ...props }) {
    return _jsx(ContextMenuPrimitive.SubmenuRoot, { "data-slot": "context-menu-sub", ...props });
}
function ContextMenuRadioGroup({ ...props }) {
    return _jsx(ContextMenuPrimitive.RadioGroup, { "data-slot": "context-menu-radio-group", ...props });
}
function ContextMenuSubTrigger({ className, inset, children, ...props }) {
    return (_jsxs(ContextMenuPrimitive.SubmenuTrigger, { "data-slot": "context-menu-sub-trigger", "data-inset": inset, className: cn("focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground flex cursor-default items-center rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), ...props, children: [children, _jsx(CaretRightIcon, { className: "ml-auto", weight: "regular" })] }));
}
function ContextMenuSubContent({ className, sideOffset = 0, alignOffset = -3, ...props }) {
    return (_jsx(ContextMenuPrimitive.Portal, { children: _jsx(ContextMenuPrimitive.Positioner, { className: "isolate z-50", side: "right", sideOffset: sideOffset, alignOffset: alignOffset, children: _jsx(ContextMenuPrimitive.Popup, { "data-slot": "context-menu-sub-content", className: cn('bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg origin-(--transform-origin) data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-closed:overflow-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className), ...props }) }) }));
}
function ContextMenuContent({ className, ...props }) {
    return (_jsx(ContextMenuPrimitive.Portal, { children: _jsx(ContextMenuPrimitive.Positioner, { className: "isolate z-50", children: _jsx(ContextMenuPrimitive.Popup, { "data-slot": "context-menu-content", className: cn('bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md origin-(--transform-origin) data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-closed:overflow-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className), ...props }) }) }));
}
function ContextMenuItem({ className, inset, variant = 'default', ...props }) {
    return (_jsx(ContextMenuPrimitive.Item, { "data-slot": "context-menu-item", "data-inset": inset, "data-variant": variant, className: cn("data-[variant=destructive]:*:[svg]:!text-destructive focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), ...props }));
}
function ContextMenuCheckboxItem({ className, children, checked, ...props }) {
    return (_jsxs(ContextMenuPrimitive.CheckboxItem, { "data-slot": "context-menu-checkbox-item", className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), checked: checked, ...props, children: [_jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: _jsx(ContextMenuPrimitive.CheckboxItemIndicator, { children: _jsx(CheckIcon, { className: "size-4", weight: "regular" }) }) }), children] }));
}
function ContextMenuRadioItem({ className, children, ...props }) {
    return (_jsxs(ContextMenuPrimitive.RadioItem, { "data-slot": "context-menu-radio-item", className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), ...props, children: [_jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: _jsx(ContextMenuPrimitive.RadioItemIndicator, { children: _jsx(CircleIcon, { className: "size-2 fill-current", weight: "regular" }) }) }), children] }));
}
function ContextMenuLabel({ className, inset, ...props }) {
    return (_jsx(ContextMenuPrimitive.GroupLabel, { "data-slot": "context-menu-label", "data-inset": inset, className: cn('text-foreground px-2 py-1.5 text-sm font-semibold data-[inset]:pl-8', className), ...props }));
}
function ContextMenuSeparator({ className, ...props }) {
    return (_jsx(ContextMenuPrimitive.Separator, { "data-slot": "context-menu-separator", className: cn('bg-border -mx-1 my-1 h-px', className), ...props }));
}
function ContextMenuShortcut({ className, ...props }) {
    return (_jsx("span", { "data-slot": "context-menu-shortcut", className: cn('text-muted-foreground ml-auto text-xs tracking-widest', className), ...props }));
}
export { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, };
//# sourceMappingURL=context-menu.js.map