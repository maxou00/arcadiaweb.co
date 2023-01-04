import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ReactOdometerProps } from "react-odometerjs";

const ReactOdometer = dynamic(import("react-odometerjs"), {
  ssr: false,
});

export default function Odometer(props: ReactOdometerProps) {
  const [value, setValue] = useState(0);

  const [ref, inView, entry] = useInView();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setValue(props.value);
      }, 1000);
    }
  }, [props.value, inView]);

  return (
    <div ref={ref}>
      <ReactOdometer theme="default" {...props} value={value} />
    </div>
  );
}
