/** `withAsChild`: let a component render its child element instead of its own. */
'use client';
import * as React from 'react';
export function withAsChild({ asChild, children, }) {
    if (!asChild || !React.isValidElement(children)) {
        return { children };
    }
    const child = children;
    return {
        render: child,
        children: child.props.children,
    };
}
//# sourceMappingURL=as-child.js.map