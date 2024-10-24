export const currentDate = () => {
  const [day, time] = new Date().toISOString().split('T');
  const dateFormat = `${day} / ${time.split('.')[0].slice(0, 5)}`;

  return dateFormat;
};
