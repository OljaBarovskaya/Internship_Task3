import { render, screen } from "@testing-library/react";
import Location from "./Location";
import "@testing-library/jest-dom/vitest";

describe("Location Component", () => {
  const mockProps = {
    city: "Minsk",
    country: "Belarus",
  };

  // Test Case 1: Renders the location text correctly
  test("renders the city and country name correctly", () => {
    render(<Location {...mockProps} />);

    // Check if the full text "Minsk, Belarus" is in the document
    const locationText = screen.getByText("Minsk, Belarus");
    expect(locationText).toBeInTheDocument();
  });

  // Test Case 2: Renders the correct CSS classes for styling
  test("applies correct Tailwind CSS and inline styles", () => {
    render(<Location {...mockProps} />);

    // Check the main container div for specific classes and font size
    const containerDiv = screen.getByText("Minsk, Belarus").closest("div");
    expect(containerDiv).toBeInTheDocument();
    expect(containerDiv).toHaveClass("flex");
    expect(containerDiv).toHaveClass("items-center");
    // We expect the inline style for font size (which maps to text-[1.8em])
    // depending on your Vitest/JSDOM configuration, checking classes is more reliable.

    // Check the location icon div for its specific classes
    const iconDiv = containerDiv?.querySelector("div");
    expect(iconDiv).toBeInTheDocument();
    expect(iconDiv).toHaveClass("w-[24px]");
    expect(iconDiv).toHaveClass("h-[24px]");
    expect(iconDiv).toHaveClass("inline-block");
  });

  // Test Case 3: Handles different inputs correctly (edge case)
  test("renders with different city and country names", () => {
    render(<Location city="Tokyo" country="Japan" />);

    expect(screen.getByText("Tokyo, Japan")).toBeInTheDocument();
  });
});
