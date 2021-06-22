import React from "react";
import styles from "./style.module.scss";
import { mergeClassName } from "../utils";
// ______________________________________________________
//
type Color = "primary" | "secondary";
type SpecificProp = { color?: Color };
type Tag = "button" | "a" | "input";
// ______________________________________________________
//
type TagProp = { tag: Tag }; // タグ特定
// ______________________________________________________
//
type InnerProps<T extends TagProp> = SpecificProp &
  React.ComponentPropsWithoutRef<T["tag"]>;
type Props<T extends TagProp> = InnerProps<T> & T;
// ______________________________________________________
//
const ButtonComponent = React.forwardRef<
  HTMLButtonElement,
  InnerProps<{ tag: "button" }>
>(({ className, color = "primary", ...props }, ref) => (
  <button
    ref={ref}
    tabIndex={0}
    className={mergeClassName(styles.button, className)}
    data-color={color}
    {...props}
  />
));

const InputComponent = React.forwardRef<
  HTMLInputElement,
  InnerProps<{ tag: "input" }>
>(({ className, color = "primary", ...props }, ref) => (
  <input
    ref={ref}
    tabIndex={0}
    className={mergeClassName(styles.button, className)}
    data-color={color}
    type="button"
    {...props}
  />
));

const AnchorComponent = React.forwardRef<
  HTMLAnchorElement,
  InnerProps<{ tag: "a" }>
>(({ className, color = "primary", ...props }, ref) => (
  <a
    ref={ref}
    tabIndex={0}
    className={mergeClassName(styles.button, className)}
    data-color={color}
    {...props}
    role="button" // role は強制される
  />
));
// ______________________________________________________
//
export function Button<T extends TagProp>({ tag, ...props }: Props<T>) {
  switch (tag) {
    case "a":
      return <AnchorComponent {...props} />;
    case "button":
      return <ButtonComponent {...props} />;
    default:
      return <InputComponent {...props} />;
  }
}
