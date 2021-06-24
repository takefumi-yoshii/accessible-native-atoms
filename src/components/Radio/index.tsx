import React from "react";
import styles from "./style.module.scss";
import { mergeClassName } from "../utils";
// ______________________________________________________
//
type Color = "primary" | "secondary";
type SpecificProps = { color?: Color };
// ______________________________________________________
//
type Props = React.ComponentProps<"input"> & SpecificProps;
// ______________________________________________________
//
export const Radio = React.forwardRef<HTMLInputElement, Props>(
  ({ className, color = "primary", checked, ...props }, ref) => (
    <label className={mergeClassName(styles.module, className)}>
      <input
        ref={ref}
        tabIndex={0}
        data-color={color}
        {...props}
        type="radio"
        role="switch"
      />
      <span />
    </label>
  )
);
