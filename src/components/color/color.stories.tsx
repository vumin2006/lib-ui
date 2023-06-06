import type { Meta, StoryObj } from "@storybook/react";
import Color from "./color";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof Color> = {
  title: "Components/Color",
  component: Color,
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof Color>;

export const Default: Story = {};

export const Common: Story = {
  args: {
    type: "common",
  },
};
