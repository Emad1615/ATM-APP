function Button({ children, type, disabled = false }) {
  const base = `rounded-sm px-3 py-1 text-sm  font-semibold uppercase outline-none transition-all duration-200 ease-in  focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-offset-2`;
  const style = {
    primary: `${base} bg-green-500 text-white hover:scale-105`,
    secondary: `${base} bg-transparent border text-stone-500 hover:bg-stone-200 hover:scale-105`,
    danger: `${base} bg-red-500 text-white hover:scale-105`,
    success: `${base} bg-blue-500 text-white mx-2 px-2 py-1 text-xs font-light`,
  };
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
