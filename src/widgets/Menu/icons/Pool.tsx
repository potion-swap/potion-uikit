import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  
  return (
    <Svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M16 31a9.48 9.48 0 01-4.78-1.27 5.26 5.26 0 01-2.82-3.22 3.57 3.57 0 01.6-2.88 15.06 15.06 0 01-6-9.11c-.48-2.66-.09-6.65 4.51-10.58A12.75 12.75 0 0116 1a12.65 12.65 0 018.51 2.9l-.5.58.55-.54c4.6 3.93 5 7.92 4.51 10.58a15.06 15.06 0 01-6 9.11 3.57 3.57 0 01.57 2.88 5.31 5.31 0 01-2.82 3.23A9.57 9.57 0 0116 31zm.1-28.46H16a11 11 0 00-7.48 2.53c-3.26 2.78-4.64 5.93-4 9.17a13.73 13.73 0 006.12 8.64.78.78 0 010 1.28 1.93 1.93 0 00-.7 2A3.85 3.85 0 0012 28.4a8 8 0 008 0 3.85 3.85 0 002.1-2.26 1.93 1.93 0 00-.7-2 .78.78 0 010-1.28 13.73 13.73 0 006.12-8.64c.59-3.24-.79-6.39-4-9.13h-.05a11 11 0 00-7.37-2.55z"
      />
      <path
        d="M20.3 20.88a2.88 2.88 0 01-.65-.07c-2.78-.61-3.65-4.71-3.36-7.29.21-1.85 1.25-5.13 3.84-5.65a4.84 4.84 0 014 1.39c2.47 2.35 1.64 6 1.6 6.18-.63 2.7-3.05 5.44-5.43 5.44zm.13-11.5c-1.6.32-2.44 2.75-2.61 4.31C17.56 16 18.45 19 20 19.3s3.69-1.84 4.25-4.21c0 0 .68-3-1.16-4.71a3.37 3.37 0 00-2.64-1z"
      />
      <path
        d="M12.21 20.88c-2.38 0-4.79-2.74-5.43-5.44 0-.16-.87-3.83 1.6-6.18a4.88 4.88 0 014-1.39c2.59.52 3.63 3.8 3.84 5.65.29 2.58-.59 6.68-3.37 7.29a2.81 2.81 0 01-.64.07zm-.52-11.54a3.71 3.71 0 00-2.25 1c-1.83 1.74-1.17 4.67-1.16 4.7.56 2.38 2.75 4.55 4.25 4.22S15 16 14.69 13.69c-.17-1.56-1-4-2.61-4.31a1.72 1.72 0 00-.39-.04zM16.08 20.76c1.25-.07 2 1.28 2.2 1.57.37.63.71 1.68.37 1.94s-1.87-.85-2.47-1.37c-.85 1.1-1.71 1.78-2.11 1.58s-.32-1.66.34-2.61a2.35 2.35 0 011.67-1.11z"
      />
    </Svg>
  );
};

export default Icon;
