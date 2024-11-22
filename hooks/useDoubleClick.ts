import { useEffect } from "react";

const useDoubleClick = (onDoubleClick) => {
  useEffect(() => {
    const handleDoubleClick = () => {
      if (onDoubleClick) {
        onDoubleClick();
      }
    };
    document.addEventListener("dblclick", handleDoubleClick);
    return () => {
      document.removeEventListener("dblclick", handleDoubleClick);
    };
  }, [onDoubleClick]);
};
export default useDoubleClick;
