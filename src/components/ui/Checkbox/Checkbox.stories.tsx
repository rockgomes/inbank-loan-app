import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the checkbox",
    },
    error: {
      control: "boolean",
      description: "Whether the checkbox has an error state",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "I agree to the terms and conditions",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");

    await expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);

    await expect(checkbox).toBeChecked();
  },
};

export const Checked: Story = {
  args: {
    label: "I agree to the terms and conditions",
    defaultChecked: true,
  },
};

export const WithLink: Story = {
  args: {
    label: (
      <>
        I have read and accept the{" "}
        <a href="#" onClick={(e) => e.preventDefault()}>
          Terms and Conditions of Digital Channels
        </a>
        .
      </>
    ),
    defaultChecked: true,
  },
};

export const Error: Story = {
  args: {
    label: "No one else has influenced me to apply for credit.",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "This option is disabled",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "This option is disabled but checked",
    disabled: true,
    defaultChecked: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Error state" error />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};
