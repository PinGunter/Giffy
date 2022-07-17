import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", async () => {
  render(<App />);
  const title = await screen.findByText(/Tendencias/i);
  expect(title).toBeInTheDocument();
});
