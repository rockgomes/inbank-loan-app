import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { PersonalDetailsPage } from "../../../src/pages/PersonalDetailsPage";
import { LoanFlowProvider } from "../../../src/contexts/LoanFlowContext";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const renderPage = () => {
  return render(
    <MemoryRouter>
      <LoanFlowProvider>
        <PersonalDetailsPage />
      </LoanFlowProvider>
    </MemoryRouter>,
  );
};

describe("PersonalDetailsPage", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders the page title", () => {
    renderPage();
    expect(screen.getByText("Hello!")).toBeInTheDocument();
  });

  it("renders contact details", () => {
    renderPage();
    expect(screen.getByText("Timothy Berger Anderson")).toBeInTheDocument();
    expect(screen.getByText("emailnamehere@email.com")).toBeInTheDocument();
  });

  it("renders financial input fields", () => {
    renderPage();
    expect(screen.getByLabelText(/monthly net income/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/monthly obligations/i)).toBeInTheDocument();
  });

  it("renders compliance checkboxes", () => {
    renderPage();
    expect(
      screen.getByLabelText(/no one else has influenced/i),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/terms and conditions/i)).toBeInTheDocument();
  });

  it("has disabled continue button initially", () => {
    renderPage();
    const button = screen.getByRole("button", {
      name: /confirm and continue/i,
    });
    expect(button).toBeDisabled();
  });

  it("enables continue button when form is valid", async () => {
    const user = userEvent.setup();
    renderPage();

    const incomeInput = screen.getByLabelText(/monthly net income/i);
    const obligationsInput = screen.getByLabelText(/monthly obligations/i);

    await user.type(incomeInput, "3000");
    await user.type(obligationsInput, "500");

    const checkboxes = screen.getAllByRole("checkbox");
    await user.click(checkboxes[0]);
    await user.click(checkboxes[1]);

    const button = screen.getByRole("button", {
      name: /confirm and continue/i,
    });
    await waitFor(() => {
      expect(button).toBeEnabled();
    });
  });

  it("navigates to decision page on valid submission", async () => {
    const user = userEvent.setup();
    renderPage();

    const incomeInput = screen.getByLabelText(/monthly net income/i);
    const obligationsInput = screen.getByLabelText(/monthly obligations/i);

    await user.type(incomeInput, "3000");
    await user.type(obligationsInput, "500");

    const checkboxes = screen.getAllByRole("checkbox");
    await user.click(checkboxes[0]);
    await user.click(checkboxes[1]);

    const button = screen.getByRole("button", {
      name: /confirm and continue/i,
    });
    await user.click(button);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/decision");
    });
  });

  it("navigates back when back button is clicked", async () => {
    const user = userEvent.setup();
    renderPage();

    const backButton = screen.getByText(/back/i);
    await user.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith("/identity");
  });

  it("shows validation error for invalid income", async () => {
    const user = userEvent.setup();
    renderPage();

    const incomeInput = screen.getByLabelText(/monthly net income/i);
    await user.type(incomeInput, "-100");
    await user.tab();

    await waitFor(() => {
      expect(screen.getByText(/valid number/i)).toBeInTheDocument();
    });
  });
});
