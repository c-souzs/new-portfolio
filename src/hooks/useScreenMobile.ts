import { useEffect, useState } from "react";

export default function useScreenMobile() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    setMobile(isMobile);
  }, [])

  return mobile;
}