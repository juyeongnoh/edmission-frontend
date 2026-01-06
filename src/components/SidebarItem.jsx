import { NavLink } from "react-router";

const NavLinkItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkItem;
