import type { ButtonProps } from './button';
type ColorPickerProps = {
    value: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
    presetColors?: string[];
};
declare function ColorPicker({ disabled, value, onChange, onBlur, name, className, ref, presetColors, ...props }: Omit<ButtonProps, 'value' | 'onChange' | 'onBlur'> & ColorPickerProps & {
    ref?: React.Ref<HTMLInputElement>;
}): import("react").JSX.Element;
export { ColorPicker };
//# sourceMappingURL=color-picker.d.ts.map