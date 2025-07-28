import { FluentProvider } from "@fluentui/react-components";
import { BrowserRouter as Router } from "react-router-dom";
import { lightTheme } from "./theme/customTheme";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <FluentProvider theme={lightTheme}>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </FluentProvider>
  );
}

export default App;
