/**
 * Formatting Cash value with K M B T
 * @param  {number} n
 */
const numberAbbreviation = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return `${+(n / 1e3).toFixed(1)}Kilo`;
  if (n >= 1e6 && n < 1e9) return `${+(n / 1e6).toFixed(1)}Million`;
  if (n >= 1e9 && n < 1e12) return `${+(n / 1e9).toFixed(1)}Billion`;
  if (n >= 1e12 && n < 1e15) return `${+(n / 1e12).toFixed(1)}Trillion`;
  if (n >= 1e15 && n < 1e18) return `${+(n / 1e15).toFixed(1)}Quadrillion`;
  return false;
};

export default numberAbbreviation;
