import { useState } from "react";

import Form from "../../ui/Form";
import FormGroup from "../../ui/FormGroup";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm({ onSubmit, isLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(email, password);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Email" htmlFor="login-email">
        <Input
          type="email"
          id="login-email"
          autoComplete="email"
          disabled={isLoading}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup label="Password" htmlFor="login-password">
        <Input
          type="password"
          id="login-password"
          autoComplete="current-password"
          disabled={isLoading}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <SpinnerMini /> : "Login"}
      </Button>
    </Form>
  );
}

export default LoginForm;
