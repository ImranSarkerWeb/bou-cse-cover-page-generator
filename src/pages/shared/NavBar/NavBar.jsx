const NavBar = () => {
  const navContent = (
    <>
      {" "}
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Page Generator</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navContent}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">BOU (বউ নয়)</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navContent}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Wish Button</a>
      </div>
    </div>
  );
};

export default NavBar;
