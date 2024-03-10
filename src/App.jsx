import Applayout from "./ui/Applayout";
import Logo from "./ui/Logo";

function App() {
  return (
    <div className="grid-cols-[auto 1fr auto]  grid h-screen bg-slate-100 px-6">
      <Logo />
      <Applayout />
      <footer className="mt-auto text-right">
        <p className="py-3 text-xs uppercase  text-slate-500">
          ATM react App created by Emad Ismail (Redux && reduxjs/toolkit) ©️{" "}
          {new Date().getFullYear().toString()}
        </p>
      </footer>
    </div>
  );
}

export default App;
