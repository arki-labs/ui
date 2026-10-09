import { PreviewCard as PreviewCardPrimitive } from '@base-ui/react/preview-card';
import type { AsChildProp } from './as-child';
declare function HoverCard({ openDelay: _openDelay, closeDelay: _closeDelay, ...props }: PreviewCardPrimitive.Root.Props & {
    openDelay?: number;
    closeDelay?: number;
}): import("react").JSX.Element;
declare function HoverCardTrigger({ asChild, children, ...props }: PreviewCardPrimitive.Trigger.Props & AsChildProp): import("react").JSX.Element;
declare function HoverCardContent({ className, align, alignOffset, side, sideOffset, ...props }: PreviewCardPrimitive.Popup.Props & Pick<PreviewCardPrimitive.Positioner.Props, 'align' | 'alignOffset' | 'side' | 'sideOffset'>): import("react").JSX.Element;
export { HoverCard, HoverCardContent, HoverCardTrigger };
//# sourceMappingURL=hover-card.d.ts.map