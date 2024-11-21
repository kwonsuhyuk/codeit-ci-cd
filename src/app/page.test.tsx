import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

describe("Home Page", () => {
  it("renders the 'Get started by editing' instruction", () => {
    render(<Home />);
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  });
});
