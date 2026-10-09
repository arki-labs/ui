import * as React from 'react';
import { Select as SelectPrimitive } from '@base-ui/react/select';
type SelectProps<Value extends string = string> = Omit<React.ComponentProps<typeof SelectPrimitive.Root>, 'onValueChange' | 'value' | 'defaultValue'> & {
    value?: Value;
    defaultValue?: Value;
    onValueChange?: (value: Value) => void;
};
declare function Select<Value extends string = string>({ onValueChange, ...props }: SelectProps<Value>): React.JSX.Element;
declare function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>): React.JSX.Element;
declare function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>): React.JSX.Element;
declare function SelectTrigger({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger>): React.JSX.Element;
declare function SelectContent({ className, children, sideOffset, ...props }: React.ComponentProps<typeof SelectPrimitive.Positioner> & {
    className?: string;
    children?: React.ReactNode;
}): React.JSX.Element;
declare function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.GroupLabel>): React.JSX.Element;
declare function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>): React.JSX.Element;
declare function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>): React.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>): React.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>): React.JSX.Element;
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, };
//# sourceMappingURL=select.d.ts.map