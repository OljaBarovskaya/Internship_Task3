import tw from "tailwind-styled-components";

export const Board = tw.div`
 w-full 
 h-min 
 flex 
 justify-center
 flex-wrap
 gap-x-space-large
 gap-y-space-large 
`;

export const BoardColumn = tw.div`
  w-full
  h-full
  flex 
  flex-col 
  gap-y-space-large 
  min-w-[300px]
  md:w-[calc(50%-2.4rem)]
  md:overflow-hidden
  md:h-305
  m:h-250 
  lg:h-264
`;

export const BoardSection = tw.section`
bg-primary 
p-space-large
rounded-r-large 
flex 
flex-col
gap-y-space-small
min-h-70
`;
