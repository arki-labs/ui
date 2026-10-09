import type { ComponentProps } from 'react';
import type { TextareaAutosizeProps } from 'react-textarea-autosize';
import TextareaAutosize from 'react-textarea-autosize';
export type TextareaWithAutosizeProps = TextareaAutosizeProps;
declare function TextareaWithAutoSize({ className, ...props }: ComponentProps<typeof TextareaAutosize>): import("react").JSX.Element;
declare namespace TextareaWithAutoSize {
    var displayName: string;
}
export { TextareaWithAutoSize };
//# sourceMappingURL=textarea-with-autosize.d.ts.map