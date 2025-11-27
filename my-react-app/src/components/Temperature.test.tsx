import React from "react";
import { render, screen } from "@testing-library/react";
import TmpComponent from "./Temperature";
import type { TemperatureProps } from "../interfaces/interfaces";

describe("My test suite", () => {
  const defaultProps = {
    highT: 25,
    lowT: 10,
    sizeHighT: 1.5,
    sizeLowT: 1.0,
    units: "metric" as const,
  };

  // Test Case 1: Renders correctly with default props and metric units
  test("renders metric units correctly", () => {
    render(<TmpComponent {...defaultProps} units="metric" />);

    // Check for high temperature display (25°C)
    const highTempElement = screen.getByText("25°C");
    expect(highTempElement).toBeInTheDocument();
    expect(highTempElement).toHaveStyle("font-size: 1.5em");
    expect(highTempElement).toHaveClass("font-medium");

    // Check for low temperature display (/10°C)
    const lowTempElement = screen.getByText("/10°C");
    expect(lowTempElement).toBeInTheDocument();
    expect(lowTempElement).toHaveStyle("font-size: 1.0em");
    expect(lowTempElement).toHaveClass("text-[#B9B9B9]", "font-medium");
  });

  // Test Case 2: Renders correctly with imperial units
  test("renders imperial units correctly", () => {
    // Using Fahrenheit values for realism
    const imperialProps = {
      highT: 77,
      lowT: 50,
      sizeHighT: 2.0,
      sizeLowT: 1.2,
      units: "imperial" as const, // Type assertion for TypeScript
    };

    render(<TmpComponent {...imperialProps} />);

    // Check for high temperature display (77°F)
    const highTempElement = screen.getByText("77°F");
    expect(highTempElement).toBeInTheDocument();
    expect(highTempElement).toHaveStyle("font-size: 2.0em");

    // Check for low temperature display (/50°F)
    const lowTempElement = screen.getByText("/50°F");
    expect(lowTempElement).toBeInTheDocument();
    expect(lowTempElement).toHaveStyle("font-size: 1.2em");
  });

  // Test Case 3: Handles different temperature values (e.g., negative numbers)
  test("handles negative temperature values", () => {
    const coldProps = {
      highT: -1,
      lowT: -10,
      sizeHighT: 1.5,
      sizeLowT: 1.0,
      units: "metric" as const,
    };

    render(<TmpComponent {...coldProps} />);

    expect(screen.getByText("-1°C")).toBeInTheDocument();
    expect(screen.getByText("/-10°C")).toBeInTheDocument();
  });
});
