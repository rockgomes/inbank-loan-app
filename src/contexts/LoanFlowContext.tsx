import { createContext, useContext, useState, type ReactNode } from "react";
import type { LoanDetailsData } from "../pages/LoanDetailsPage/LoanDetailsPage";

export interface LoanFlowState {
  loanDetails: LoanDetailsData | null;
  authMethod: string | null;
  personalIdCode: string | null;
  personalDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  } | null;
  financialDetails: {
    monthlyIncome: string;
    monthlyObligations: string;
  } | null;
  complianceConsents: {
    noInfluence: boolean;
    termsAccepted: boolean;
    marketingConsent: boolean;
  } | null;
  contractAccepted: boolean;
  signature: string | null;
}

interface LoanFlowContextType {
  state: LoanFlowState;
  setLoanDetails: (data: LoanDetailsData) => void;
  setAuthMethod: (method: string) => void;
  setPersonalIdCode: (code: string) => void;
  setPersonalDetails: (details: LoanFlowState["personalDetails"]) => void;
  setFinancialDetails: (details: LoanFlowState["financialDetails"]) => void;
  setComplianceConsents: (
    consents: LoanFlowState["complianceConsents"],
  ) => void;
  setContractAccepted: (accepted: boolean) => void;
  setSignature: (signature: string) => void;
  resetFlow: () => void;
}

const initialState: LoanFlowState = {
  loanDetails: null,
  authMethod: null,
  personalIdCode: null,
  personalDetails: null,
  financialDetails: null,
  complianceConsents: null,
  contractAccepted: false,
  signature: null,
};

const LoanFlowContext = createContext<LoanFlowContextType | undefined>(
  undefined,
);

export function LoanFlowProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LoanFlowState>(initialState);

  const setLoanDetails = (data: LoanDetailsData) => {
    setState((prev) => ({ ...prev, loanDetails: data }));
  };

  const setAuthMethod = (method: string) => {
    setState((prev) => ({ ...prev, authMethod: method }));
  };

  const setPersonalIdCode = (code: string) => {
    setState((prev) => ({ ...prev, personalIdCode: code }));
  };

  const setPersonalDetails = (details: LoanFlowState["personalDetails"]) => {
    setState((prev) => ({ ...prev, personalDetails: details }));
  };

  const setFinancialDetails = (details: LoanFlowState["financialDetails"]) => {
    setState((prev) => ({ ...prev, financialDetails: details }));
  };

  const setComplianceConsents = (
    consents: LoanFlowState["complianceConsents"],
  ) => {
    setState((prev) => ({ ...prev, complianceConsents: consents }));
  };

  const setContractAccepted = (accepted: boolean) => {
    setState((prev) => ({ ...prev, contractAccepted: accepted }));
  };

  const setSignature = (signature: string) => {
    setState((prev) => ({ ...prev, signature }));
  };

  const resetFlow = () => {
    setState(initialState);
  };

  return (
    <LoanFlowContext.Provider
      value={{
        state,
        setLoanDetails,
        setAuthMethod,
        setPersonalIdCode,
        setPersonalDetails,
        setFinancialDetails,
        setComplianceConsents,
        setContractAccepted,
        setSignature,
        resetFlow,
      }}
    >
      {children}
    </LoanFlowContext.Provider>
  );
}

export function useLoanFlow() {
  const context = useContext(LoanFlowContext);
  if (context === undefined) {
    throw new Error("useLoanFlow must be used within a LoanFlowProvider");
  }
  return context;
}
