import React from "react";
import { TabList } from "../components/TabList";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";

const Page = () => (
  <>
    <Heading tag="h2">Button</Heading>
    <Button theme="primary">primary</Button>
    <Button theme="secondary">secondary</Button>
    <hr />
    {/*  */}
    <Heading tag="h2" size="l">
      TabList
    </Heading>
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
  </>
);

export default Page;
