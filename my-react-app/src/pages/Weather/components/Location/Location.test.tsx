import { render, screen } from "@testing-library/react";
import { Location } from "./Location";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("@/assets/img/location.png", () => ({
  default: "mock-location-icon.png",
}));

describe("Location Component", () => {
  const mockProps = {
    city: "Minsk",
    country: "Belarus",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders the city and country name correctly", () => {
    render(<Location {...mockProps} />);

    const locationText = screen.getByText("Minsk, Belarus");
    expect(locationText).toBeInTheDocument();
  });

  test("renders the location icon with correct attributes", () => {
    render(<Location {...mockProps} />);

    const icon = screen.getByRole("img", { name: /locationIcon/i });
    expect(icon).toBeInTheDocument();

    expect(icon).toHaveAttribute("src", "mock-location-icon.png");
    expect(icon).toHaveAttribute("alt", "locationIcon");
    expect(icon).toHaveClass("w-[24px]");
  });

  test("applies correct Tailwind CSS classes to the container", () => {
    render(<Location {...mockProps} />);

    const containerDiv = screen.getByText("Minsk, Belarus").closest("div");
    expect(containerDiv).toBeInTheDocument();

    expect(containerDiv).toHaveClass(
      "flex items-center p-[9px_0] gap-x-space-small text-[1.8rem]"
    );
  });

  test("renders with different city and country names", () => {
    render(<Location city="Tokyo" country="Japan" />);

    expect(screen.getByText("Tokyo, Japan")).toBeInTheDocument();
  });
});
