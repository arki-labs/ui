import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
type AccordionCompatProps = Omit<AccordionPrimitive.Root.Props, 'value' | 'defaultValue' | 'onValueChange'> & {
    /** Radix-era prop: 'single' or 'multiple'. Maps to Base UI `multiple`. */
    type?: 'single' | 'multiple';
    /** Radix-era prop: allow collapsing the only-open item. Base UI default already allows this. */
    collapsible?: boolean;
    /** Radix-shape value: a single string in `single` mode, an array in `multiple` mode. */
    value?: string | readonly string[];
    defaultValue?: string | readonly string[];
    onValueChange?: (value: string & string[]) => void;
};
declare function Accordion({ type, collapsible: _collapsible, value, defaultValue, onValueChange, ...props }: AccordionCompatProps): import("react").JSX.Element;
declare function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props): import("react").JSX.Element;
declare function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props): import("react").JSX.Element;
declare function AccordionContent({ className, children, ...props }: AccordionPrimitive.Panel.Props): import("react").JSX.Element;
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
//# sourceMappingURL=accordion.d.ts.map