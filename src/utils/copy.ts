export const copyToClipboard = (item: string): void => {
  let listener = (event: ClipboardEvent) => {
    event.clipboardData?.setData('text/plain', item);
    event.preventDefault();
  };

  document.addEventListener('copy', listener);
  document.execCommand('copy');
  document.removeEventListener('copy', listener);
};
