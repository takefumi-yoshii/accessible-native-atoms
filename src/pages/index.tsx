import React from "react";
import { TabList } from "../components/TabList";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Checkbox } from "../components/Checkbox";
import Link from "next/link";

const Page = () => {
  const ref = React.createRef<HTMLHeadingElement>();
  return (
    <>
      <Heading tag="h1" ref={ref}>
        Button
      </Heading>
      <Heading tag="p" aria-level={6}>
        Button
      </Heading>
      <hr />
      <Heading tag="h1">Button</Heading>
      <Button tag="button">button</Button>
      <Link href="s">
        <Button tag="a" href="">
          anchor
        </Button>
      </Link>
      <Button
        tag="input"
        type="button"
        value="input[type='button']"
        disabled
        aria-disabled
      />
      <Button tag="input" type="submit" value="input[type='submit']" />
      <Button tag="input" type="reset" value="input[type='reset']" />
      <br />
      <Button tag="button" color="primary">
        button
      </Button>
      <Button tag="a" color="secondary">
        anchor
      </Button>
      <Button
        tag="input"
        color="secondary"
        type="button"
        value="input[type='button']"
      />
      <Button
        tag="input"
        color="secondary"
        type="submit"
        value="input[type='submit']"
      />
      <Button
        tag="input"
        color="secondary"
        type="reset"
        value="input[type='reset']"
      />
      <hr />
      {/*  */}
      <Heading tag="h2">TabList</Heading>
      <TabList
        theme="primary"
        tabsProps={[
          {
            children: "First Tab",
            controls: "panel-1",
          },
          {
            children: "Second Tab",
            controls: "panel-2",
          },
          {
            children: "Third Tab",
            controls: "panel-3",
            selected: true,
            onClick: () => {},
          },
        ]}
      />
      <br />
      <TabList
        theme="secondary"
        tabsProps={[
          {
            children: "First Tab",
            controls: "panel-1",
          },
          {
            children: "Second Tab",
            controls: "panel-2",
          },
          {
            children: "Third Tab",
            controls: "panel-3",
            disabled: true,
            onClick: () => {},
          },
        ]}
      />
      <hr />
      {/*  */}
      <Heading tag="h2">Checkbox</Heading>
      <Checkbox theme="primary" className="hoge" />
    </>
  );
};

export default Page;
