import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import TabList from "../../ui/TabList";
import TabItem from "../../ui/TabItem";

import useAuth from "../../hooks/useAuth";

const StyledAuthFormsContainer = styled.section`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const StyledTabContent = styled.div`
  padding: 20px;
`;

function AuthForms() {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();
  const { isLoading, handleLogin, handleRegister } = useAuth();

  useEffect(
    function () {
      navigate(`/${activeTab}`);
    },
    [navigate, activeTab]
  );

  async function handleRegisterSubmit(name, email, password) {
    try {
      await handleRegister(name, email, password);
      setActiveTab("login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  }

  async function handleLoginSubmit(email, password) {
    try {
      await handleLogin(email, password, () => {
        navigate("/app");
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  function handleTabClick(tab) {
    setActiveTab(tab);
    navigate(`/${tab}`);
  }

  return (
    <StyledAuthFormsContainer>
      <TabList>
        <TabItem
          disabled={isLoading}
          active={activeTab === "login"}
          onClick={() => handleTabClick("login")}
        >
          Login
        </TabItem>
        <TabItem
          disabled={isLoading}
          active={activeTab === "register"}
          onClick={() => handleTabClick("register")}
        >
          Register
        </TabItem>
      </TabList>
      <StyledTabContent>
        {activeTab === "login" && (
          <LoginForm onSubmit={handleLoginSubmit} isLoading={isLoading} />
        )}
        {activeTab === "register" && (
          <RegisterForm onSubmit={handleRegisterSubmit} isLoading={isLoading} />
        )}
      </StyledTabContent>
    </StyledAuthFormsContainer>
  );
}

export default AuthForms;
