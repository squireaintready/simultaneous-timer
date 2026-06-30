import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the add-timer button", () => {
  render(<App />);
  expect(screen.getByText(/add timer/i)).toBeInTheDocument();
});
