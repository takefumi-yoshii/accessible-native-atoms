import React from "react";
import styles from "./style.module.scss";
import { mergeClassName } from "../utils";

type Props = React.ComponentProps<"input"> & {
  theme: "primary" | "secondary";
};

export const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ theme, className, ...props }, ref) => (
    <input
      ref={ref}
      tabIndex={0}
      className={mergeClassName(styles.checkbox, className)}
      data-theme={theme}
      {...props}
      type="checkbox"
    />
  )
);
