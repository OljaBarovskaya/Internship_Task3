import { Link } from "react-router-dom";

interface TextWithLinkProps {
  text: string;
  path: string;
  linkText: string;
}

export function TextWithLink({ text, path, linkText }: TextWithLinkProps) {
  return (
    <p className=" text-gray-600 flex gap-x-3">
      {text}
      <Link to={path} className="text-blue-600 hover:underline">
        {linkText}
      </Link>
    </p>
  );
}
