import tw from "tailwind-styled-components";

export const ListOfCities = tw.ul`
py-1 
divide-y 
divide-gray-100
`;

export const CityOption = tw.button`
block 
w-full 
text-left 
px-4 
py-4 
text-gray-700 
hover:bg-gray-50 
hover:text-blue-600 
transition-colors 
focus:outline-none 
text-size-medium
`;
