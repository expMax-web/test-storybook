import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    size: 16,
  },
};
