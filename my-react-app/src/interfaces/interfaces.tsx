export type DegreeUnits = "metric" | "imperial";

export interface StyledCompWithChildren {
  children?: React.ReactNode;
  addStyle?: string;
}

export interface WeatherProviderType {
  children: React.ReactNode;
  city: string;
  units: DegreeUnits;
  setIsCorrect?: (value: true | false) => void;
}

interface Coord {
  lon: number;
  lat: number;
}

interface WeatherItem {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherDataType {
  coord: Coord;
  weather: WeatherItem[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherContextType {
  lastSuccessfulWeather: WeatherDataType | undefined;
  isLoading: boolean;
  error: Error | null;
}

export interface FavLocationsContextType {
  favLocations: string[];
  setFavLocations: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface MyComponentProps {
  isActive: boolean;
}

export interface Error {
  cod: string;
  message: string;
}
