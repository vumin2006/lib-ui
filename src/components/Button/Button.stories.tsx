import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    // textColor: { control: "color" },
    onClick: { action: "clicked" },
  },
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Button",
    variant: "default",
    size: "default",
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    variant: "primary",
    size: "default",
  },
};
export const Danger: Story = {
  args: {
    ...Default.args,
    variant: "danger",
    size: "default",
  },
};
