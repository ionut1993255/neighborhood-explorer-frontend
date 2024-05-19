import { Toaster } from "react-hot-toast";

const duration = 2000;

const commonStyles = {
  maxWidth: "900px",
  fontSize: "16px",
  fontWeight: 600,
  padding: "16px 24px",
  color: "#424242",
};

function CustomToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        success: {
          duration,
          style: commonStyles,
        },
        error: {
          duration,
          style: commonStyles,
        },
      }}
    />
  );
}

export default CustomToaster;
