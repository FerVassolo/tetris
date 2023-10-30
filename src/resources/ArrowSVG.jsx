import * as React from "react"
const ArrowSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.8}
      d="M11.639 2.195v10.5a.584.584 0 0 1-.915.48L3.14 7.925c-.314-.218-.314-.742 0-.96l7.584-5.25a.583.583 0 0 1 .915.48Z"
    />
  </svg>
)
export default ArrowSVG