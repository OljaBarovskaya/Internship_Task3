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
      {description.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}
