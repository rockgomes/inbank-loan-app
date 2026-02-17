import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Button } from "./Button";

const EditIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "filledLight", "outlined", "text"],
      description: "The visual style of the button",
    },
    size: {
      control: "select",
      options: ["default", "small"],
      description: "The size of the button",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the button should take full width",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Position of the icon relative to the label",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: "filled",
    children: "Continue",
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Continue" });

    await userEvent.click(button);

    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const FilledLight: Story = {
  args: {
    variant: "filledLight",
    children: "Edit conditions",
    icon: <EditIcon />,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Cancel",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Back",
    icon: <ArrowLeftIcon />,
  },
};

export const Disabled: Story = {
  args: {
    variant: "filled",
    children: "Confirm and continue",
    disabled: true,
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await expect(button).toBeDisabled();

    await userEvent.click(button);

    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const FullWidth: Story = {
  args: {
    variant: "filled",
    children: "Continue",
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "396px" }}>
        <Story />
      </div>
    ),
  ],
};

export const WithIconLeft: Story = {
  args: {
    variant: "filledLight",
    children: "Edit conditions",
    icon: <EditIcon />,
    iconPosition: "left",
  },
};

export const WithIconRight: Story = {
  args: {
    variant: "filled",
    children: "Download",
    icon: <ArrowLeftIcon />,
    iconPosition: "right",
  },
};

export const Small: Story = {
  args: {
    variant: "filled",
    children: "Small Button",
    size: "small",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "flex-start",
      }}
    >
      <Button variant="filled">Filled (Primary)</Button>
      <Button variant="filledLight" icon={<EditIcon />}>
        Filled Light
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text" icon={<ArrowLeftIcon />}>
        Text / Back
      </Button>
      <Button variant="filled" disabled>
        Disabled
      </Button>
    </div>
  ),
};
