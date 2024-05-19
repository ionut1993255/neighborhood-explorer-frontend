import { useCallback, useState } from "react";

import * as apiAuth from "../services/apiAuth";

function useAuth() {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegister(name, email, password) {
    setIsLoading(true);

    try {
      await apiAuth.register(name, email, password);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogin(email, password, callback) {
    setIsLoading(true);

    try {
      const name = await apiAuth.login(email, password);
      setUserName(name);

      if (callback) callback(name);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
    try {
      const name = await apiAuth.fetchUser();
      setUserName(name);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    setIsLoading(true);
    try {
      const success = await apiAuth.logout();

      if (success) {
        setUserName("");
        return true;
      }
    } catch (error) {
      console.error("Logout failed:", error.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    handleRegister,
    handleLogin,
    fetchUser,
    handleLogout,
    userName,
    isLoading,
  };
}

export default useAuth;
