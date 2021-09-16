import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path
        d="M22.06 17c-3.06-3.11-3.71-6-3.71-8a8.87 8.87 0 01.11-1.41l-.78.41-.34.18-.34.22-.6.32.6-.52.74-.61 1-.83h.05a2 2 0 00.15-.18 1.09 1.09 0 00.22-.77.58.58 0 00-.21-.37.55.55 0 00-.34-.15.62.62 0 01-.07.19 1 1 0 01-.54.51 1.33 1.33 0 01-.35.13 1.21 1.21 0 01-.33.07 7.26 7.26 0 01-1.32.03 9.07 9.07 0 01-1.29-.06l-.33-.08A1 1 0 0114 5.9a.76.76 0 01-.3-.36.85.85 0 01-.05-.24 1 1 0 00-.8.44 1 1 0 00.08.83.91.91 0 00.3.32l.12.06.05.14c.3 1.19 1 5.4-3.49 9.88-4.8 4.84 1.09 12.63 1.2 12.72A7.81 7.81 0 0016 31c3.41 0 4.91-1.34 4.92-1.35S26.9 21.81 22.06 17zm-2 11.37a8.21 8.21 0 01-7.93-.1 11.06 11.06 0 01-2-5.74 5.16 5.16 0 013.15-2.57c1.89-.42 3.13.91 5.69.69a7.53 7.53 0 003-.93 12.13 12.13 0 01-.13 4.68 11.57 11.57 0 01-1.77 3.94z"
      />
      <path
        d="M17.78 2.56v.32l-.37 2.61a7.37 7.37 0 01-1.41.09 6.37 6.37 0 01-1.37-.1L14.25 3a2.49 2.49 0 010-.77 1.13 1.13 0 01.39-.82 2.64 2.64 0 012.73 0 1.18 1.18 0 01.41.82v.33z"
      />
    </Svg>
  );
};

export default Icon;
