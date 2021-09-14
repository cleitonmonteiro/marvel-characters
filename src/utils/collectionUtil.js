export const containsText = (value, text) => {
  const formattedValue = value?.toLowerCase();
  const formattedText = text?.toLowerCase()?.trim();

  return formattedValue?.includes(formattedText);
};

export const joinWithComma = str => {
  let r = str.join(', ');
  const lastComma = r.lastIndexOf(',');
  if (lastComma !== -1) {
    r = `${r.substr(0, lastComma)} and ${r.substr(lastComma + 1, r.length)}`;
  }
  return r;
};
