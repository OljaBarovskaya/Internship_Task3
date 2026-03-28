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

export const ClueField = tw.div`
origin-top-right 
absolute 
mt-2 
shadow-xl 
bg-white 
ring-1 
ring-opacity-5 
z-10  
w-full 
rounded-r-medium 
overflow-auto 
max-h-90 
text-black
`;

export const InputArea = tw.div`
relative
`;
