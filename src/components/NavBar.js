import { NavLink } from "react-router-dom";

export default function NavBar() {
    const linkStyles = {
      display: "inline-block",
      width: "50px",
      padding: "12px",
      margin: "0 6px 6px",
      background: "blue",
      textDecoration: "none",
      color: "white",
    };
  
    return (
      <div>
        <NavLink
          style={linkStyles}
          to="/"
          exact
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
  
        <NavLink
          style={linkStyles}
          to="/home"
          exact
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
  
        <NavLink
          style={linkStyles}
          to="/login"
          exact
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
      </div>
    );
  }
  