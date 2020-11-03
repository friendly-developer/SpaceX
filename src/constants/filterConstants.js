export const FILTER_TYPES = {
  YEAR: "year",
  LAUNCH: "launch",
  LANDING: "landing",
};
export const YEARS = Array(14)
  .fill(0)
  .reduce(
    (fillArr, val, i) => {
      fillArr.push(fillArr[i] + 1);
      return fillArr;
    },
    [2006]
  );
export const LAUNCH = ["true", "false"];
export const LANDING = ["true", "false"];
