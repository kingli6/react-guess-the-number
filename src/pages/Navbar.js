import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="menu-container">
      <Link to="/">Menu</Link>
      <Link to="/home">Home</Link>
      <Link to="/extra">Extra</Link>
    </div>
  );
};
