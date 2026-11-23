import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible';
import type { AsChildProp } from './as-child.js';
declare function Collapsible({ ...props }: CollapsiblePrimitive.Root.Props): import("react").JSX.Element;
declare function CollapsibleTrigger({ asChild, children, ...props }: CollapsiblePrimitive.Trigger.Props & AsChildProp): import("react").JSX.Element;
declare function CollapsibleContent({ ...props }: CollapsiblePrimitive.Panel.Props): import("react").JSX.Element;
export { Collapsible, CollapsibleContent, CollapsibleTrigger };
//# sourceMappingURL=collapsible.d.ts.map