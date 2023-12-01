function Ethereum({ height, width }) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12.5" r="12" fill="#607CF1"></circle>
        <path
          d="M11.751 3.953l-.114.39v11.3l.114.114 5.246-3.1-5.246-8.704z"
          fill="#B6CCFB"
        ></path>
        <path
          d="M11.751 3.953l-5.245 8.703 5.245 3.1V3.953z"
          fill="#F9FFFB"
        ></path>
        <path
          d="M11.751 16.75l-.064.079v4.025l.064.189L17 13.65 11.75 16.75z"
          fill="#BCD7FF"
        ></path>
        <path
          d="M11.751 21.043V16.75l-5.245-3.1 5.245 7.393z"
          fill="#FBFEFF"
        ></path>
        <path
          d="M11.751 15.757l5.245-3.1-5.245-2.385v5.485z"
          fill="#7D99EA"
        ></path>
        <path
          d="M6.506 12.656l5.245 3.1v-5.484l-5.245 2.384z"
          fill="#C2CAF9"
        ></path>
      </svg>
    </div>
  );
}

export default Ethereum;
