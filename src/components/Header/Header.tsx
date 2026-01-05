import gingieLogo from '../../assets/favicon.ico';

export const Header = () => {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-4 bg-black">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold tracking-tight text-slate-90">
            Gingie’s Home Solutions
          </span>
          <img
            src={gingieLogo}
            alt="Gingie’s Home Solutions"
            className="h-8 w-8 rounded-md"
          />
        </div>
      </div>
    </header>
  );
};