import { Popover as PopoverPrimitive } from '@base-ui/react/popover';
import type { AsChildProp } from './as-child.js';
declare function Popover({ ...props }: PopoverPrimitive.Root.Props): import("react").JSX.Element;
declare function PopoverTrigger({ asChild, children, ...props }: PopoverPrimitive.Trigger.Props & AsChildProp): import("react").JSX.Element;
declare function PopoverContent({ className, align, alignOffset, side, sideOffset, anchor, ...props }: PopoverPrimitive.Popup.Props & Pick<PopoverPrimitive.Positioner.Props, 'align' | 'alignOffset' | 'anchor' | 'side' | 'sideOffset'>): import("react").JSX.Element;
declare function PopoverClose({ ...props }: PopoverPrimitive.Close.Props): import("react").JSX.Element;
export { Popover, PopoverClose, PopoverContent, PopoverTrigger };
//# sourceMappingURL=popover.d.ts.map