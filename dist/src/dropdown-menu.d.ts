import * as React from 'react';
import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { type AsChildProp } from './as-child';
declare function DropdownMenu({ ...props }: MenuPrimitive.Root.Props): React.JSX.Element;
declare function DropdownMenuPortal({ ...props }: MenuPrimitive.Portal.Props): React.JSX.Element;
declare function DropdownMenuTrigger({ asChild, children, ...props }: MenuPrimitive.Trigger.Props & AsChildProp): React.JSX.Element;
declare function DropdownMenuContent({ className, sideOffset, align, side, alignOffset, ...props }: MenuPrimitive.Popup.Props & Pick<MenuPrimitive.Positioner.Props, 'align' | 'alignOffset' | 'side' | 'sideOffset'>): React.JSX.Element;
declare function DropdownMenuGroup({ ...props }: MenuPrimitive.Group.Props): React.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: MenuPrimitive.Item.Props & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
    render?: React.ReactElement;
}): React.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: MenuPrimitive.CheckboxItem.Props): React.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props): React.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, ...props }: MenuPrimitive.RadioItem.Props): React.JSX.Element;
/**
 * Visual heading inside a dropdown menu. Stands alone — does NOT require a `DropdownMenuGroup`
 * ancestor. Renders a plain styled `<div>` (no ARIA group-label association).
 *
 * For proper Group-Label ARIA wiring, wrap items in `DropdownMenuGroup` and use
 * `DropdownMenuGroupLabel` instead.
 */
declare function DropdownMenuLabel({ className, inset, ...props }: React.ComponentProps<'div'> & {
    inset?: boolean;
}): React.JSX.Element;
/**
 * Heading for a `DropdownMenuGroup` with proper ARIA group-label association.
 * MUST be rendered as a child of `DropdownMenuGroup` — BaseUI's `Menu.GroupLabel` asserts
 * the Group context at render time.
 */
declare function DropdownMenuGroupLabel({ className, inset, ...props }: MenuPrimitive.GroupLabel.Props & {
    inset?: boolean;
}): React.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: MenuPrimitive.Separator.Props): React.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<'span'>): React.JSX.Element;
declare function DropdownMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props): React.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: MenuPrimitive.SubmenuTrigger.Props & {
    inset?: boolean;
}): React.JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React.ComponentProps<typeof DropdownMenuContent>): React.JSX.Element;
export { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuGroupLabel, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, };
//# sourceMappingURL=dropdown-menu.d.ts.map