/** Form: React Hook Form fields with labels, hints and error text. */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { useId } from 'react';
import { Controller, FormProvider, useFormContext, useFormState } from 'react-hook-form';
import { cn } from './cn.js';
import { Label } from './label.js';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip.js';
const Form = FormProvider;
const FormFieldContext = React.createContext(null);
const FormField = ({ ...props }) => {
    return (_jsx(FormFieldContext.Provider, { value: { name: props.name }, children: _jsx(Controller, { ...props }) }));
};
const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    // react-hook-form types this as non-null, but it is null outside <Form>.
    const formContext = useFormContext();
    if (!formContext) {
        throw new Error('useFormField should be used within <Form>');
    }
    if (!fieldContext) {
        throw new Error('useFormField should be used within <FormField>');
    }
    const formState = useFormState({ name: fieldContext.name });
    const fieldState = formContext.getFieldState(fieldContext.name, formState);
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};
const FormItemContext = React.createContext({});
function FormItem({ className, ...props }) {
    const id = React.useId();
    return (_jsx(FormItemContext.Provider, { value: { id }, children: _jsx("div", { "data-slot": "form-item", className: cn('grid gap-2', className), ...props }) }));
}
function FormLabel({ className, ...props }) {
    const { error, formItemId } = useFormField();
    return (_jsx(Label, { "data-slot": "form-label", "data-error": !!error, className: cn('data-[error=true]:text-destructive', className), htmlFor: formItemId, ...props }));
}
function FormControl({ children }) {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    // Merge accessibility props into the child form control element via cloneElement.
    // This replaces the Radix Slot pattern, injecting id and aria attributes without
    // adding a wrapper DOM node.
    return React.cloneElement(children, {
        'data-slot': 'form-control',
        id: formItemId,
        'aria-describedby': error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId,
        'aria-invalid': !!error || undefined,
    });
}
function FormDescription({ className, ...props }) {
    const { formDescriptionId } = useFormField();
    return (_jsx("p", { "data-slot": "form-description", id: formDescriptionId, className: cn('text-sm text-muted-foreground', className), ...props }));
}
function FormMessage({ className, ...props }) {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error.message) : props.children;
    if (!body) {
        return null;
    }
    return (_jsx("p", { "data-slot": "form-message", id: formMessageId, className: cn('text-sm font-medium text-destructive', className), ...props, children: body }));
}
/**
 * Inline ghost-token hints displayed as subtle clickable text separated by `·`.
 * Clicking a hint sets the parent form field to that value.
 */
function FormHints({ className, hints, onHintClick, renderHint, ...props }) {
    const { name } = useFormField();
    const { setValue } = useFormContext();
    const id = useId();
    const resolved = hints.map((hint) => {
        if (typeof hint === 'object' && hint !== null && !(hint instanceof Date) && 'value' in hint && 'label' in hint) {
            return hint;
        }
        const value = hint;
        return { value, label: renderHint?.(value) ?? value.toString() };
    });
    return (_jsx(TooltipProvider, { delay: 500, children: _jsx("div", { className: cn('flex flex-wrap items-center gap-1 text-xs text-muted-foreground', className), ...props, children: resolved.map((hint, index) => (_jsxs(React.Fragment, { children: [index > 0 && (_jsx("span", { className: "select-none text-border", "aria-hidden": "true", children: "\u00B7" })), _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { render: _jsx("button", { type: "button", className: "cursor-pointer rounded px-1 py-0.5 tabular-nums transition-colors hover:bg-muted hover:text-foreground", onClick: (e) => {
                                        e.preventDefault();
                                        setValue(name, hint.value, {
                                            shouldDirty: true,
                                            shouldTouch: true,
                                            shouldValidate: true,
                                        });
                                        onHintClick?.(hint.value);
                                    } }), children: hint.label }), _jsx(TooltipContent, { side: "top", children: "Click to use this value" })] })] }, `${id}-${name}-hint-${index}`))) }) }));
}
export { Form, FormControl, FormDescription, FormField, FormHints, FormItem, FormLabel, FormMessage, useFormField };
export { zodResolver } from '@hookform/resolvers/zod';
export { useForm, useWatch } from 'react-hook-form';
//# sourceMappingURL=form.js.map