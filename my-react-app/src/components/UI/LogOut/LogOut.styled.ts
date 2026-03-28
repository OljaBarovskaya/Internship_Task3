import tw from "tailwind-styled-components";

export const LogOutBlock = tw.div`
flex 
relative 
pl-9  
sm:pl-12.5
`;

export const LogOutButton = tw.button`
z-3 
cursor-pointer
`;

export const LogOutPopUp = tw.button`
absolute 
right-0 
bg-gray-100 
p-space-small 
pointer-events-auto 
hover:bg-blue-300 
z-2 
border 
border-gray-300 
transition-all 
duration-200 
ease-out 
text-size-medium

${(p) =>
  p.$isPopUp
    ? "opacity-100 translate-y-15 cursor-pointer pointer-events-auto"
    : "opacity-0 translate-y-0 pointer-events-none"}
`;
