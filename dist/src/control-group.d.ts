import * as React from 'react';
export type ControlGroupProps = {
    orientation?: 'horizontal' | 'vertical';
} & React.ComponentPropsWithoutRef<'div'>;
export declare const ControlGroup: React.ForwardRefExoticComponent<{
    orientation?: 'horizontal' | 'vertical';
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const ControlGroupItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=control-group.d.ts.map