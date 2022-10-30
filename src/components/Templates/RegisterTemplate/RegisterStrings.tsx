export const inputs = [
  {
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special characters!",
    id: 1,
    name: "username",
    placeholder: "Username",
    required: true,
    type: "text",
  },
  {
    errorMessage: "It should be a valid email address!",
    id: 2,
    name: "email",
    placeholder: "Email",
    required: true,
    type: "email",
  },
  {
    errorMessage:
      "Password should be 8-20 characters and should include at least one number and one special character!",
    id: 3,
    name: "password",
    placeholder: "Password",
    required: true,
    type: "password",
  },
  {
    errorMessage: "Passwords don't match!",
    id: 4,
    name: "confirmPassword",
    placeholder: "Confirm Password",
    required: true,
    type: "password",
  },
];

export const formType = "register";
