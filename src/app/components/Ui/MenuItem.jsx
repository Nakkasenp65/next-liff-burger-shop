export default function MenuItem({ menuName, menuDetails, menuPrice }) {
  return (
    <div className="flex flex-col">
      <div className="bg-lightGreyBackground rounded-b-lg">
        <span className="text-2xl">{menuPrice}</span>
        <span className="text-sm font-bold">{menuName}</span>
        <p className="text-sm text-zinc-400">{menuDetails}</p>
      </div>
    </div>
  );
}
