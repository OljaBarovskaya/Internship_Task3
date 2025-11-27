import { type PropsWithChildren } from "react";

export default function Wrapper(props: PropsWithChildren) {
  return (
    <div className="wrapper mx-auto w-[90%] h-[100vh]">{props.children}</div>
  );
}
