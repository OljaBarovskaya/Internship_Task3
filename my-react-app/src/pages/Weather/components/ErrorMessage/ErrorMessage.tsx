export function ErrorMessage({ noError }: { noError: Boolean }) {
  if (!noError) {
    return (
      <span className="text-[#FF0000]">
        Please check whether the city name is correct
      </span>
    );
  }
  return <span className="h-[11.5px]"> </span>;
}
