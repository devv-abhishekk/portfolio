import { useState } from 'react';

export const useCopyToClipboard = (resetDelay = 2000) => {
  const [copiedField, setCopiedField] = useState(null);

  const copy = async (text, fieldName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), resetDelay);
      return true;
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      return false;
    }
  };

  return [copiedField, copy];
};
