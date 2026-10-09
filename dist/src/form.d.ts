import type { ComponentProps } from 'react';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import * as React from 'react';
declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>({ children, watch, getValues, getErrors, getFieldState, setError, clearErrors, setValue, setValues, trigger, formState, resetField, reset, resetDefaultValues, handleSubmit, unregister, control, register, setFocus, subscribe, }: import("react-hook-form").FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => React.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: import("react-hook-form").FieldError | undefined;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare function FormItem({ className, ...props }: React.ComponentProps<'div'>): React.JSX.Element;
declare function FormLabel({ className, ...props }: React.ComponentProps<'label'>): React.JSX.Element;
type FormControlProps = {
    children: React.ReactElement;
};
declare function FormControl({ children }: FormControlProps): React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
declare function FormDescription({ className, ...props }: React.ComponentProps<'p'>): React.JSX.Element;
declare function FormMessage({ className, ...props }: React.ComponentProps<'p'>): React.JSX.Element | null;
/** A hint item can be a plain value or an object with a custom display label. */
type HintItem<T> = T | {
    value: T;
    label: React.ReactNode;
};
/**
 * Inline ghost-token hints displayed as subtle clickable text separated by `·`.
 * Clicking a hint sets the parent form field to that value.
 */
declare function FormHints<T extends string | number | Date>({ className, hints, onHintClick, renderHint, ...props }: Omit<ComponentProps<'div'>, 'children'> & {
    hints: HintItem<T>[];
    onHintClick?: (value: T) => void;
    renderHint?: (value: T) => React.ReactNode;
}): React.JSX.Element;
export type { HintItem };
export { Form, FormControl, FormDescription, FormField, FormHints, FormItem, FormLabel, FormMessage, useFormField };
export { zodResolver } from '@hookform/resolvers/zod';
export { useForm, useWatch } from 'react-hook-form';
//# sourceMappingURL=form.d.ts.map