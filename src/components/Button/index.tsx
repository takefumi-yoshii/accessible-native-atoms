import React from "react";
import styles from "./style.module.scss";
import { mergeClassName } from "../utils";
// ______________________________________________________
//
type Tag = "a" | "button" | "input";
type Element = HTMLAnchorElement | HTMLButtonElement | HTMLInputElement;
// ______________________________________________________
//
type Color = "primary" | "secondary";
type SpecificProp = { color?: Color };
// ______________________________________________________
//
type Props<T extends Tag> = SpecificProp &
  React.ComponentPropsWithoutRef<T> & { tag: T };
// ______________________________________________________
//
export const Button: <T extends Tag>(props: Props<T>) => JSX.Element =
  React.forwardRef<Element, Props<Tag>>(
    ({ tag, className, color = "primary", ...props }, ref) =>
      React.createElement(tag, {
        ref,
        tabIndex: 0,
        className: mergeClassName(styles.button, className),
        "data-color": color,
        ...(tag === "button" && { type: "button" }),
        ...props,
        ...(tag === "a" && { role: "button" }),
      })
  );
