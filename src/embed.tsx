import React, { useRef, useEffect } from "react";

const DangerousHTML = ({ html }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!html || !ref.current) {
      return;
    }
    const slotHtml = document.createRange().createContextualFragment(html);
    ref.current.append(slotHtml);
  }, []);

  return <div style={{ display: 'contents' }} ref={ref}></div>;
};

export default DangerousHTML;
