export interface StyledCompWithChildren {
  children?: React.ReactNode;
  addStyle?: string;
}

export interface WeatherProviderType {
  children: React.ReactNode;
  city: string;
  units: "imperial" | "metric";
  setIsCorrect?: (value: true | false) => void;
}
