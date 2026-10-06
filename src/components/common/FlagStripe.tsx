export default function FlagStripe() {
  return (
    <div className="flex h-1.5 w-full" aria-hidden="true">
      <div className="flex-1 bg-black" />
      <div className="flex-1 bg-de-red" />
      <div className="flex-1 bg-de-gold" />
    </div>
  );
}
