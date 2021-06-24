import React from "react";
import styles from "./style.module.scss";
import { mergeClassName } from "../utils";
// ______________________________________________________
//
type Color = "primary" | "secondary";
type SpecificProps = {
  color?: Color;
  tabsProps: (React.ComponentProps<"button"> & {
    controls: string;
    selected?: boolean;
  })[];
};
// ______________________________________________________
//
type Props = React.ComponentProps<"div"> & SpecificProps;
// ______________________________________________________
//
export const TabList = ({
  className,
  color = "primary",
  tabsProps,
  ...props
}: Props) => (
  <div
    role="tablist"
    data-color={color}
    className={mergeClassName(styles.module, className)}
    {...props}
  >
    {tabsProps.map(({ selected, controls, ...tabProps }, index) => (
      <button
        role="tab"
        id={`tab-${index}`}
        key={`tab-${index}`}
        aria-selected={selected}
        aria-controls={controls}
        tabIndex={0}
        {...tabProps}
      />
    ))}
  </div>
);
