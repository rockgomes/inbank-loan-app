import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "../../../../src/components/ui/Checkbox";

describe("Checkbox", () => {
  it("renders a checkbox input", () => {
    render(<Checkbox />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
  });

  it("is unchecked by default", () => {
    render(<Checkbox />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("is checked when checked prop is true", () => {
    render(<Checkbox checked onChange={() => {}} />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("toggles checked state when clicked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} />);

    await user.click(screen.getByRole("checkbox"));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("does not call onChange when disabled", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox disabled onChange={handleChange} />);

    await user.click(screen.getByRole("checkbox"));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("applies error styling when error is true", () => {
    const { container } = render(<Checkbox error />);
    expect((container.firstChild as HTMLElement).className).toMatch(/error/);
  });

  it("uses provided id", () => {
    render(<Checkbox id="custom-checkbox" />);
    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "id",
      "custom-checkbox",
    );
  });

  it("applies custom className", () => {
    const { container } = render(<Checkbox className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("renders label as ReactNode", () => {
    render(
      <Checkbox
        label={
          <span>
            I agree to the <a href="/terms">terms</a>
          </span>
        }
      />,
    );
    expect(screen.getByRole("link", { name: "terms" })).toBeInTheDocument();
  });

  it("clicking label toggles checkbox", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox label="Toggle me" onChange={handleChange} />);

    await user.click(screen.getByText("Toggle me"));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders asterisk when required is true", () => {
    render(<Checkbox label="Accept terms" required />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("does not render asterisk when required is false", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });

  it("sets aria-required attribute when required is true", () => {
    render(<Checkbox label="Accept terms" required />);
    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "aria-required",
      "true",
    );
  });

  it("does not set aria-required when required is false", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "aria-required",
      "false",
    );
  });
});
