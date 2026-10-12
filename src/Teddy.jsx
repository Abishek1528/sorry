import React from 'react'

// Cute white mochi/teddy blob character with pink heart cheeks
export default function Teddy({ size = 200 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="cute teddy"
    >
      <defs>
        <radialGradient id="bodyGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f3e7ec" />
        </radialGradient>
        <radialGradient id="cheekGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff8fb1" />
          <stop offset="100%" stopColor="#ff5e8a" />
        </radialGradient>
        <linearGradient id="mouthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff7a9c" />
          <stop offset="100%" stopColor="#e84a6f" />
        </linearGradient>
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* waving arm */}
      <ellipse cx="58" cy="118" rx="16" ry="22" fill="#f3e7ec" transform="rotate(-25 58 118)" />

      {/* body / head blob */}
      <ellipse cx="100" cy="110" rx="70" ry="72" fill="url(#bodyGrad)" />

      {/* right arm */}
      <ellipse cx="150" cy="132" rx="14" ry="18" fill="#f3e7ec" transform="rotate(20 150 132)" />

      {/* left cheek heart */}
      <path
        d="M62 110
           c-6 -10 -22 -6 -18 6
           c3 10 18 16 18 16
           c0 0 15 -6 18 -16
           c4 -12 -12 -16 -18 -6 z"
        fill="url(#cheekGrad)"
        opacity="0.9"
      />
      {/* right cheek heart */}
      <path
        d="M138 110
           c-6 -10 -22 -6 -18 6
           c3 10 18 16 18 16
           c0 0 15 -6 18 -16
           c4 -12 -12 -16 -18 -6 z"
        fill="url(#cheekGrad)"
        opacity="0.9"
      />

      {/* eyes */}
      <ellipse cx="82" cy="92" rx="5" ry="6.5" fill="#2b1418" />
      <ellipse cx="118" cy="92" rx="5" ry="6.5" fill="#2b1418" />
      <circle cx="83.5" cy="90" r="1.6" fill="#fff" />
      <circle cx="119.5" cy="90" r="1.6" fill="#fff" />

      {/* heart-shaped smile */}
      <path
        d="M100 134
           c-8 -10 -24 -4 -18 8
           c4 9 18 14 18 14
           c0 0 14 -5 18 -14
           c6 -12 -10 -18 -18 -8 z"
        fill="url(#mouthGrad)"
      />
    </svg>
  )
}
