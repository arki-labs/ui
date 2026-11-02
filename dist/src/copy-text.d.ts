/** The part of `navigator.clipboard` that copying needs. */
type TextClipboard = Pick<Clipboard, 'writeText'>;
/**
 * Writes text to the clipboard and says what happened. A refused write (permission denied, page not
 * focused, insecure page with no clipboard) is `'failed'`, never a rejection.
 */
export declare function copyText(text: string, clipboard?: TextClipboard | undefined): Promise<'copied' | 'failed'>;
export {};
//# sourceMappingURL=copy-text.d.ts.map