import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoadingSpinner from "./LoadingSpinner";

import useAuth from "../hooks/useAuth";

function ProtectedRoute({ children }) {
  const [isFetched, setIsFetched] = useState(false);
  const navigate = useNavigate();
  const { userName, fetchUser } = useAuth();

  useEffect(
    function () {
      async function fetchData() {
        await fetchUser();
        setIsFetched(true);
      }

      if (!userName) {
        fetchData();
      } else {
        setIsFetched(true);
      }
    },
    [userName, fetchUser]
  );

  useEffect(
    function () {
      if (isFetched && !userName) {
        navigate("/login");
      }
    },
    [isFetched, userName, navigate]
  );

  if (!isFetched) {
    return <LoadingSpinner />;
  }

  return children;
}

export default ProtectedRoute;
