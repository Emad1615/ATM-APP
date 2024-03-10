function Logo() {
  return (
    <div className=" flex items-center justify-start gap-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
        alt="Logo"
        className=" h-16 w-20"
      />
      <label className=" border-b border-stone-400 font-semibold uppercase tracking-widest text-stone-700">
        React National bank
      </label>
    </div>
  );
}

export default Logo;
