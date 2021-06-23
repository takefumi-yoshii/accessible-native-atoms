import React from "react";
import styles from "./style.module.scss";
import { mergeClassName } from "../utils";
// ______________________________________________________
//
type AriaLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingLikeTag = "p";
type Tag = HeadingTag | HeadingLikeTag;
type Element = HTMLHeadingElement | HTMLParagraphElement;
// ______________________________________________________
//
type Size = "s" | "m" | "l";
type SpecificProps = { size?: Size };
// ______________________________________________________
//
type HeadingProps = { tag: HeadingTag; "aria-level"?: never };
type HeadingLikeProps = { tag: HeadingLikeTag; "aria-level": AriaLevel };
type Props<T extends Tag> = T extends HeadingTag
  ? HeadingProps & SpecificProps & React.ComponentPropsWithRef<T>
  : HeadingLikeProps & SpecificProps & React.ComponentPropsWithRef<T>;
// ______________________________________________________
//
export const Heading: <T extends Tag>(props: Props<T>) => JSX.Element =
  React.forwardRef<Element, Props<Tag>>(
    ({ tag, className, size, ...props }, ref) =>
      React.createElement(tag, {
        ref,
        className: mergeClassName(styles.heading, className),
        "data-size": size,
        ...props,
        ...(tag === "p" && {
          role: "heading",
          "aria-level": props["aria-level"],
        }),
      })
  );
