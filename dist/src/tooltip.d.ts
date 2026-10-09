import type { FC } from 'react';
import * as React from 'react';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';
import { type AsChildProp } from './as-child';
declare function TooltipProvider({ delay, delayDuration, ...props }: TooltipPrimitive.Provider.Props & {
    delayDuration?: number;
}): React.JSX.Element;
declare function Tooltip({ ...props }: TooltipPrimitive.Root.Props): React.JSX.Element;
declare function TooltipTrigger({ asChild, children, ...props }: TooltipPrimitive.Trigger.Props & AsChildProp): React.JSX.Element;
declare function TooltipContent({ className, sideOffset, side, align, alignOffset, children, ...props }: TooltipPrimitive.Popup.Props & Pick<TooltipPrimitive.Positioner.Props, 'side' | 'sideOffset' | 'align' | 'alignOffset'>): React.JSX.Element;
type WithTooltipProps = {
    content: React.ReactNode;
    trigger: React.ReactNode;
    delayDuration?: number;
    side?: 'left' | 'right' | 'top' | 'bottom';
};
declare const WithTooltip: FC<WithTooltipProps>;
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, WithTooltip };
//# sourceMappingURL=tooltip.d.ts.map