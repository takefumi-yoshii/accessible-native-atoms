import React from "react";
import { TabList } from "../components/TabList";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Checkbox } from "../components/Checkbox";
import { Switch } from "../components/Switch";
import { Radio } from "../components/Radio";
import Link from "next/link";

const Page = () => {
  const ref = React.createRef<HTMLHeadingElement>();
  return (
    <>
      <Heading tag="h1" ref={ref} aria-level={6}>
        Heading h1
      </Heading>
      <Heading tag="p" aria-level={6}>
        Heading p
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
        color="primary"
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
        color="secondary"
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
      <Checkbox color="primary" />
      <Checkbox color="primary" disabled checked />
      <Checkbox color="secondary" />
      <Checkbox color="secondary" disabled />
      <hr />
      {/*  */}
      <Heading tag="h2">Switch</Heading>
      <Switch color="primary" />
      <Switch color="primary" disabled checked />
      <Switch color="secondary" />
      <Switch color="secondary" disabled />
      <hr />
      {/*  */}
      <Heading tag="h2">Radio</Heading>
      <Radio name="radio" color="primary" />
      <Radio name="radio" color="primary" disabled />
      <Radio name="radio" color="secondary" />
      <Radio name="radio" color="secondary" disabled />
      <hr />
      {/*  */}
      <Heading tag="h2">Textbox</Heading>
    </>
  );
};

export default Page;
