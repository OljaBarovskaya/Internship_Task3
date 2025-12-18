import tw from "tailwind-styled-components";

export const Column = tw.div`
  w-full
  h-full
  flex 
  flex-col 
  gap-y-space-large 
  min-w-[300px]
  md:w-[calc(50%-2.4rem)]
  md:overflow-hidden
  md:h-304
  m:h-249 
  lg:h-263
`;
