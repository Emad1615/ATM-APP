import { useSelector } from "react-redux";

function DisplayBalance() {
  const { balance } = useSelector((store) => store.account);
  return (
    <div className="absolute right-1 top-2 space-x-1 rounded-sm bg-stone-800 px-2 text-sm font-semibold uppercase leading-8 tracking-widest text-white">
      <span>Balance:</span> <span className="text-green-500"> 5168515.55</span>
    </div>
  );
}

export default DisplayBalance;
