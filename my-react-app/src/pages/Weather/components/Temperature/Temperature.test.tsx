import { render, screen } from "@testing-library/react";
import { Temperature } from "./Temperature";

describe("My test suite", () => {
  const defaultProps = {
    highT: 25,
    lowT: 10,
    sizeHighT: 1.5,
    sizeLowT: 1.0,
    units: "metric" as const,
  };

  test("renders metric units correctly", () => {
    render(<Temperature {...defaultProps} units="metric" />);

    const highTempElement = screen.getByText("25°C");
    expect(highTempElement).toBeInTheDocument();
    expect(highTempElement).toHaveStyle("font-size: 1.5em");
    expect(highTempElement).toHaveClass("font-medium");

    const lowTempElement = screen.getByText("/10°C");
    expect(lowTempElement).toBeInTheDocument();
    expect(lowTempElement).toHaveStyle("font-size: 1.0em");
    expect(lowTempElement).toHaveClass("text-light-gray", "font-medium");
  });

  test("renders imperial units correctly", () => {
    const imperialProps = {
      highT: 77,
      lowT: 50,
      sizeHighT: 2.0,
      sizeLowT: 1.2,
      units: "imperial" as const,
    };

    render(<Temperature {...imperialProps} />);

    const highTempElement = screen.getByText("77°F");
    expect(highTempElement).toBeInTheDocument();
    expect(highTempElement).toHaveStyle("font-size: 2.0em");

    const lowTempElement = screen.getByText("/50°F");
    expect(lowTempElement).toBeInTheDocument();
    expect(lowTempElement).toHaveStyle("font-size: 1.2em");
  });

  test("handles negative temperature values", () => {
    const coldProps = {
      highT: -1,
      lowT: -10,
      sizeHighT: 1.5,
      sizeLowT: 1.0,
      units: "metric" as const,
    };

    render(<Temperature {...coldProps} />);

    expect(screen.getByText("-1°C")).toBeInTheDocument();
    expect(screen.getByText("/-10°C")).toBeInTheDocument();
  });
});
