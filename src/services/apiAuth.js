import toast from "react-hot-toast";

import { AUTH_API_ROOT } from "../utils/constants";

export async function register(name, email, password) {
  try {
    const response = await fetch(`${AUTH_API_ROOT}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success(data.message);
      return true;
    } else if (response.status === 422) {
      const errorMessages = Object.values(data.errors).flat();
      errorMessages.forEach((error) => {
        toast.error(error);
      });
    } else {
      toast.error(data.message);
    }

    throw new Error("Registration failed!");
  } catch (error) {
    throw error;
  }
}

export async function login(email, password) {
  try {
    const response = await fetch(`${AUTH_API_ROOT}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success(data.message);
      return data.name;
    } else if (response.status === 422) {
      const errorMessages = Object.values(data.errors).flat();
      errorMessages.forEach((error) => {
        toast.error(error);
      });
    } else if (response.status === 401) {
      toast.error(data.message);
    } else {
      toast.error(data.message);
    }

    throw new Error("Login failed!");
  } catch (error) {
    throw error;
  }
}

export async function fetchUser() {
  try {
    const response = await fetch(`${AUTH_API_ROOT}/user`, {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch user data!");
    }

    return data.name;
  } catch (error) {
    throw error;
  }
}

export async function logout() {
  try {
    const response = await fetch(`${AUTH_API_ROOT}/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Logout failed!");
    }

    toast.success(data.message);
    return true;
  } catch (error) {
    throw error;
  }
}
