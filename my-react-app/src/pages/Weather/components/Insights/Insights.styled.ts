import tw from "tailwind-styled-components";

export const InsightsContainer = tw.div`
grid 
transition-all 
duration-500 
ease-in-out

${(props) => (props.$showInsights ? "bgrid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 mt-0")}
`;

export const Button = tw.button`
flex 
items-center 
text-size-medium 
self-end
shrink-0
`;

export const InsightsContent = tw.div`
overflow-hidden 
text-size-medium 
[&>ul]:list-disc 
[&>ul]:ml-6 
[&>ul]:space-y-6 
[&>li]:pl-1
`;
