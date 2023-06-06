import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./typography";
import { typography } from "../../tokens";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: ["sm", "base", "lg", "xl", "h1", "h2", "h3", "h4", "h5"],
    },
    fontWeight: {
      control: "select",
      options: Object.keys(typography.fonts.weight),
    },
  },
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: "base",
    fontWeight: "normal",
  },
};
