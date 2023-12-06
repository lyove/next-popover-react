import { useEffect, useRef, Children, ReactElement, cloneElement } from "react";
import NextPopover from "next-popover";
import type { PopoverProps } from "./type";

/**
 * Popover
 * @param props
 * @returns React.component
 */
function Popver(props: PopoverProps) {
  const popRef = useRef<any>(null);

  // Child Node
  const child = Children.only(props.children) as ReactElement;
  const triggerNode = cloneElement(child, {
    ref: popRef,
  });

  useEffect(() => {
    const { content, ...restProps } = props;;
    if (popRef.current) {
      new NextPopover({
        ...restProps,
        trigger: popRef.current,
        content,
      });
    }
  }, []);

  return triggerNode;
}

export default Popver;
