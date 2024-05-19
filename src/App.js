import styled from "styled-components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CustomToaster from "./ui/CustomToaster";
import ProtectedRoute from "./ui/ProtectedRoute";
import AuthForms from "./features/authentication/AuthForms";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PageNotFound from "./pages/PageNotFound";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="/login" />} />

          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            }
          />

          <Route element={<AuthForms />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <CustomToaster />
    </StyledApp>
  );
}

export default App;
