import React from "react";
import styles from "./style.module.scss";
import { mergeClassName } from "../utils";
// ______________________________________________________
//
type Size = "s" | "m" | "l";
type SpecificProps = { size?: Size };
type AriaLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingLikeTag = "div" | "p";
type Tag = HeadingTag | HeadingLikeTag;
// ______________________________________________________
//
type HeadingProps = { tag: HeadingTag; "aria-level"?: never };
type HeadingLikeProps = { tag: HeadingLikeTag; "aria-level": AriaLevel };
type TagProp = HeadingProps | HeadingLikeProps;
type Props<T extends Tag> = T extends HeadingTag
  ? HeadingProps & SpecificProps & React.ComponentPropsWithoutRef<T>
  : HeadingLikeProps & SpecificProps & React.ComponentPropsWithoutRef<T>;
// ______________________________________________________
//
export const HeadingComponent = React.forwardRef<
  HTMLHeadingElement,
  Props<HeadingTag>
>(({ tag, className, size = "l", ...props }, ref) =>
  React.createElement(tag, {
    ref,
    ...props,
    className: mergeClassName(styles.heading, className),
    "data-size": size,
  })
);

export const HeadingLikeComponent = React.forwardRef<
  HTMLParagraphElement | HTMLDivElement,
  Props<HeadingLikeTag>
>(({ tag, className, size = "l", ...props }, ref) =>
  React.createElement(tag, {
    ref,
    ...props,
    className: mergeClassName(styles.heading, className),
    role: "heading",
    "data-size": size,
    "aria-level": props["aria-level"],
  })
);
// ______________________________________________________
//
export function Heading<T extends TagProp, K extends T["tag"]>(
  props: Props<K>
) {
  switch (props.tag) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return <HeadingComponent {...props} />;
    default:
      return <HeadingLikeComponent {...props} />;
  }
}
