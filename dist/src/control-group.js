import { jsx as _jsx } from "react/jsx-runtime";
/** Control group: joins related inputs and buttons into one bar. */
import * as React from 'react';
import { cn } from './cn.js';
import { Slot } from './slot.js';
const ControlGroupContext = React.createContext({
    orientation: 'horizontal',
});
function useControlGroupContext() {
    const context = React.useContext(ControlGroupContext);
    if (!context) {
        throw new Error('useControlGroup must be used within a <ControlGroup />');
    }
    return context;
}
export const ControlGroup = React.forwardRef(({ className, orientation = 'horizontal', ...props }, ref) => (_jsx(ControlGroupContext.Provider, { value: { orientation }, children: _jsx("div", { ref: ref, "data-orientation": orientation, className: cn('flex', orientation === 'vertical' && 'flex-col', className), ...props }) })));
ControlGroup.displayName = 'ControlGroup';
export const ControlGroupItem = React.forwardRef(({ className, ...props }, ref) => {
    const { orientation } = useControlGroupContext();
    return (_jsx(Slot, { ref: ref, className: cn('rounded-none focus-within:z-10', orientation === 'horizontal' && '-me-px h-auto first:rounded-s-md last:-me-0 last:rounded-e-md', orientation === 'vertical' &&
            'w-auto [margin-block-end:-1px] first:rounded-ss-md first:rounded-se-md last:rounded-ee-md last:rounded-es-md last:[margin-block-end:0]', className), ...props }));
});
ControlGroupItem.displayName = 'ControlGroupItem';
//# sourceMappingURL=control-group.js.map