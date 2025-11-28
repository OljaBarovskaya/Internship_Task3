import { render, screen } from "@testing-library/react";
import Location from "./Location";
import "@testing-library/jest-dom/vitest";

describe("Location Component", () => {
  const mockProps = {
    city: "Minsk",
    country: "Belarus",
  };

  test("renders the city and country name correctly", () => {
    render(<Location {...mockProps} />);

    const locationText = screen.getByText("Minsk, Belarus");
    expect(locationText).toBeInTheDocument();
  });

  test("applies correct Tailwind CSS and inline styles", () => {
    render(<Location {...mockProps} />);

    const containerDiv = screen.getByText("Minsk, Belarus").closest("div");
    expect(containerDiv).toBeInTheDocument();
    expect(containerDiv).toHaveClass("flex");
    expect(containerDiv).toHaveClass("items-center");

    const iconDiv = containerDiv?.querySelector("div");
    expect(iconDiv).toBeInTheDocument();
    expect(iconDiv).toHaveClass("w-[24px]");
    expect(iconDiv).toHaveClass("h-[24px]");
    expect(iconDiv).toHaveClass("inline-block");
  });

  test("renders with different city and country names", () => {
    render(<Location city="Tokyo" country="Japan" />);

    expect(screen.getByText("Tokyo, Japan")).toBeInTheDocument();
  });
});
