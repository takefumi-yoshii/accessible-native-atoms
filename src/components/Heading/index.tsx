import React from "react";
import styles from "./style.module.scss";
import { mergeClassName } from "../utils";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Props = React.ComponentProps<Tag> & {
  tag: Tag;
  size?: "s" | "m" | "l";
};

export const Heading = ({ tag, size, className, ...props }: Props) =>
  React.createElement(tag, {
    ...props,
    className: mergeClassName(styles.heading, className),
    "data-size": size || "m",
  });
