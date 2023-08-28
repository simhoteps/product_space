import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Router } from "react-router-dom";
import Header from "./header";

test("appBar renders correctly", () => {
  render(<Header />);

  const typographyEl = screen.getByTestId("headerAppBar");
  expect(typographyEl).toBeInTheDocument();
});

// 1- Mocking the hook using jest.fn
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Header", () => {
  it("has a button and does navigate to other component", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Testing navigating using the button
    expect(screen.getByTestId("titleName")).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("titleName"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });
});
