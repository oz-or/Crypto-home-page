function Cronos({ height, width }) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width="24" height="24" rx="12" fill="currentColor"></rect>
        <path
          d="M12 .5l5.22 2.959L22.392 6.5l.048 6-.048 6-5.172 3.041L12 24.5l-5.22-2.959L1.608 18.5l-.048-6 .048-6L6.78 3.459 12 .5z"
          fill="currentColor"
        ></path>
        <g clipPath="url(#cro_svg__clip0_10116_96806)">
          <path
            d="M12.003 1.958l-9.17 5.273v10.542l9.17 5.269 9.163-5.27V7.233l-9.163-5.274zm6.448 14.253l-6.448 3.707-6.452-3.707V8.79l6.452-3.708 6.448 3.708v7.42z"
            fill="#002D74"
          ></path>
          <path
            d="M12.003 23.042l9.163-5.27V7.233l-9.163-5.274v3.128l6.448 3.707v7.421l-6.448 3.704v3.124z"
            fill="url(#cro_svg__paint0_linear_10116_96806)"
            style={{ mixBlendMode: "multiply" }}
          ></path>
          <path
            d="M11.998 1.959L2.835 7.228v10.541l9.163 5.273v-3.128L5.55 16.207v-7.42l6.448-3.704V1.959z"
            fill="url(#cro_svg__paint1_linear_10116_96806)"
            style={{ mixBlendMode: "multiply" }}
          ></path>
          <path
            d="M16.28 14.963L12 17.423l-4.284-2.46V10.04l4.283-2.463 4.28 2.463-1.781 1.025-2.499-1.438-2.498 1.438v2.87l2.498 1.438 2.499-1.438 1.781 1.028z"
            fill="#002D74"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="cro_svg__paint0_linear_10116_96806"
            x1="16.584"
            y1="23.042"
            x2="16.584"
            y2="12.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#002D74"></stop>
            <stop offset="1" stopColor="#002D74" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="cro_svg__paint1_linear_10116_96806"
            x1="7.417"
            y1="1.959"
            x2="7.417"
            y2="12.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#002D74"></stop>
            <stop offset="1" stopColor="#002D74" stopOpacity="0"></stop>
          </linearGradient>
          <clipPath id="cro_svg__clip0_10116_96806">
            <path
              fill="currentColor"
              transform="translate(1 1.5)"
              d="M0 0h22v22H0z"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default Cronos;
