export type Inputs = {
  city: string;
};

export type SearchProps = {
  onCityChange: (newCity: string) => void;
  currentCity: string;
};
