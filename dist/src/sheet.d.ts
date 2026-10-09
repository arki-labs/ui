import * as React from 'react';
import { Dialog as SheetPrimitive } from '@base-ui/react/dialog';
import { type AsChildProp } from './as-child';
declare function Sheet({ ...props }: SheetPrimitive.Root.Props): React.JSX.Element;
declare function SheetTrigger({ asChild, children, ...props }: SheetPrimitive.Trigger.Props & AsChildProp): React.JSX.Element;
declare function SheetClose({ ...props }: SheetPrimitive.Close.Props): React.JSX.Element;
declare function SheetContent({ className, children, side, ...props }: SheetPrimitive.Popup.Props & {
    side?: 'top' | 'right' | 'bottom' | 'left';
}): React.JSX.Element;
declare function SheetHeader({ className, ...props }: React.ComponentProps<'div'>): React.JSX.Element;
declare function SheetFooter({ className, ...props }: React.ComponentProps<'div'>): React.JSX.Element;
declare function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props): React.JSX.Element;
declare function SheetDescription({ className, ...props }: SheetPrimitive.Description.Props): React.JSX.Element;
export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger };
//# sourceMappingURL=sheet.d.ts.map