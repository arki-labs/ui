import * as React from 'react';
import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
declare function NavigationMenu({ className, children, viewport, ...props }: NavigationMenuPrimitive.Root.Props & {
    viewport?: boolean;
}): React.JSX.Element;
declare function NavigationMenuList({ className, ...props }: NavigationMenuPrimitive.List.Props): React.JSX.Element;
declare function NavigationMenuItem({ className, ...props }: NavigationMenuPrimitive.Item.Props): React.JSX.Element;
declare const navigationMenuTriggerStyle: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
declare function NavigationMenuTrigger({ className, children, ...props }: NavigationMenuPrimitive.Trigger.Props): React.JSX.Element;
declare function NavigationMenuContent({ className, ...props }: NavigationMenuPrimitive.Content.Props): React.JSX.Element;
declare function NavigationMenuViewport({ className, ...props }: NavigationMenuPrimitive.Viewport.Props): React.JSX.Element;
declare function NavigationMenuLink({ className, ...props }: NavigationMenuPrimitive.Link.Props): React.JSX.Element;
declare function NavigationMenuIndicator({ className, ...props }: NavigationMenuPrimitive.Icon.Props): React.JSX.Element;
export { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport, };
//# sourceMappingURL=navigation-menu.d.ts.map