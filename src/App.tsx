import { BrowserRouter } from "react-router-dom";
import { LoanFlowProvider } from "./contexts/LoanFlowContext";
import { AppRoutes } from "./routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <LoanFlowProvider>
        <AppRoutes />
      </LoanFlowProvider>
    </BrowserRouter>
  );
}

export default App;
