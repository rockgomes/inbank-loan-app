import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContactDetailsCard } from "./ContactDetailsCard";

const meta = {
  title: "Loan/ContactDetailsCard",
  component: ContactDetailsCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactDetailsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Timothy Berger Anderson",
    email: "emailnamehere@email.com",
    phone: "+372 12345678",
    address: "Otsa tee 7-6, Rae vald RAE VALD 75304, HARJU MAAKOND",
    showEditButton: false,
  },
};

export const WithEditButton: Story = {
  args: {
    name: "Timothy Berger Anderson",
    email: "emailnamehere@email.com",
    phone: "+372 12345678",
    address: "Otsa tee 7-6, Rae vald RAE VALD 75304, HARJU MAAKOND",
    showEditButton: true,
    onEdit: () => console.log("Edit clicked"),
  },
};
