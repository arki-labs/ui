/** Input base: the shared frame for inputs with adornments. */
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Button } from './button.js';
import { cn } from './cn.js';
/** Give every ref the same value: a callback ref is called with it, an object ref is set to it. */
function assignRefs(refs, value) {
    for (const ref of refs) {
        if (typeof ref === 'function')
            ref(value);
        else if (ref != null)
            ref.current = value;
    }
}
/** Call originalHandler then ourHandler, both with the same event. */
function composeEventHandlers(originalHandler, ourHandler) {
    return (event) => {
        originalHandler?.(event);
        ourHandler(event);
    };
}
const InputBaseContext = React.createContext({
    autoFocus: false,
    controlRef: { current: null },
    disabled: false,
    onFocusedChange: () => {
        /* No InputBase mounted: no frame to highlight. */
    },
});
const useInputBaseContext = () => React.useContext(InputBaseContext);
export const InputBase = React.forwardRef(({ autoFocus, disabled, className, onClick, ...props }, ref) => {
    const [focused, setFocused] = React.useState(false);
    const controlRef = React.useRef(null);
    return (_jsx(InputBaseContext.Provider, { value: {
            autoFocus,
            controlRef,
            disabled,
            onFocusedChange: setFocused,
        }, children: _jsx("div", { ref: ref, onClick: (event) => {
                onClick?.(event);
                // Based on MUI's <InputBase /> implementation.
                // https://github.com/mui/material-ui/blob/master/packages/mui-material/src/InputBase/InputBase.js#L458~L460
                if (controlRef.current && event.currentTarget === event.target) {
                    controlRef.current.focus();
                }
            }, className: cn('border-input flex min-h-9 cursor-text items-center gap-2 rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors', disabled && 'cursor-not-allowed opacity-50', focused && 'ring-ring ring-1', className), ...props }) }));
});
InputBase.displayName = 'InputBase';
export const InputBaseFlexWrapper = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn('flex flex-1 flex-wrap', className), ...props })));
InputBaseFlexWrapper.displayName = 'InputBaseFlexWrapper';
export const InputBaseControl = React.forwardRef(({ onFocus, onBlur, children, ...props }, refFromParent) => {
    const { controlRef, autoFocus, disabled, onFocusedChange } = useInputBaseContext();
    if (!React.isValidElement(children))
        return null;
    const child = children;
    const childRef = children.ref;
    return React.cloneElement(child, {
        ...child.props,
        ...props,
        ref: (node) => {
            assignRefs([controlRef, refFromParent, childRef], node);
        },
        autoFocus: autoFocus,
        disabled: disabled,
        onFocus: composeEventHandlers(onFocus, () => onFocusedChange(true)),
        onBlur: composeEventHandlers(onBlur, () => onFocusedChange(false)),
    });
});
InputBaseControl.displayName = 'InputBaseControl';
export const InputBaseAdornment = React.forwardRef(({ className, disablePointerEvents, asChild, children, ...props }, ref) => {
    const isAction = React.isValidElement(children) && children.type === InputBaseAdornmentButton;
    const mergedClassName = cn('text-muted-foreground flex items-center [&_svg]:size-4', (!isAction || disablePointerEvents) && 'pointer-events-none', className);
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            ...children.props,
            ...props,
            ref: ref,
            className: cn(mergedClassName, children.props.className),
        });
    }
    const Comp = typeof children === 'string' ? 'p' : 'div';
    return (_jsx(Comp, { ref: ref, className: mergedClassName, ...props, children: children }));
});
InputBaseAdornment.displayName = 'InputBaseAdornment';
export const InputBaseAdornmentButton = React.forwardRef(({ type = 'button', variant = 'ghost', size = 'icon', disabled: disabledProp, className, ...props }, ref) => {
    const { disabled } = useInputBaseContext();
    return (_jsx(Button, { ref: ref, type: type, variant: variant, size: size, disabled: disabled || disabledProp, className: cn('size-6', className), ...props }));
});
InputBaseAdornmentButton.displayName = 'InputBaseAdornmentButton';
export const InputBaseInput = React.forwardRef(({ className, ...props }, ref) => (_jsx("input", { ref: ref, className: cn('placeholder:text-muted-foreground w-full flex-1 bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-none disabled:pointer-events-none', className), ...props })));
InputBaseInput.displayName = 'InputBaseInput';
//# sourceMappingURL=input-base.js.map