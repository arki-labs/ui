import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
declare function NavigationMenu({ className, children, viewport, ...props }: NavigationMenuPrimitive.Root.Props & {
    viewport?: boolean;
}): import("react").JSX.Element;
declare function NavigationMenuList({ className, ...props }: NavigationMenuPrimitive.List.Props): import("react").JSX.Element;
declare function NavigationMenuItem({ className, ...props }: NavigationMenuPrimitive.Item.Props): import("react").JSX.Element;
declare const navigationMenuTriggerStyle: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
declare function NavigationMenuTrigger({ className, children, ...props }: NavigationMenuPrimitive.Trigger.Props): import("react").JSX.Element;
declare function NavigationMenuContent({ className, ...props }: NavigationMenuPrimitive.Content.Props): import("react").JSX.Element;
declare function NavigationMenuViewport({ className, ...props }: NavigationMenuPrimitive.Viewport.Props): import("react").JSX.Element;
declare function NavigationMenuLink({ className, ...props }: NavigationMenuPrimitive.Link.Props): import("react").JSX.Element;
declare function NavigationMenuIndicator({ className, ...props }: NavigationMenuPrimitive.Icon.Props): import("react").JSX.Element;
export { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport, };
//# sourceMappingURL=navigation-menu.d.ts.map