import { useState, useEffect, useRef } from "react";
import { PopoverProps } from "./type";

/**
 * Popover
 * @param props
 * @returns React.component
 */
function Popver(props: PopoverProps) {
  const popRef = useRef<HTMLElement>(null);
  const [popInst, setPopInst] = useState<unknown>(null);

  useEffect(() => {
    if (popRef.current) {
      const trigger = popRef.current;
      const { content, ...restProps } = props;
      const popover = new NextPopover({
        ...restProps,
        trigger,
        content,
      });
      setPopInst(popover);
    }
  }, []);

  return (
    <span className="next-popver-react" ref={popRef}>
      {props.children}
    </span>
  );
}

export default Popver;
