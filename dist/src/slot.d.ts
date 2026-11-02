/** `Slot`: merge props onto a child element. */
import * as React from 'react';
type SlotProps = {
    children?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
    className?: string;
    [key: string]: unknown;
};
/**
 * Merges the slot's props into its single child element.
 * Replacement for Radix UI's `Slot` / `asChild` pattern.
 *
 * - `className` values are concatenated via `cn()`
 * - Event handlers (`on*`) are composed so both parent and child handlers run
 * - Refs are merged with `mergeRefs`
 * - All other slot props override child props
 */
export declare function Slot({ children, ref: slotRef, className: slotClassName, ...slotProps }: SlotProps): React.JSX.Element;
export {};
//# sourceMappingURL=slot.d.ts.map