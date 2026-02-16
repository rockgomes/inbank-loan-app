import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "pampas",
      values: [
        { name: "pampas", value: "#FBFAF9" },
        { name: "white", value: "#FFFFFF" },
        { name: "lavender", value: "#F5F0FF" },
      ],
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
