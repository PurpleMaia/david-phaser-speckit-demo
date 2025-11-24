export function npcSvg() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <rect x="4" y="4" width="24" height="24" rx="6" fill="#ffc107" />
    <rect x="8" y="10" width="16" height="10" rx="2" fill="#ffd54f" />
    <circle cx="12" cy="14" r="2" fill="#4e342e" />
    <circle cx="20" cy="14" r="2" fill="#4e342e" />
    <rect x="12" y="19" width="8" height="2" fill="#6d4c41" />
  </svg>
  `.trim();
}
