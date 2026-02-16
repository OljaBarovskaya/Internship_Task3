import tw from "tailwind-styled-components";

export const FormField = tw.div`
flexVertical 
gap-y-3
`;

export const FormLabel = tw.label`
font-medium 
text-gray-700 
block
`;

export const FormInput = tw.input`
w-full 
px-5
py-4 
rounded-r-small 
border 
focus:outline-none 
transition-all

${(props) => (props.$isError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500")}
`;

export const ErrorMessage = tw.span`
text-red-500
h-7
inline-block
`;

export const EmptySpan = tw.span`
h-7 
inline-block
`;

export const IconWrapper = tw.span`
 absolute 
 right-3 
 top-1/2 
 transform 
 -translate-y-1/2 
 h-7 
 w-7 
 text-gray-400 
 cursor-pointer
`;
