import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import { useState } from "react";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <Link to="hero" span={true} smooth={true}>
            <li onClick={() => setMenuOpened(false)}>Home</li>
          </Link>
          <Link to="programs" span={true} smooth={true}>
            <li onClick={() => setMenuOpened(false)}>Programs</li>
          </Link>
          <Link to="Reasons" span={true} smooth={true}>
            <li onClick={() => setMenuOpened(false)}>Why us</li>
          </Link>
          <Link to="plans" span={true} smooth={true}>
            <li onClick={() => setMenuOpened(false)}>Plans</li>
          </Link>
          <Link to="Testimonials" span={true} smooth={true}>
            <li onClick={() => setMenuOpened(false)}>Testimonials</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
