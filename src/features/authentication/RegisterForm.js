import { useState } from "react";

import Form from "../../ui/Form";
import FormGroup from "../../ui/FormGroup";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

function RegisterForm({ onSubmit, isLoading }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(name, email, password);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Name" htmlFor="register-name">
        <Input
          type="text"
          id="register-name"
          autoComplete="name"
          disabled={isLoading}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup label="Email" htmlFor="register-email">
        <Input
          type="email"
          id="register-email"
          autoComplete="email"
          disabled={isLoading}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup label="Password" htmlFor="register-password">
        <Input
          type="password"
          id="register-password"
          autoComplete="current-password"
          disabled={isLoading}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <SpinnerMini /> : "Register"}
      </Button>
    </Form>
  );
}

export default RegisterForm;
