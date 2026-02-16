import { Routes, Route } from "react-router-dom";
import { LoanDetailsPage } from "./pages/LoanDetailsPage";
import { IdentityVerificationPage } from "./pages/IdentityVerificationPage";
import { PersonalDetailsPage } from "./pages/PersonalDetailsPage";
import { DecisionPage } from "./pages/DecisionPage";
import { LoanOfferPage } from "./pages/LoanOfferPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoanDetailsPage />} />
      <Route path="/loan-offer" element={<LoanOfferPage />} />
      <Route path="/identity" element={<IdentityVerificationPage />} />
      <Route path="/personal-details" element={<PersonalDetailsPage />} />
      <Route path="/decision" element={<DecisionPage />} />
    </Routes>
  );
}
