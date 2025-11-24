export function playerSvg() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <rect x="4" y="4" width="24" height="24" rx="4" fill="#4caf50" />
    <rect x="10" y="10" width="12" height="12" rx="2" fill="#66bb6a" />
    <circle cx="12" cy="14" r="2" fill="#e8f5e9" />
    <circle cx="20" cy="14" r="2" fill="#e8f5e9" />
    <rect x="12" y="18" width="8" height="2" fill="#2e7d32" />
  </svg>
  `.trim();
}
