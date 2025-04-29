export default function SignatureOutsourcingLogo() {
  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Outer Circle */}
        <circle cx="250" cy="250" r="240" fill="white" stroke="black" strokeWidth="5" />

        {/* Laptop Base */}
        <path d="M130 300 L370 300 L390 350 L110 350 Z" fill="#d1d1d1" stroke="black" strokeWidth="3" />

        {/* Laptop Screen */}
        <rect x="150" y="180" width="200" height="120" fill="#333" stroke="black" strokeWidth="3" />

        {/* Laptop Keyboard */}
        <rect x="130" y="300" width="240" height="20" fill="#f0f0f0" stroke="black" strokeWidth="2" />

        {/* City Skyline */}
        <g transform="translate(160, 190) scale(0.9)">
          <rect x="10" y="30" width="20" height="70" fill="#f0d080" />
          <rect x="35" y="10" width="25" height="90" fill="#f0d080" />
          <rect x="65" y="40" width="15" height="60" fill="#f0d080" />
          <rect x="85" y="20" width="20" height="80" fill="#f0d080" />
          <rect x="110" y="50" width="30" height="50" fill="#f0d080" />
          <rect x="145" y="15" width="20" height="85" fill="#f0d080" />
          <rect x="170" y="35" width="15" height="65" fill="#f0d080" />
        </g>

        {/* Hard Hat */}
        <g transform="translate(250, 140)">
          {/* Hard Hat Base */}
          <ellipse cx="0" cy="0" rx="80" ry="30" fill="#f39c12" stroke="black" strokeWidth="3" />

          {/* Hard Hat Top */}
          <path d="M-80,0 C-80,-60 80,-60 80,0" fill="#f39c12" stroke="black" strokeWidth="3" />

          {/* Hard Hat Ridges */}
          <path d="M-40,-40 L-40,-10" stroke="black" strokeWidth="2" fill="none" />
          <path d="M-20,-50 L-20,-10" stroke="black" strokeWidth="2" fill="none" />
          <path d="M0,-55 L0,-10" stroke="black" strokeWidth="2" fill="none" />
          <path d="M20,-50 L20,-10" stroke="black" strokeWidth="2" fill="none" />
          <path d="M40,-40 L40,-10" stroke="black" strokeWidth="2" fill="none" />

          {/* Hard Hat Brim Details */}
          <path d="M-70,-5 L-60,5" stroke="black" strokeWidth="2" fill="none" />
          <path d="M70,-5 L60,5" stroke="black" strokeWidth="2" fill="none" />
        </g>

        {/* Circular Text */}
        <path id="textPath" d="M50,250 A200,200 0 1,1 450,250" fill="none" stroke="none" />
        <text fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif">
          <textPath href="#textPath" startOffset="0%">
            SIGNATURE OUTSOURCING
          </textPath>
        </text>

        <path id="textPath2" d="M450,250 A200,200 0 1,1 50,250" fill="none" stroke="none" />
        <text fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif">
          <textPath href="#textPath2" startOffset="0%">
            SOLUTIONS
          </textPath>
        </text>
      </svg>
    </div>
  )
}
