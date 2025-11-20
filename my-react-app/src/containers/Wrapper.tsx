import { type PropsWithChildren } from "react";

export default function Wrapper(props: PropsWithChildren) {
  return <div className="wrapper">{props.children}</div>;
}
