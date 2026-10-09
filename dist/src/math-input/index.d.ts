import * as React from 'react';
export type MathInputProps = {
    value: number | null;
    onChange: (value: number | null) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    /** Show +∞ / −∞ picker tab. Default: true */
    allowInfinity?: boolean;
    /** Show fraction picker tab. Default: true */
    allowFractions?: boolean;
    min?: number;
    max?: number;
};
export declare function MathInput({ value, onChange, placeholder, disabled, className, allowInfinity, allowFractions, min, max, }: MathInputProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map