import { describe, test, expect, vi, beforeEach } from "vitest";
import type { Mock } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import WeatherDashboard from ".";
import * as utils from "@/utils/index";
import { LOCATION_DEFAULT, LOCATION_MAIN } from "@/constants/constants";

vi.mock("@/utils/helpers", () => ({
  getStorage: vi.fn(),
}));

vi.mock("./Search", () => ({
  default: vi.fn(({ onCityChange, units, onUnitsChange, noError }) => (
    <div data-testid="mock-search">
      <span>Units: {units}</span>
      <button onClick={() => onCityChange("New City")}>Change City</button>
      <button onClick={() => onUnitsChange("imperial")}>Change Units</button>
      <span>Status: {noError ? "Correct" : "Incorrect"}</span>
    </div>
  )),
}));

vi.mock("./Dashboard", () => ({
  default: vi.fn(({ units }) => (
    <div data-testid="mock-dashboard">Dashboard Units: {units}</div>
  )),
}));

vi.mock("@/services/WeatherProvider", () => ({
  WeatherProvider: vi.fn(({ children, city, units }) => (
    <div data-testid="mock-weather-provider">
      <span>Provider City: {city}</span>
      <span>Provider Units: {units}</span>
      {children}
    </div>
  )),
}));

describe("WeatherDashboard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  const mockGetStorage = utils.getStorage as Mock;

  test("renders with default location and metric units when local storage is empty", () => {
    mockGetStorage.mockReturnValue(null);

    render(<WeatherDashboard />);

    expect(
      screen.getByText(`Provider City: ${LOCATION_DEFAULT}`)
    ).toBeInTheDocument();
    expect(screen.getByText("Provider Units: metric")).toBeInTheDocument();
    expect(screen.getByText("Units: metric")).toBeInTheDocument();
    expect(screen.getByText("Dashboard Units: metric")).toBeInTheDocument();
  });

  test("renders Search and Dashboard components with default state", () => {
    const savedCity = "London";
    const savedUnits = "imperial";

    mockGetStorage.mockImplementation((key: string) => {
      if (key === LOCATION_MAIN) return savedCity;
      if (key === "units") return savedUnits;
      return null;
    });

    render(<WeatherDashboard />);

    expect(screen.getByText(`Provider City: ${savedCity}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Provider Units: ${savedUnits}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Units: ${savedUnits}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Dashboard Units: ${savedUnits}`)
    ).toBeInTheDocument();
  });

  test("updates city state when onCityChange is called by Search component", async () => {
    mockGetStorage.mockReturnValue(null);
    render(<WeatherDashboard />);
    const user = userEvent.setup();

    expect(
      screen.getByText(`Provider City: ${LOCATION_DEFAULT}`)
    ).toBeInTheDocument();

    const changeCityButton = screen.getByRole("button", {
      name: /Change City/i,
    });
    await user.click(changeCityButton);

    expect(screen.getByText("Provider City: New City")).toBeInTheDocument();
  });

  test("updates units state when onUnitsChange is called by Search component", async () => {
    mockGetStorage.mockReturnValue(null);
    render(<WeatherDashboard />);
    const user = userEvent.setup();

    expect(screen.getByText("Units: metric")).toBeInTheDocument();
    expect(screen.getByText("Dashboard Units: metric")).toBeInTheDocument();

    const changeUnitsButton = screen.getByRole("button", {
      name: /Change Units/i,
    });
    await user.click(changeUnitsButton);

    expect(screen.getByText("Units: imperial")).toBeInTheDocument();
    expect(screen.getByText("Dashboard Units: imperial")).toBeInTheDocument();
  });
});
