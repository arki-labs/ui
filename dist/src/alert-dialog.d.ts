import * as React from 'react';
import { AlertDialog as AlertDialogPrimitive } from '@base-ui/react/alert-dialog';
import { type AsChildProp } from './as-child';
declare function AlertDialog({ ...props }: AlertDialogPrimitive.Root.Props): React.JSX.Element;
declare function AlertDialogTrigger({ asChild, children, ...props }: AlertDialogPrimitive.Trigger.Props & AsChildProp): React.JSX.Element;
declare function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props): React.JSX.Element;
declare function AlertDialogOverlay({ className, ...props }: AlertDialogPrimitive.Backdrop.Props): React.JSX.Element;
declare function AlertDialogContent({ className, ...props }: AlertDialogPrimitive.Popup.Props): React.JSX.Element;
declare function AlertDialogHeader({ className, ...props }: React.ComponentProps<'div'>): React.JSX.Element;
declare function AlertDialogFooter({ className, ...props }: React.ComponentProps<'div'>): React.JSX.Element;
declare function AlertDialogTitle({ className, ...props }: AlertDialogPrimitive.Title.Props): React.JSX.Element;
declare function AlertDialogDescription({ className, ...props }: AlertDialogPrimitive.Description.Props): React.JSX.Element;
declare function AlertDialogAction({ className, ...props }: React.ComponentProps<'button'>): React.JSX.Element;
declare function AlertDialogCancel({ className, ...props }: AlertDialogPrimitive.Close.Props): React.JSX.Element;
export { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, };
//# sourceMappingURL=alert-dialog.d.ts.map