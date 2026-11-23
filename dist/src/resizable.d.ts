import * as React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';
type PanelGroupProps = React.ComponentProps<typeof ResizablePrimitive.PanelGroup>;
/**
 * A panel group. With `autoSaveId`, the layout is saved to `storage` (default localStorage) and
 * restored on mount; a saved layout that does not fit (wrong shape, or a different panel count) is
 * ignored and the default layout is used.
 */
declare function ResizablePanelGroup({ className, ...props }: PanelGroupProps): React.JSX.Element;
declare function ResizablePanel({ ...props }: React.ComponentProps<typeof ResizablePrimitive.Panel>): React.JSX.Element;
declare function ResizableHandle({ withHandle, className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
    withHandle?: boolean;
}): React.JSX.Element;
export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
//# sourceMappingURL=resizable.d.ts.map