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

/**
 * Format date numeric
 * @param  {Srting} reviewDate
 */
export const formatDateFR = (reviewDate) => {
  const options = {
    day: 'numeric', month: 'long', year: 'numeric',
  };
  const timestamp = Date.parse(reviewDate);
  const timestampToDate = new Date(timestamp);
  const reviewDateFormated = timestampToDate.toLocaleDateString('en-EN', options);
  return reviewDateFormated;
};

/**
 * Permet de mettre "..." après un nombre préçis de caractères
 * @param  {String} string
 * @param  {Number} limit
 */
export const truncStr = (string, limit) => (string.length > limit
  ? `${string
    .trim()
    .substring(0, limit - 3)
    .trim()}...`
  : string);

/**
 * Scrolling appearance
 */
export const scrollingAppearance = () => {
  const threshold = 0.15;
  const options = {
    root: null,
    rootMargin: '0px',
    threshold,
  };

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > threshold) {
        entry.target.classList.remove('reveal');
        observer.unobserve(entry.target);
      }
    });
  };

  document.documentElement.classList.add('reveal-loaded');

  window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(handleIntersect, options);
    const targets = document.querySelectorAll('.reveal');
    targets.forEach((target) => {
      observer.observe(target);
    });
  });
};

export default numberAbbreviation;
