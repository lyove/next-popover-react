import { useState, useEffect, useRef, Children, ReactElement, cloneElement } from "react";
import NextPopover from "next-popover";
import type { PopoverProps } from "./type";

/**
 * Popover
 * @param props
 * @returns React.component
 */
function Popver(props: PopoverProps) {
  const popRef = useRef<any>(null);
  const [popInst, setPopInst] = useState<unknown>(null);

  // Child Node
  const child = Children.only(props.children) as ReactElement;
  const triggerNode = cloneElement(child, {
    ref: popRef,
  });

  useEffect(() => {
    const { content, ...restProps } = props;
    let popover = null;
    if (popRef.current) {
      popover = new NextPopover({
        ...restProps,
        trigger: popRef.current,
        content,
      });
    }
    setPopInst(popover);
  }, []);

  return triggerNode;
}

export default Popver;
