import tw from "tailwind-styled-components";

export const Form = tw.form`
w-full 
self-end
flex
flex-col 
min-w-[250px] 
gap-y-space-small
xs:w-1/2 
`;

export const FormArea = tw.div`
flex 
justify-end 
gap-x-space-large 
items-start
text-black 
`;

export const InputField = tw.input`
h-22 
w-full 
rounded-[36px] 
px-[5%] 
border 
border-black 
text-size-large
placeholder:italic
2xl:text-size-medium
`;
