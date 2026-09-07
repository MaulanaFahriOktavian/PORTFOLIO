import React from "react";

export default function CanvaIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="#00C4CC" />
      <path
        d="M14.5 9.2c-.6-.4-1.4-.6-2.2-.6-2.6 0-4.3 2-4.3 4.5 0 2.2 1.5 3.8 3.8 3.8 1.2 0 2.1-.4 2.8-1.1l-.8-.8c-.5.5-1.2.8-2 .8-1.6 0-2.6-1.1-2.6-2.7 0-1.8 1.2-3.3 3.1-3.3.6 0 1.2.2 1.6.4l.6-.9z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
