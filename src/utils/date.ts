export const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions) => {
  return new Intl.DateTimeFormat('en-US', options).format(date);
};
