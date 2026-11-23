/** Dropdown menu: a menu that opens from a button. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { CheckIcon, CaretRightIcon, CircleIcon } from '@arki/icons/phosphor';
import { withAsChild } from './as-child.js';
import { cn } from './cn.js';
function DropdownMenu({ ...props }) {
    return _jsx(MenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({ ...props }) {
    return _jsx(MenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({ asChild, children, ...props }) {
    return (_jsx(MenuPrimitive.Trigger, { "data-slot": "dropdown-menu-trigger", ...props, ...withAsChild({ asChild, children }) }));
}
function DropdownMenuContent({ className, sideOffset = 4, align = 'start', side = 'bottom', alignOffset = 0, ...props }) {
    return (_jsx(MenuPrimitive.Portal, { children: _jsx(MenuPrimitive.Positioner, { className: "isolate z-50", align: align, alignOffset: alignOffset, side: side, sideOffset: sideOffset, children: _jsx(MenuPrimitive.Popup, { "data-slot": "dropdown-menu-content", className: cn('bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md origin-(--transform-origin) data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-closed:overflow-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className), ...props }) }) }));
}
function DropdownMenuGroup({ ...props }) {
    return _jsx(MenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
    return (_jsx(MenuPrimitive.Item, { "data-slot": "dropdown-menu-item", "data-inset": inset, "data-variant": variant, className: cn("data-[variant=destructive]:*:[svg]:!text-destructive focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), ...props }));
}
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return (_jsxs(MenuPrimitive.CheckboxItem, { "data-slot": "dropdown-menu-checkbox-item", className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), checked: checked, ...props, children: [_jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: _jsx(MenuPrimitive.CheckboxItemIndicator, { children: _jsx(CheckIcon, { className: "size-4", weight: "regular" }) }) }), children] }));
}
function DropdownMenuRadioGroup({ ...props }) {
    return _jsx(MenuPrimitive.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...props });
}
function DropdownMenuRadioItem({ className, children, ...props }) {
    return (_jsxs(MenuPrimitive.RadioItem, { "data-slot": "dropdown-menu-radio-item", className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), ...props, children: [_jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: _jsx(MenuPrimitive.RadioItemIndicator, { children: _jsx(CircleIcon, { className: "size-2 fill-current", weight: "regular" }) }) }), children] }));
}
/**
 * Visual heading inside a dropdown menu. Stands alone — does NOT require a `DropdownMenuGroup`
 * ancestor. Renders a plain styled `<div>` (no ARIA group-label association).
 *
 * For proper Group-Label ARIA wiring, wrap items in `DropdownMenuGroup` and use
 * `DropdownMenuGroupLabel` instead.
 */
function DropdownMenuLabel({ className, inset, ...props }) {
    return (_jsx("div", { "data-slot": "dropdown-menu-label", "data-inset": inset, className: cn('px-2 py-1.5 text-sm font-semibold data-[inset]:pl-8', className), ...props }));
}
/**
 * Heading for a `DropdownMenuGroup` with proper ARIA group-label association.
 * MUST be rendered as a child of `DropdownMenuGroup` — BaseUI's `Menu.GroupLabel` asserts
 * the Group context at render time.
 */
function DropdownMenuGroupLabel({ className, inset, ...props }) {
    return (_jsx(MenuPrimitive.GroupLabel, { "data-slot": "dropdown-menu-group-label", "data-inset": inset, className: cn('px-2 py-1.5 text-sm font-semibold data-[inset]:pl-8', className), ...props }));
}
function DropdownMenuSeparator({ className, ...props }) {
    return (_jsx(MenuPrimitive.Separator, { "data-slot": "dropdown-menu-separator", className: cn('bg-border -mx-1 my-1 h-px', className), ...props }));
}
function DropdownMenuShortcut({ className, ...props }) {
    return (_jsx("span", { "data-slot": "dropdown-menu-shortcut", className: cn('text-muted-foreground ml-auto text-xs tracking-widest', className), ...props }));
}
function DropdownMenuSub({ ...props }) {
    return _jsx(MenuPrimitive.SubmenuRoot, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return (_jsxs(MenuPrimitive.SubmenuTrigger, { "data-slot": "dropdown-menu-sub-trigger", "data-inset": inset, className: cn('focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground flex cursor-default items-center rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8', className), ...props, children: [children, _jsx(CaretRightIcon, { className: "ml-auto size-4", weight: "regular" })] }));
}
function DropdownMenuSubContent({ className, ...props }) {
    return (_jsx(DropdownMenuContent, { "data-slot": "dropdown-menu-sub-content", side: "right", sideOffset: 0, alignOffset: -3, className: cn('min-w-[8rem] rounded-md border p-1 shadow-lg', className), ...props }));
}
export { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuGroupLabel, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, };
//# sourceMappingURL=dropdown-menu.js.map