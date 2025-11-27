import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import WeatherDashboard from "./WeatherDashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Mock the Search component
vi.mock("./Search", () => ({
  default: vi.fn(({ currentCity, onCityChange }) => (
    <div data-testid="mock-search">
      <span data-testid="search-city-prop">{currentCity}</span>
      <button
        data-testid="change-city-btn"
        onClick={() => onCityChange("London")}
      >
        Change City
      </button>
    </div>
  )),
}));

// Mock the Dashboard component
vi.mock("./Dashboard", () => ({
  default: vi.fn(() => (
    <div data-testid="mock-dashboard">Dashboard Content</div>
  )),
}));

const LOCATION_DEFAULT = "Minsk";

describe("WeatherDashboard", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
  });

  const renderWithQueryClient = (component: React.ReactElement) => {
    return render(
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>
    );
  };

  // Test Case 1: Initial Render
  test("renders Search and Dashboard components with default state", () => {
    renderWithQueryClient(<WeatherDashboard />);

    // Verify child components are rendered (as mocks)
    expect(screen.getByTestId("mock-search")).toBeInTheDocument();
    expect(screen.getByTestId("mock-dashboard")).toBeInTheDocument();

    // Check that the default city prop is passed down
    expect(screen.getByTestId("search-city-prop")).toHaveTextContent(
      LOCATION_DEFAULT
    );
  });

  // Test Case 2: State update via child interaction
  test("updates the city state when the Search component triggers onCityChange", async () => {
    renderWithQueryClient(<WeatherDashboard />);
    const user = userEvent.setup();

    const changeCityButton = screen.getByTestId("change-city-btn");

    const cityPropDisplay = screen.getByTestId("search-city-prop");
    expect(cityPropDisplay).toHaveTextContent(LOCATION_DEFAULT);

    await user.click(changeCityButton);

    expect(cityPropDisplay).toHaveTextContent("London");
  });
});
