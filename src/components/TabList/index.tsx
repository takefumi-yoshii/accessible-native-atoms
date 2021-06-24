import React from "react";
import styles from "./style.module.scss";
import { mergeClassName } from "../utils";

type Props = React.ComponentProps<"div"> & {
  theme: "primary" | "secondary";
  tabsProps: (React.ComponentProps<"button"> & {
    controls: string;
    selected?: boolean;
  })[];
};

export const TabList = ({ theme, className, tabsProps, ...props }: Props) => (
  <div
    role="tablist"
    data-theme={theme}
    className={mergeClassName(styles.tablist, className)}
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
