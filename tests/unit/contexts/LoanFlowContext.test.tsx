import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import {
  LoanFlowProvider,
  useLoanFlow,
} from "../../../src/contexts/LoanFlowContext";

describe("LoanFlowContext", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <LoanFlowProvider>{children}</LoanFlowProvider>
  );

  it("should throw error when used outside provider", () => {
    expect(() => {
      renderHook(() => useLoanFlow());
    }).toThrow("useLoanFlow must be used within a LoanFlowProvider");
  });

  it("should provide initial state", () => {
    const { result } = renderHook(() => useLoanFlow(), { wrapper });

    expect(result.current.state).toEqual({
      loanDetails: null,
      authMethod: null,
      personalIdCode: null,
      personalDetails: null,
      financialDetails: null,
      complianceConsents: null,
      contractAccepted: false,
      signature: null,
    });
  });

  it("should update loan details", () => {
    const { result } = renderHook(() => useLoanFlow(), { wrapper });

    const loanData = {
      monthlyPayment: 100,
      loanPeriodMonths: 12,
      paymentDay: 15,
      amount: 1000,
      merchant: "Test Merchant",
      paymentMethod: "Test Method",
    };

    act(() => {
      result.current.setLoanDetails(loanData);
    });

    expect(result.current.state.loanDetails).toEqual(loanData);
  });

  it("should update auth method", () => {
    const { result } = renderHook(() => useLoanFlow(), { wrapper });

    act(() => {
      result.current.setAuthMethod("smart-id");
    });

    expect(result.current.state.authMethod).toBe("smart-id");
  });

  it("should update personal ID code", () => {
    const { result } = renderHook(() => useLoanFlow(), { wrapper });

    act(() => {
      result.current.setPersonalIdCode("12345678901");
    });

    expect(result.current.state.personalIdCode).toBe("12345678901");
  });

  it("should update personal details", () => {
    const { result } = renderHook(() => useLoanFlow(), { wrapper });

    const personalDetails = {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "+372 12345678",
    };

    act(() => {
      result.current.setPersonalDetails(personalDetails);
    });

    expect(result.current.state.personalDetails).toEqual(personalDetails);
  });

  it("should update financial details", () => {
    const { result } = renderHook(() => useLoanFlow(), { wrapper });

    const financialDetails = {
      monthlyIncome: "3000",
      monthlyObligations: "500",
    };

    act(() => {
      result.current.setFinancialDetails(financialDetails);
    });

    expect(result.current.state.financialDetails).toEqual(financialDetails);
  });

  it("should update compliance consents", () => {
    const { result } = renderHook(() => useLoanFlow(), { wrapper });

    const consents = {
      noInfluence: true,
      termsAccepted: true,
      marketingConsent: false,
    };

    act(() => {
      result.current.setComplianceConsents(consents);
    });

    expect(result.current.state.complianceConsents).toEqual(consents);
  });

  it("should update contract accepted", () => {
    const { result } = renderHook(() => useLoanFlow(), { wrapper });

    act(() => {
      result.current.setContractAccepted(true);
    });

    expect(result.current.state.contractAccepted).toBe(true);
  });

  it("should update signature", () => {
    const { result } = renderHook(() => useLoanFlow(), { wrapper });

    act(() => {
      result.current.setSignature("signature-data");
    });

    expect(result.current.state.signature).toBe("signature-data");
  });

  it("should reset flow to initial state", () => {
    const { result } = renderHook(() => useLoanFlow(), { wrapper });

    act(() => {
      result.current.setAuthMethod("smart-id");
      result.current.setPersonalIdCode("12345678901");
      result.current.setContractAccepted(true);
    });

    expect(result.current.state.authMethod).toBe("smart-id");

    act(() => {
      result.current.resetFlow();
    });

    expect(result.current.state).toEqual({
      loanDetails: null,
      authMethod: null,
      personalIdCode: null,
      personalDetails: null,
      financialDetails: null,
      complianceConsents: null,
      contractAccepted: false,
      signature: null,
    });
  });
});
