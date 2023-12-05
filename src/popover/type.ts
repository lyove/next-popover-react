import { PopoverConfig } from "next-popover";

export interface PopoverProps extends Omit<PopoverConfig, "trigger"> {
  children: string | React.ReactElement;
}
