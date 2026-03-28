import tw from "tailwind-styled-components";

export const Header = tw.header`
w-full
flex 
justify-end 
py-space-large
h-[7.8rem]
`;

export const Main = tw.main`
 w-full 
 min-h-screen
 flex 
flex-col
min-h-[calc(100vh-7.8rem)] 
`;

export const Nav = tw.nav`
  flex 
  items-end
  text-[2.2rem]
 sm:text-size-large
`;
