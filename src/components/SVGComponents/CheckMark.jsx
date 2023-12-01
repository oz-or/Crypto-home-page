function CheckMark({ height, width }) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.76 2.366l-6.48 6.4A.828.828 0 015.7 9a.828.828 0 01-.581-.234l-3.879-4a.785.785 0 010-1.132.836.836 0 011.161 0L5.7 7.068l5.9-5.834a.836.836 0 011.16 0c.321.313.321.82 0 1.132z"
          fill="currentColor"
        ></path>
        <path
          d="M12.76 2.366l-6.48 6.4A.828.828 0 015.7 9a.828.828 0 01-.581-.234l-3.879-4a.785.785 0 010-1.132.836.836 0 011.161 0L5.7 7.068l5.9-5.834a.836.836 0 011.16 0c.321.313.321.82 0 1.132"
          stroke="currentColor"
          strokeWidth="0.5"
        ></path>
      </svg>
    </div>
  );
}

export default CheckMark;
