import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";
import type { Language } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    currentLanguage: {
      control: "select",
      options: ["ET", "RU", "EN"],
      description: "Currently selected language",
    },
    phoneNumber: {
      control: "text",
      description: "Phone number to display",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#F5F0FF", minHeight: "150px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    currentLanguage: "EN",
    phoneNumber: "640 8080",
  },
};

export const Estonian: Story = {
  args: {
    currentLanguage: "ET",
    phoneNumber: "640 8080",
  },
};

export const Russian: Story = {
  args: {
    currentLanguage: "RU",
    phoneNumber: "640 8080",
  },
};

export const Interactive: Story = {
  render: function InteractiveHeader() {
    const [language, setLanguage] = useState<Language>("EN");
    return (
      <Header
        currentLanguage={language}
        onLanguageChange={setLanguage}
        phoneNumber="640 8080"
      />
    );
  },
};

export const MobileView: Story = {
  args: {
    currentLanguage: "EN",
    phoneNumber: "640 8080",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
