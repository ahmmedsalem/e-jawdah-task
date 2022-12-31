import { useContext } from "react";
import { Context } from "../../components/Wrapper/Wrapper";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../assets/images/Logo.svg";

const Navbar = () => {
  const links = require("../../assets/json/nav.json");
  const context = useContext(Context);
  return (
    <nav className="navbar mt-5">
      {/* Top Navbar */}
      <div className="navbar__top-nav d-flex justify-content-between align-items-center w-100 px-25">
        <p className="navbar__user-info text-white fw-bold fs-5">
          <i className="bi bi-person fs-4"></i> أحمد خالد الغامدى
        </p>
        <select
          value={context.locale}
          onChange={context.selectLanguage}
          className="form-select navbar__language w-auto text-start bg-transparent border-0 text-white font-bold"
        >
          <option className="text-black" value={"ar"}>
            العربية
          </option>
          <option className="text-black" value={"en"}>
            ENGLISH
          </option>
        </select>
      </div>

      {/* Main Navbar */}
      <div className="navbar__main-nav d-flex justify-content-between align-items-end w-100 px-25 pb-8 pt-30">
        <div className="navbar__links">
          <ul className="list-unstyled list-inline p-0">
            {links.links.map((link) => {
              return (
                <li className="list-inline-item ms-30" key={link.id}>
                  <Link
                    className="text-white text-decoration-none"
                    to={link.link}
                  >
                    <FormattedMessage
                      id={`links.${link.name}`}
                      defaultMessage={link.name}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar__brand d-flex justify-content-center align-items-center">
          <div className="navbar__logo ms-10">
            <img src={Logo} className="h-20" alt="المركز السعودي للأعمال" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
