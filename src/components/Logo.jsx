/* Minimalist vector logo: crop corners framing an aperture/diamond.
   Uses currentColor, so it follows the text colour of its parent. */

export default function Logo({ size = 32, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Logo"
      role="img"
    >
      {/* crop corners */}
      <path d="M6 16V6h10" />
      <path d="M32 6h10v10" />
      <path d="M42 32v10H32" />
      <path d="M16 42H6V32" />

      {/* center diamond (focus / aperture) */}
      <path d="M24 15l9 9-9 9-9-9z" />
      <circle cx="24" cy="24" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
