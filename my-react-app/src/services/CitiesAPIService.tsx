import { useQuery } from "@tanstack/react-query";

async function getCities(city: string) {
  try {
    const response = await fetch(`/api/get-cities?query=${city}`);

    if (!response.ok) throw new Error("Ошибка сети");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка в getCities:", error);

    throw error;
  }
}

export const useCitiesQuery = (city: string, options: { skip: boolean }) => {
  return useQuery({
    queryKey: ["cities", city],
    queryFn: () => getCities(city),
    enabled: !options.skip && city.length >= 3,
    staleTime: 1000 * 60 * 60,
    retry: false,
  });
};
