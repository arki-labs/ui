import * as React from 'react';
import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible';
import { type AsChildProp } from './as-child';
declare function Collapsible({ ...props }: CollapsiblePrimitive.Root.Props): React.JSX.Element;
declare function CollapsibleTrigger({ asChild, children, ...props }: CollapsiblePrimitive.Trigger.Props & AsChildProp): React.JSX.Element;
declare function CollapsibleContent({ ...props }: CollapsiblePrimitive.Panel.Props): React.JSX.Element;
export { Collapsible, CollapsibleContent, CollapsibleTrigger };
//# sourceMappingURL=collapsible.d.ts.map