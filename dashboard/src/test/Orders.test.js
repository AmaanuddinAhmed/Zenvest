import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Orders from "../components/Orders";
import api from "../api";

// mock the shared api instance so this test doesn't hit a real backend
jest.mock("../api");

describe("Orders Component", () => {
  test("Shows the empty state when there are no orders", async () => {
    api.get.mockResolvedValueOnce({ data: [] });

    render(
      <BrowserRouter>
        <Orders />
      </BrowserRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByText("You haven't placed any orders today"),
      ).toBeInTheDocument();
    });
  });

  test("Renders a row for each order returned by the API", async () => {
    api.get.mockResolvedValueOnce({
      data: [{ name: "INFY", qty: 5, price: 1500.5, mode: "BUY" }],
    });

    render(
      <BrowserRouter>
        <Orders />
      </BrowserRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText("INFY")).toBeInTheDocument();
    });
    expect(screen.getByText("BUY")).toBeInTheDocument();
  });
});
