/** Tool panels: resizable side panels for tool-style apps. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Panel, PanelResizeHandle } from 'react-resizable-panels';
import { DotsSixVertical, CornersOut, CornersIn } from '@arki/icons/phosphor';
import { cn } from './cn.js';
import { ResizablePanelGroup } from './resizable.js';
const ToolPanelGroupContext = createContext({
    maximizedPanelId: null,
    maximize: () => {
        /* No provider mounted: nothing to maximize. */
    },
    restore: () => {
        /* No provider mounted: nothing to restore. */
    },
    registerPanel: () => {
        /* No provider mounted: nothing to register. */
    },
    unregisterPanel: () => {
        /* No provider mounted: nothing to unregister. */
    },
});
function useToolPanelGroup() {
    return useContext(ToolPanelGroupContext);
}
// ─── ToolPanelGroup ───────────────────────────────────────────────────────────
/**
 * A context-providing wrapper around `react-resizable-panels` `PanelGroup`.
 *
 * Adds maximize/restore semantics so any panel within the group can be
 * expanded to fill 100% while the rest collapse, then restored to the
 * previously saved layout.  Layout is auto-persisted to localStorage using
 * `"${storagePrefix}-${id}"` as the key; a saved layout that does not fit the
 * panels is ignored (see `ResizablePanelGroup`).
 */
function ToolPanelGroup({ id, direction, className, children, storagePrefix = 'arki', }) {
    const [maximizedPanelId, setMaximizedPanelId] = useState(null);
    const groupRef = useRef(null);
    const savedLayout = useRef(null);
    const panelRefs = useRef(new Map());
    const registerPanel = useCallback((panelId, ref) => {
        panelRefs.current.set(panelId, ref);
    }, []);
    const unregisterPanel = useCallback((panelId) => {
        panelRefs.current.delete(panelId);
    }, []);
    const maximize = useCallback((panelId) => {
        savedLayout.current = groupRef.current?.getLayout() ?? null;
        setMaximizedPanelId(panelId);
        for (const [regId, ref] of panelRefs.current) {
            if (regId === panelId) {
                ref.current?.resize(100);
            }
            else {
                ref.current?.collapse();
            }
        }
    }, []);
    const restore = useCallback(() => {
        setMaximizedPanelId(null);
        const layout = savedLayout.current;
        savedLayout.current = null;
        const group = groupRef.current;
        if (!layout || !group)
            return;
        // A panel mounted or unmounted while maximized: the saved layout no longer fits, and the library
        // throws on a layout of the wrong length. Expand the collapsed panels instead.
        if (layout.length === group.getLayout().length) {
            group.setLayout(layout);
            return;
        }
        for (const ref of panelRefs.current.values())
            ref.current?.expand();
    }, []);
    return (_jsx(ToolPanelGroupContext.Provider, { value: { maximizedPanelId, maximize, restore, registerPanel, unregisterPanel }, children: _jsx(ResizablePanelGroup, { ref: groupRef, direction: direction, autoSaveId: `${storagePrefix}-${id}`, className: cn('flex h-full w-full', direction === 'vertical' && 'flex-col', className), children: children }) }));
}
// ─── ToolPanel ────────────────────────────────────────────────────────────────
/**
 * A resizable panel that auto-registers itself with the parent `ToolPanelGroup`
 * context to enable maximize/restore behaviour.
 */
function ToolPanel({ id, defaultSize, minSize = 10, className, children, }) {
    const { registerPanel, unregisterPanel } = useToolPanelGroup();
    const panelRef = useRef(null);
    useEffect(() => {
        registerPanel(id, panelRef);
        return () => unregisterPanel(id);
    }, [id, registerPanel, unregisterPanel]);
    return (_jsx(Panel, { ref: panelRef, defaultSize: defaultSize, minSize: minSize, collapsible: true, collapsedSize: 0, className: cn('flex flex-col overflow-hidden', className), children: children }));
}
// ─── ToolPanelHandle ──────────────────────────────────────────────────────────
/**
 * A styled resize handle with a grip icon, placed between two `ToolPanel`
 * instances inside a `ToolPanelGroup`.
 */
