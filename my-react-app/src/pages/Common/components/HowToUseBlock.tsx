export default function HowToUseBlock({
  title,
  instructions,
}: {
  title: string;
  instructions: string[];
}) {
  return (
    <div>
      <h3>{title}</h3>
      {instructions.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}
