import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className="bg-blue-800 px-5 py-2 rounded-md hover:bg-blue-500 text-sm text-white">
    {children}
  </Link>
);