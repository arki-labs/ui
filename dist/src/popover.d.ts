import * as React from 'react';
import { Popover as PopoverPrimitive } from '@base-ui/react/popover';
import { type AsChildProp } from './as-child';
declare function Popover({ ...props }: PopoverPrimitive.Root.Props): React.JSX.Element;
declare function PopoverTrigger({ asChild, children, ...props }: PopoverPrimitive.Trigger.Props & AsChildProp): React.JSX.Element;
declare function PopoverContent({ className, align, alignOffset, side, sideOffset, ...props }: PopoverPrimitive.Popup.Props & Pick<PopoverPrimitive.Positioner.Props, 'align' | 'alignOffset' | 'side' | 'sideOffset'>): React.JSX.Element;
declare function PopoverClose({ ...props }: PopoverPrimitive.Close.Props): React.JSX.Element;
export { Popover, PopoverClose, PopoverContent, PopoverTrigger };
//# sourceMappingURL=popover.d.ts.map