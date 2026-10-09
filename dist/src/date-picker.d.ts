import type { ComponentProps } from 'react';
type DatePickerProps = {
    date?: Date;
    setDate: (date?: Date) => void;
} & ComponentProps<'div'>;
export declare function DatePicker({ date, setDate, ...props }: DatePickerProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=date-picker.d.ts.map