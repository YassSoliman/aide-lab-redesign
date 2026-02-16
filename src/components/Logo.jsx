export default function Logo({ inverted = false, className = "h-10 md:h-12" }) {
  return (
    <svg
      viewBox="0 0 180 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AIDE Lab"
    >
      {/* AIDE text */}
      <text
        x="0"
        y="32"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="700"
        letterSpacing="2"
        fill={inverted ? "#FAF9F6" : "#1A1A1A"}
      >
        AIDE
      </text>
      {/* Lab text */}
      <text
        x="95"
        y="32"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="300"
        fontStyle="italic"
        fill="#E85A4F"
      >
        Lab
      </text>
      {/* Precision line accent */}
      <rect
        x="0"
        y="40"
        width="60"
        height="2"
        fill="#E85A4F"
      />
    </svg>
  )
}
