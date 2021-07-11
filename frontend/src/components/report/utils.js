const COLORS = [
  "#134DA8",
  "#F5AF2C",
  "#879914",
  "#56069C",
  "#EBE5C1",
  "#B57907",
  "#A16322",
  "#6281E6",
  "#ED8C26",
  "#A69D50",
];

export function getColors(n) {
  const r = [];
  for (let i = 0; i < n; i++) r[i] = COLORS[i % 10];
  return r;
}
