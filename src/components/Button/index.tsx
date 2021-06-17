import React from "react";
import styles from "./style.module.scss";
import { mergeClassName } from "../utils";

type Props = React.ComponentProps<"button"> & {
  theme: "primary" | "secondary";
};

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ theme, className, ...props }, ref) => (
    <button
      ref={ref}
      data-theme={theme}
      className={mergeClassName(styles.button, className)}
      {...props}
    />
  )
);
