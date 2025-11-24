export function objectSvg(collected = false) {
  const fill = collected ? '#2e7d32' : '#03a9f4';
  const accent = collected ? '#1b5e20' : '#0288d1';
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24">
    <rect x="2" y="6" width="28" height="14" rx="3" fill="${fill}" />
    <rect x="4" y="8" width="24" height="10" rx="2" fill="${accent}" />
    <rect x="14" y="4" width="4" height="4" fill="#fafafa" />
  </svg>
  `.trim();
}
