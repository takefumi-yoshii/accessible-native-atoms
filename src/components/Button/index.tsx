import React from "react";
import styles from "./style.module.scss";
import { mergeClassName } from "../utils";
// ______________________________________________________
//
type ButtonTag = "button" | "input";
type ButtonLikeTag = "a";
type Tag = ButtonTag | ButtonLikeTag;
type Element = HTMLAnchorElement | HTMLButtonElement | HTMLInputElement;
// ______________________________________________________
//
type ButtonProps = { tag: ButtonTag; role?: never };
type ButtonLikeProps = { tag: ButtonLikeTag };
// ______________________________________________________
//
type Color = "primary" | "secondary";
type SpecificProps = { color?: Color };
// ______________________________________________________
//
type Props<T extends Tag> = T extends ButtonTag
  ? ButtonProps & SpecificProps & React.ComponentPropsWithRef<T>
  : ButtonLikeProps & SpecificProps & React.ComponentPropsWithRef<T>;
// ______________________________________________________
//
export const Button: <T extends Tag>(props: Props<T>) => JSX.Element =
  React.forwardRef<Element, Props<Tag>>(
    ({ tag, className, color = "primary", ...props }, ref) =>
      React.createElement(tag, {
        ref,
        tabIndex: 0,
        className: mergeClassName(styles.module, className),
        "data-color": color,
        ...props,
        ...(tag === "a" && { role: "button" }),
      })
  );