function ToolPanelHandle({ className }) {
    return (_jsx(PanelResizeHandle, { className: cn('group relative flex items-center justify-center', 'bg-border data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=horizontal]:w-px', 'data-[panel-group-direction=horizontal]:after:absolute data-[panel-group-direction=horizontal]:after:inset-y-0 data-[panel-group-direction=horizontal]:after:left-1/2 data-[panel-group-direction=horizontal]:after:w-2 data-[panel-group-direction=horizontal]:after:-translate-x-1/2', 'data-[panel-group-direction=vertical]:after:absolute data-[panel-group-direction=vertical]:after:inset-x-0 data-[panel-group-direction=vertical]:after:top-1/2 data-[panel-group-direction=vertical]:after:h-2 data-[panel-group-direction=vertical]:after:-translate-y-1/2', 'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring', className), children: _jsx("div", { className: cn('z-10 flex items-center justify-center rounded border border-border bg-background shadow-sm transition-colors', 'h-5 w-3.5', 'data-[panel-group-direction=vertical]:rotate-90', 'group-hover:border-primary/40 group-hover:bg-muted', 'group-data-[resize-handle-state=drag]:border-primary/60 group-data-[resize-handle-state=drag]:bg-primary/5'), children: _jsx(DotsSixVertical, { className: "h-3 w-3 text-muted-foreground group-hover:text-foreground", weight: "regular" }) }) }));
}
// ─── PanelExpandButton ────────────────────────────────────────────────────────
/**
 * Small maximize/restore button for panel headers.
 * Renders nothing when another panel in the group is already maximized.
 */
function PanelExpandButton({ panelId }) {
    const { maximizedPanelId, maximize, restore } = useToolPanelGroup();
    const isMaximized = maximizedPanelId === panelId;
    const isOtherMaximized = maximizedPanelId !== null && maximizedPanelId !== panelId;
    if (isOtherMaximized)
        return null;
    return (_jsx("button", { type: "button", onClick: () => (isMaximized ? restore() : maximize(panelId)), className: "flex h-5 w-5 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-muted hover:text-foreground", title: isMaximized ? 'Restore panel' : 'Expand panel', children: isMaximized ? _jsx(CornersIn, { className: "h-3 w-3", weight: "regular" }) : _jsx(CornersOut, { className: "h-3 w-3", weight: "regular" }) }));
}
// ─── PanelSkeleton ────────────────────────────────────────────────────────────
/**
 * Animated placeholder rendered inside panels while the workbench is
 * restoring persisted state on mount, to avoid a layout flash.
 */
function PanelSkeleton() {
    return (_jsxs("div", { className: "flex flex-1 animate-pulse flex-col gap-2 p-4", children: [_jsx("div", { className: "h-3 w-4/5 rounded bg-muted" }), _jsx("div", { className: "h-3 w-3/5 rounded bg-muted" }), _jsx("div", { className: "h-3 w-full rounded bg-muted" }), _jsx("div", { className: "ml-4 h-3 w-3/4 rounded bg-muted" }), _jsx("div", { className: "ml-4 h-3 w-1/2 rounded bg-muted" }), _jsx("div", { className: "ml-4 h-3 w-2/3 rounded bg-muted" }), _jsx("div", { className: "h-3 w-5/6 rounded bg-muted" }), _jsx("div", { className: "h-3 w-4/5 rounded bg-muted" }), _jsx("div", { className: "ml-4 h-3 w-3/5 rounded bg-muted" }), _jsx("div", { className: "ml-8 h-3 w-1/3 rounded bg-muted" }), _jsx("div", { className: "ml-8 h-3 w-2/5 rounded bg-muted" }), _jsx("div", { className: "ml-4 h-3 w-2/3 rounded bg-muted" }), _jsx("div", { className: "h-3 w-full rounded bg-muted" }), _jsx("div", { className: "h-3 w-3/4 rounded bg-muted" })] }));
}
export { PanelExpandButton, PanelSkeleton, ToolPanel, ToolPanelGroup, ToolPanelHandle, useToolPanelGroup, };
//# sourceMappingURL=tool-panels.js.map