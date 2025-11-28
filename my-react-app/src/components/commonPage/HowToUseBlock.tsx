export default function HowToUseBlock({
  title,
  description,
}: {
  title: string;
  description: string[];
}) {
  return (
    <div>
      <h3>{title}</h3>
      {description.map((text, index) => {
        return <p key={index}>{text}</p>;
      })}
    </div>
  );
}
