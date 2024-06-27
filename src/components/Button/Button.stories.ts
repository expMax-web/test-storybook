import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Кнопка",
    variant: "primary",
    size: "large",
  },
};

export const Secondary: Story = {
  args: {
    children: "Кнопка",
    variant: "secondary",
    size: "large",
  },
};
