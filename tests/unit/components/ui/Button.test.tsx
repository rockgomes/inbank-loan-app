import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../../../../src/components/ui/Button";

describe("Button", () => {
  it("renders with children text", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" }),
    ).toBeInTheDocument();
  });

  it("renders filled variant by default", () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/filled/);
  });

  it("renders filledLight variant", () => {
    render(<Button variant="filledLight">Light</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/filledLight/);
  });

  it("renders outlined variant", () => {
    render(<Button variant="outlined">Outlined</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/outlined/);
  });

  it("renders text variant", () => {
    render(<Button variant="text">Text</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/_text_/);
  });

  it("renders small size", () => {
    render(<Button size="small">Small</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/small/);
  });

  it("renders full width when fullWidth is true", () => {
    render(<Button fullWidth>Full Width</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/fullWidth/);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button.className).toMatch(/disabled/);
  });

  it("calls onClick handler when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>,
    );

    await user.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders icon on the left by default", () => {
    const icon = <span data-testid="icon">★</span>;
    render(<Button icon={icon}>With Icon</Button>);

    const button = screen.getByRole("button");
    const iconElement = screen.getByTestId("icon");
    const label = screen.getByText("With Icon");

    const iconIndex = Array.from(button.children).findIndex((child) =>
      child.contains(iconElement),
    );
    const labelIndex = Array.from(button.children).findIndex((child) =>
      child.contains(label),
    );

    expect(iconIndex).toBeLessThan(labelIndex);
  });

  it("renders icon on the right when iconPosition is right", () => {
    const icon = <span data-testid="icon">★</span>;
    render(
      <Button icon={icon} iconPosition="right">
        With Icon
      </Button>,
    );

    const button = screen.getByRole("button");
    const iconElement = screen.getByTestId("icon");
    const label = screen.getByText("With Icon");

    const iconIndex = Array.from(button.children).findIndex((child) =>
      child.contains(iconElement),
    );
    const labelIndex = Array.from(button.children).findIndex((child) =>
      child.contains(label),
    );

    expect(iconIndex).toBeGreaterThan(labelIndex);
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });
});
