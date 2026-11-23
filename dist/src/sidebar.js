/** Sidebar: an app sidebar with groups, menus and a collapse state. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { SidebarIcon, SidebarSimpleIcon } from '@arki/icons/phosphor';
import { getLogger } from '@arki/log';
import { useIsClient } from './hooks/is-client.js';
import { useIsMobile, useIsTablet } from './hooks/media-query.js';
import { Button } from './button.js';
import { cn } from './cn.js';
import { Slot } from './slot.js';
import { Input } from './input.js';
import { Separator } from './separator.js';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './sheet.js';
import { Skeleton } from './skeleton.js';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, WithTooltip } from './tooltip.js';
// One logger per sidebar concern; output shows only when the app configures `@arki/log`.
const sidebarLog = getLogger('arki:ui:sidebar');
const stateLog = getLogger('arki:ui:sidebar:state');
const renderLog = getLogger('arki:ui:sidebar:render');
const eventLog = getLogger('arki:ui:sidebar:event');
const mobileLog = getLogger('arki:ui:sidebar:mobile');
const keyboardLog = getLogger('arki:ui:sidebar:keyboard');
const SIDEBAR_COOKIE_NAME = 'sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
function writeSidebarCookie(open) {
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
}
const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_MOBILE = '18rem';
const SIDEBAR_WIDTH_ICON = '3rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';
const SidebarContext = React.createContext(null);
function useSidebar() {
    sidebarLog.debug('useSidebar hook called');
    const context = React.useContext(SidebarContext);
    if (!context) {
        sidebarLog.debug('useSidebar: ERROR - no context found, throwing error');
        throw new Error('useSidebar must be used within a SidebarProvider.');
    }
    sidebarLog.debug('useSidebar: context retrieved successfully', {
        state: context.state,
        open: context.open,
        openMobile: context.openMobile,
        isMobile: context.isMobile,
    });
    return context;
}
const SidebarProvider = React.forwardRef(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
    sidebarLog.debug('SidebarProvider: initializing', { defaultOpen, hasOpenProp: openProp !== undefined, hasSetOpenProp: !!setOpenProp });
    const isClient = useIsClient();
    // Use safe defaults during SSR/SSG to avoid "uncached data" errors
    const isMobileQuery = useIsMobile();
    const isTabletQuery = useIsTablet();
    const isMobile = isClient ? isMobileQuery : false;
    const isTablet = isClient ? isTabletQuery : false;
    mobileLog.debug('SidebarProvider: device detection', { isClient, isMobileQuery, isTabletQuery, isMobile, isTablet });
    const [openMobile, setOpenMobile] = React.useState(false);
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(isTablet ? false : defaultOpen);
    const open = openProp ?? _open;
    // Mirror `open` into a ref so `setOpen` can read the latest value without
    // listing `open` as a dep. Without this, every state change minted a new
    // `setOpen` identity, which broke downstream `useEffect` deps.
    const openRef = React.useRef(open);
    React.useLayoutEffect(() => {
        openRef.current = open;
    }, [open]);
    stateLog.debug('SidebarProvider: initial state computed', {
        _open,
        openProp,
        resolvedOpen: open,
        openMobile,
        isTablet,
        defaultOpen,
    });
    const setOpen = React.useCallback((value) => {
        const openState = typeof value === 'function' ? value(openRef.current) : value;
        stateLog.debug('SidebarProvider: setOpen called', {
            valueType: typeof value,
            previousOpen: openRef.current,
            newOpenState: openState,
            hasExternalSetOpenProp: !!setOpenProp,
        });
        if (setOpenProp) {
            stateLog.debug('SidebarProvider: using external setOpenProp');
            setOpenProp(openState);
        }
        else {
            stateLog.debug('SidebarProvider: using internal _setOpen');
            _setOpen(openState);
        }
        // This sets the cookie to keep the sidebar state.
        stateLog.debug('SidebarProvider: setting cookie', {
            cookieName: SIDEBAR_COOKIE_NAME,
            value: openState,
            maxAge: SIDEBAR_COOKIE_MAX_AGE,
        });
        try {
            writeSidebarCookie(openState);
        }
        catch {
            // A sandboxed frame or an opaque origin refuses cookies with a SecurityError. The sidebar
            // still opens and closes; it just does not remember its state for the next visit.
        }
    }, [setOpenProp]);
    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
        eventLog.debug('SidebarProvider: toggleSidebar called', { isMobile, currentOpen: open, currentOpenMobile: openMobile });
        return isMobile ? setOpenMobile(open => !open) : setOpen(open => !open);
    }, [isMobile, setOpen, setOpenMobile]);
    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
        keyboardLog.debug('SidebarProvider: registering keyboard shortcut listener', { shortcut: `Ctrl/Cmd + ${SIDEBAR_KEYBOARD_SHORTCUT}` });
        const handleKeyDown = (event) => {
            if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                keyboardLog.debug('SidebarProvider: keyboard shortcut triggered', {
                    key: event.key,
                    metaKey: event.metaKey,
                    ctrlKey: event.ctrlKey,
                });
                event.preventDefault();
                toggleSidebar();
            }
        };
        globalThis.addEventListener('keydown', handleKeyDown);
        return () => {
            keyboardLog.debug('SidebarProvider: unregistering keyboard shortcut listener');
            globalThis.removeEventListener('keydown', handleKeyDown);
        };
    }, [toggleSidebar]);
    React.useEffect(() => {
        mobileLog.debug('SidebarProvider: isTablet effect triggered', { isTablet, currentOpen: open });
        if (isTablet) {
            mobileLog.debug('SidebarProvider: collapsing sidebar for tablet');
            setOpen(false);
        }
    }, [isTablet]);
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? 'expanded' : 'collapsed';
    stateLog.debug('SidebarProvider: computed state', { state, open, openMobile, isMobile });
    const contextValue = React.useMemo(() => {
        stateLog.debug('SidebarProvider: creating context value', { state, open, isMobile, openMobile });
        return {
            state,
            open,
            setOpen,
            isMobile,
            openMobile,
            setOpenMobile,
            toggleSidebar,
        };
    }, [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);
    renderLog.debug('SidebarProvider: rendering', {
        state,
        open,
        openMobile,
        isMobile,
        sidebarWidth: SIDEBAR_WIDTH,
        sidebarWidthIcon: SIDEBAR_WIDTH_ICON,
    });
    return (_jsx(SidebarContext.Provider, { value: contextValue, children: _jsx(TooltipProvider, { delay: 0, children: _jsx("div", { "data-slot": "sidebar-wrapper", style: {
                    '--sidebar-width': SIDEBAR_WIDTH,
                    '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
                    ...style,
                }, className: cn('group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-full w-full', className), ref: ref, ...props, children: children }) }) }));
});
SidebarProvider.displayName = 'SidebarProvider';
function Sidebar({ side = 'left', variant = 'sidebar', collapsible = 'offcanvas', className, children, ...props }) {
    sidebarLog.debug('Sidebar: rendering', { side, variant, collapsible });
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    renderLog.debug('Sidebar: context values', { isMobile, state, openMobile });
    if (collapsible === 'none') {
        renderLog.debug('Sidebar: rendering non-collapsible variant');
        return (_jsx("div", { "data-slot": "sidebar", className: cn('group/sidebar bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col', className), ...props, children: children }));
    }
    if (isMobile) {
        mobileLog.debug('Sidebar: rendering mobile Sheet variant', { openMobile, side });
        return (_jsxs(Sheet, { open: openMobile, onOpenChange: open => {
                mobileLog.debug('Sidebar: mobile Sheet onOpenChange', { newOpen: open, previousOpen: openMobile });
                setOpenMobile(open);
            }, ...props, children: [_jsxs(SheetHeader, { className: "sr-only", children: [_jsx(SheetTitle, { children: "Sidebar" }), _jsx(SheetDescription, { children: "Displays the mobile sidebar." })] }), _jsx(SheetContent, { "data-sidebar": "sidebar", "data-slot": "sidebar", "data-mobile": "true", className: "group/sidebar bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden", style: {
                        '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
                    }, side: side, children: _jsx("div", { className: "flex h-full w-full flex-col", children: children }) })] }));
    }
    renderLog.debug('Sidebar: rendering desktop variant', { state, variant, side, collapsible });
    return (_jsxs("div", { className: "text-sidebar-foreground group peer group/sidebar hidden md:block", "data-state": state, "data-collapsible": state === 'collapsed' ? collapsible : '', "data-variant": variant, "data-side": side, "data-slot": "sidebar", children: [_jsx("div", { className: cn('relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear', 'group-data-[collapsible=offcanvas]:w-0', 'group-data-[side=right]:rotate-180', variant === 'floating' || variant === 'inset'
                    ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
                    : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)') }), _jsx("div", { className: cn('fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex', side === 'left'
                    ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
                    : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]', 
                // Adjust the padding for floating and inset variants.
                variant === 'floating' || variant === 'inset'
                    ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
                    : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)', className), ...props, children: _jsx("div", { "data-sidebar": "sidebar", className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-xs", children: children }) })] }));
}
function SidebarTrigger({ className, onClick, iconClassName, ...props }) {
    renderLog.debug('SidebarTrigger: rendering');
    const { toggleSidebar, open } = useSidebar();
    const title = open ? 'Collapse Sidebar' : 'Expand Sidebar';
    renderLog.debug('SidebarTrigger: state', { open, title });
    return (_jsx(WithTooltip, { delayDuration: 1000, content: title, side: "right", trigger: _jsxs(Button, { "data-sidebar": "trigger", "data-slot": "sidebar-trigger", variant: "ghost", size: "icon", className: cn('size-8', className), onClick: event => {
                eventLog.debug('SidebarTrigger: click event', { currentOpen: open });
                onClick?.(event);
                toggleSidebar();
            }, ...props, children: [open ? (_jsx(SidebarSimpleIcon, { className: cn('size-4', iconClassName), weight: "regular" })) : (_jsx(SidebarIcon, { className: cn('size-4', iconClassName), weight: "regular" })), _jsx("span", { className: "sr-only", children: title })] }) }));
}
function SidebarRail({ className, ...props }) {
    renderLog.debug('SidebarRail: rendering');
    const { toggleSidebar } = useSidebar();
    return (_jsx("button", { "data-sidebar": "rail", "data-slot": "sidebar-rail", "aria-label": "Toggle Sidebar", tabIndex: -1, onClick: () => {
            eventLog.debug('SidebarRail: click event - toggling sidebar');
            toggleSidebar();
        }, title: "Toggle Sidebar", className: cn('hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex', 'in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize', '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize', 'hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full', '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2', '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2', className), ...props }));
}
function SidebarInset({ className, ...props }) {
    renderLog.debug('SidebarInset: rendering');
    return (_jsx("main", { "data-slot": "sidebar-inset", "data-scroll-restoration-id": "sidebar-inset", className: cn('bg-background relative flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden overscroll-contain', 'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-xs md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2', className), ...props }));
}
function SidebarInput({ className, ...props }) {
    renderLog.debug('SidebarInput: rendering');
    return (_jsx(Input, { "data-slot": "sidebar-input", "data-sidebar": "input", className: cn('bg-background h-8 w-full shadow-none', className), ...props }));
}
function SidebarHeader({ className, ...props }) {
    renderLog.debug('SidebarHeader: rendering');
    return (_jsx("div", { "data-slot": "sidebar-header", "data-sidebar": "header", className: cn('flex flex-col gap-2 p-2 group-data-[collapsible=icon]:px-0.5!', className), ...props }));
}
function SidebarFooter({ className, ...props }) {
    renderLog.debug('SidebarFooter: rendering');
    return (_jsx("div", { "data-slot": "sidebar-footer", "data-sidebar": "footer", className: cn('flex flex-col gap-2 p-2', className), ...props }));
}
function SidebarSeparator({ className, ...props }) {
    renderLog.debug('SidebarSeparator: rendering');
    return (_jsx(Separator, { "data-slot": "sidebar-separator", "data-sidebar": "separator", className: cn('bg-sidebar-border mx-2 w-auto', className), ...props }));
}
function SidebarContent({ className, ...props }) {
    renderLog.debug('SidebarContent: rendering');
    return (_jsx("div", { "data-slot": "sidebar-content", "data-sidebar": "content", className: cn('flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden', className), ...props }));
}
function SidebarGroup({ className, ...props }) {
    renderLog.debug('SidebarGroup: rendering');
    return (_jsx("div", { "data-slot": "sidebar-group", "data-sidebar": "group", className: cn('relative flex w-full min-w-0 flex-col p-2 group-data-[collapsible=icon]:px-0.5!', className), ...props }));
}
function SidebarGroupLabel({ className, asChild = false, ...props }) {
    renderLog.debug('SidebarGroupLabel: rendering', { asChild });
    const Comp = asChild ? Slot : 'div';
    return (_jsx(Comp, { "data-slot": "sidebar-group-label", "data-sidebar": "group-label", className: cn('text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0', 'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0', className), ...props }));
}
function SidebarGroupAction({ className, asChild = false, ...props }) {
    renderLog.debug('SidebarGroupAction: rendering', { asChild });
    const Comp = asChild ? Slot : 'button';
    return (_jsx(Comp, { "data-slot": "sidebar-group-action", "data-sidebar": "group-action", className: cn('text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0', 
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden', 'group-data-[collapsible=icon]:hidden', className), ...props }));
}
function SidebarGroupContent({ className, ...props }) {
    renderLog.debug('SidebarGroupContent: rendering');
    return (_jsx("div", { "data-slot": "sidebar-group-content", "data-sidebar": "group-content", className: cn('w-full text-sm', className), ...props }));
}
function SidebarMenu({ className, ...props }) {
    renderLog.debug('SidebarMenu: rendering');
    return (_jsx("ul", { "data-slot": "sidebar-menu", "data-sidebar": "menu", className: cn('flex w-full min-w-0 flex-col gap-1', className), ...props }));
}
function SidebarMenuItem({ className, ...props }) {
    renderLog.debug('SidebarMenuItem: rendering');
    return (_jsx("li", { "data-slot": "sidebar-menu-item", "data-sidebar": "menu-item", className: cn('group/menu-item relative', className), ...props }));
}
const sidebarMenuButtonVariants = cva('peer/menu-button ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-11! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:[&>span:last-child]:hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0', {
    variants: {
        variant: {
            default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
            outline: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
        },
        size: {
            default: 'h-8 text-sm',
            sm: 'h-7 text-xs',
            lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});
function SidebarMenuButton({ asChild = false, isActive = false, variant = 'default', size = 'default', tooltip, className, ...props }) {
    renderLog.debug('SidebarMenuButton: rendering', { asChild, isActive, variant, size, hasTooltip: !!tooltip });
    const Comp = asChild ? Slot : 'button';
    const { isMobile, state } = useSidebar();
    renderLog.debug('SidebarMenuButton: context values', { isMobile, state });
    const button = (_jsx(Comp, { "data-slot": "sidebar-menu-button", "data-sidebar": "menu-button", "data-size": size, "data-active": isActive, className: cn(sidebarMenuButtonVariants({ variant, size }), className), ...props }));
    if (!tooltip) {
        renderLog.debug('SidebarMenuButton: rendering without tooltip');
        return button;
    }
    if (typeof tooltip === 'string') {
        tooltip = {
            children: tooltip,
        };
    }
    renderLog.debug('SidebarMenuButton: rendering with tooltip', {
        tooltipHidden: state !== 'collapsed' || isMobile,
        state,
        isMobile,
    });
    return (_jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { render: button, children: button.props.children }), _jsx(TooltipContent, { side: "right", align: "center", hidden: state !== 'collapsed' || isMobile, ...tooltip })] }));
}
function SidebarMenuAction({ className, asChild = false, showOnHover = false, ...props }) {
    renderLog.debug('SidebarMenuAction: rendering', { asChild, showOnHover });
    const Comp = asChild ? Slot : 'button';
    return (_jsx(Comp, { "data-slot": "sidebar-menu-action", "data-sidebar": "menu-action", className: cn('text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0', 
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden', 'peer-data-[size=sm]/menu-button:top-1', 'peer-data-[size=default]/menu-button:top-1.5', 'peer-data-[size=lg]/menu-button:top-2.5', 'group-data-[collapsible=icon]:hidden', showOnHover &&
            'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0', className), ...props }));
}
function SidebarMenuBadge({ className, ...props }) {
    renderLog.debug('SidebarMenuBadge: rendering');
    return (_jsx("div", { "data-slot": "sidebar-menu-badge", "data-sidebar": "menu-badge", className: cn('text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none', 'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground', 'peer-data-[size=sm]/menu-button:top-1', 'peer-data-[size=default]/menu-button:top-1.5', 'peer-data-[size=lg]/menu-button:top-2.5', 'group-data-[collapsible=icon]:hidden', className), ...props }));
}
/** Random width between 50 and 90%, so a list of skeletons looks uneven. */
function randomSkeletonWidth() {
    return `${Math.floor(Math.random() * 40) + 50}%`;
}
function SidebarMenuSkeleton({ className, showIcon = false, ...props }) {
    const width = React.useMemo(() => {
        const calculatedWidth = randomSkeletonWidth();
        renderLog.debug('SidebarMenuSkeleton: calculated width', { width: calculatedWidth });
        return calculatedWidth;
    }, []);
    renderLog.debug('SidebarMenuSkeleton: rendering', { showIcon, width });
    return (_jsxs("div", { "data-slot": "sidebar-menu-skeleton", "data-sidebar": "menu-skeleton", className: cn('flex h-8 items-center gap-2 rounded-md px-2', className), ...props, children: [showIcon && _jsx(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }), _jsx(Skeleton, { className: "h-4 max-w-(--skeleton-width) flex-1", "data-sidebar": "menu-skeleton-text", style: {
                    '--skeleton-width': width,
                } })] }));
}
function SidebarMenuSub({ className, ...props }) {
    renderLog.debug('SidebarMenuSub: rendering');
    return (_jsx("ul", { "data-slot": "sidebar-menu-sub", "data-sidebar": "menu-sub", className: cn('border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5', 'group-data-[collapsible=icon]:hidden', className), ...props }));
}
function SidebarMenuSubItem({ className, ...props }) {
    renderLog.debug('SidebarMenuSubItem: rendering');
    return (_jsx("li", { "data-slot": "sidebar-menu-sub-item", "data-sidebar": "menu-sub-item", className: cn('group/menu-sub-item relative', className), ...props }));
}
function SidebarMenuSubButton({ asChild = false, size = 'md', isActive = false, className, ...props }) {
    renderLog.debug('SidebarMenuSubButton: rendering', { asChild, size, isActive });
    const Comp = asChild ? Slot : 'a';
    return (_jsx(Comp, { "data-slot": "sidebar-menu-sub-button", "data-sidebar": "menu-sub-button", "data-size": size, "data-active": isActive, className: cn('text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0', 'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground', size === 'sm' && 'text-xs', size === 'md' && 'text-sm', 'group-data-[collapsible=icon]:hidden', className), ...props }));
}
export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar, };
//# sourceMappingURL=sidebar.js.map