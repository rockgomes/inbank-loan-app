import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextField } from "../../../../src/components/ui/TextField";

describe("TextField", () => {
  it("renders an input element", () => {
    render(<TextField />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<TextField label="Email" />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("renders with placeholder", () => {
    render(<TextField placeholder="Enter your email" />);
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
  });

  it("displays error message when error prop is provided", () => {
    render(<TextField error="This field is required" />);
    expect(screen.getByRole("alert")).toHaveTextContent(
      "This field is required",
    );
  });

  it("sets aria-invalid when error is present", () => {
    render(<TextField error="Invalid input" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("displays helper text when provided", () => {
    render(<TextField helperText="Enter a valid email address" />);
    expect(screen.getByText("Enter a valid email address")).toBeInTheDocument();
  });

  it("does not display helper text when error is present", () => {
    render(<TextField helperText="Helper text" error="Error message" />);
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("renders prefix when provided", () => {
    render(<TextField prefix="$" />);
    expect(screen.getByText("$")).toBeInTheDocument();
  });

  it("renders suffix when provided", () => {
    render(<TextField suffix="€" />);
    expect(screen.getByText("€")).toBeInTheDocument();
  });

  it("is disabled when disabled prop is true", () => {
    render(<TextField disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("calls onChange when typing", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<TextField onChange={handleChange} />);

    await user.type(screen.getByRole("textbox"), "hello");
    expect(handleChange).toHaveBeenCalled();
  });

  it("calls onBlur when focus leaves", async () => {
    const user = userEvent.setup();
    const handleBlur = vi.fn();
    render(<TextField onBlur={handleBlur} />);

    const input = screen.getByRole("textbox");
    await user.click(input);
    await user.tab();

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it("applies fullWidth class when fullWidth is true", () => {
    const { container } = render(<TextField fullWidth />);
    expect((container.firstChild as HTMLElement).className).toMatch(
      /fullWidth/,
    );
  });

  it("uses provided id", () => {
    render(<TextField id="custom-id" label="Custom" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("id", "custom-id");
  });

  it("applies custom className", () => {
    const { container } = render(<TextField className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("displays value when controlled", () => {
    render(<TextField value="test value" onChange={() => {}} />);
    expect(screen.getByRole("textbox")).toHaveValue("test value");
  });
});
