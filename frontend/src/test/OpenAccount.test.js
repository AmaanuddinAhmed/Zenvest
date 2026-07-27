import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OpenAccount from "../landing_page/OpenAccount";

// Test suite
describe("OpenAccount Component", () => {
  test("Displays CTA button", () => {
    render(<OpenAccount />);
    const signupBtn = screen.getByRole("button", { name: "Signup now" });
    expect(signupBtn).toBeInTheDocument();
    expect(signupBtn).toHaveClass("btn-primary");
  });
});
