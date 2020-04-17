export default function({ color }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="6.73684" height="6.73684" rx="1" fill={color} />
      <rect x="9.26318" width="6.73684" height="6.73684" rx="1" fill={color} />
      <rect y="9.26318" width="6.73684" height="6.73684" rx="1" fill={color} />
      <rect
        x="9.26318"
        y="9.26318"
        width="6.73684"
        height="6.73684"
        rx="1"
        fill={color}
      />
    </svg>
  );
}
