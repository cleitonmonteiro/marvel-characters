export const containsText = (value, text) => {
  const formattedValue = value?.toLowerCase();
  const formattedText = text?.toLowerCase()?.trim();

  return formattedValue?.includes(formattedText);
};
