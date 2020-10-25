export const recalculateCoor = (coor) =>
  `${Number(coor).toFixed(2).split(".").join("°")}'`;
