import React from "react";
import Logo from "../asset/icons/logo.svg";

const Header = ({}) => {
  return (
    <header className="bg-transparent p-4 md:p-6">
      <div className="card px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="inline-flex justify-center items-center w-fit">
          <img src={Logo} alt="cryptoverse" className="h-8 md:h-12" />
          <h1 className="md:font-medium md:text-xl text-white ml-4 font-primary">
            Cryptoverse
          </h1>
        </div>
        <MenuIcon />
        <ul className="hidden md:inline-flex font-primary text-white">
          <li className="underline decoration-secondary decoration-2 underline-offset-4 nav-link">
            Home
          </li>
          <li className="nav-link">Currencies</li>
          <li className="nav-link">Exchanges</li>
          <li className="nav-link">News</li>
        </ul>
      </div>
    </header>
  );
};

const MenuIcon = () => {
  const [active, setActive] = React.useState(false);

  const toggle = () => {
    setActive((currState) => !currState);
  };

  return (
    <div
      className="menu md:hidden px-3 relative py-1 rounded border border-gray-300 cursor-pointer text-gray-300 hover:border-gray-400 hover:text-gray-400"
      onClick={toggle}
    >
      {active ? <p>&#9587;</p> : <p>&#9776;</p>}
      {active && (
        <div className="absolute top-full right-0">
          <ul className="card p-4 inline-flex flex-col font-primary text-white">
            <li className="underline decoration-secondary decoration-2 underline-offset-4 nav-link mb-4 p-1">
              Home
            </li>
            <li className="nav-link mb-4 p-1">Currencies</li>
            <li className="nav-link mb-4 p-1">Exchanges</li>
            <li className="nav-link p-1">News</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
