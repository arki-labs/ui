/**
 * Writes text to the clipboard and says what happened. A refused write (permission denied, page not
 * focused, insecure page with no clipboard) is `'failed'`, never a rejection.
 */
export async function copyText(text, clipboard = typeof navigator === 'undefined' ? undefined : navigator.clipboard) {
    if (clipboard === undefined)
        return 'failed';
    try {
        await clipboard.writeText(text);
        return 'copied';
    }
    catch {
        return 'failed';
    }
}
//# sourceMappingURL=copy-text.js.map