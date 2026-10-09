import type { ImperativePanelHandle } from 'react-resizable-panels';
import * as React from 'react';
type ToolPanelGroupCtx = {
    maximizedPanelId: string | null;
    maximize: (id: string) => void;
    restore: () => void;
    registerPanel: (id: string, ref: React.RefObject<ImperativePanelHandle | null>) => void;
    unregisterPanel: (id: string) => void;
};
declare function useToolPanelGroup(): ToolPanelGroupCtx;
/**
 * A context-providing wrapper around `react-resizable-panels` `PanelGroup`.
 *
 * Adds maximize/restore semantics so any panel within the group can be
 * expanded to fill 100% while the rest collapse, then restored to the
 * previously saved layout.  Layout is auto-persisted to localStorage using
 * `"${storagePrefix}-${id}"` as the key.
 */
declare function ToolPanelGroup({ id, direction, className, children, storagePrefix, }: {
    id: string;
    direction: 'horizontal' | 'vertical';
    className?: string;
    children: React.ReactNode;
    /** Prefix for the localStorage persistence key. Pass the app name to avoid collisions. */
    storagePrefix?: string;
}): React.JSX.Element;
/**
 * A resizable panel that auto-registers itself with the parent `ToolPanelGroup`
 * context to enable maximize/restore behaviour.
 */
declare function ToolPanel({ id, defaultSize, minSize, className, children, }: {
    id: string;
    defaultSize: number;
    minSize?: number;
    className?: string;
    children: React.ReactNode;
}): React.JSX.Element;
/**
 * A styled resize handle with a grip icon, placed between two `ToolPanel`
 * instances inside a `ToolPanelGroup`.
 */
declare function ToolPanelHandle({ className }: {
    className?: string;
}): React.JSX.Element;
/**
 * Small maximize/restore button for panel headers.
 * Renders nothing when another panel in the group is already maximized.
 */
declare function PanelExpandButton({ panelId }: {
    panelId: string;
}): React.JSX.Element | null;
/**
 * Animated placeholder rendered inside panels while the workbench is
 * restoring persisted state on mount, to avoid a layout flash.
 */
declare function PanelSkeleton(): React.JSX.Element;
export { PanelExpandButton, PanelSkeleton, ToolPanel, ToolPanelGroup, ToolPanelHandle, useToolPanelGroup, };
//# sourceMappingURL=tool-panels.d.ts.map