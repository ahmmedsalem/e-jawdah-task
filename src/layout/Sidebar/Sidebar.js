import "./Sidebar.scss";
import "../../assets/json/nav.json";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { Context } from "../../components/Wrapper/Wrapper";
import Logo from "../../assets/images/Logo.svg";

const Sidebar = () => {
  const menuItems = require("../../assets/json/nav.json");
  const context = useContext(Context);

  const navItems = (navType) => {
    return menuItems[navType].map((item) => {
      return (
        <li className="aside-wrapper__nav__item" key={item.id}>
          <Link
            to={item.link}
            className="text-white text-decoration-none opacity-75 d-block py-10 px-30"
          >
            {item.iconName ? (
              <i className={`bi ${item.iconName} mx-10 fs-5`}></i>
            ) : null}{" "}
            <FormattedMessage
              id={`${navType}.${item.name}`}
              defaultMessage={item.name}
            />
          </Link>
        </li>
      );
    });
  };

  return (
    <aside className="aside-wrapper h-100">
      {/* Logo */}
      <div className="aside-wrapper__brand d-flex justify-content-center align-items-center p-30">
        <div className="aside-wrapper__logo ms-10">
          <div className="navbar__logo ms-10">
            <img src={Logo} className="h-20" alt="المركز السعودي للأعمال" />
          </div>
        </div>
      </div>

      {/* User */}
      <div className="aside-wrapper__user px-30">
        <div className="d-flex justify-content-between mb-10">
          <p className="text-white fs-6">
            <FormattedMessage id="sidebar.hello" defaultMessage="مرحباًَ" />
          </p>
          <select
            className="form-select"
            value={context.locale}
            onChange={context.selectLanguage}
          >
            <option defaultValue value="ar">
              AR
            </option>
            <option value="en">EN</option>
          </select>
        </div>
        <p className="aside-wrapper__user__info text-white fs-5 pb-5 d-flex justify-content-between">
          <span className="aside-wrapper__user__name">
            <i className="bi bi-person"></i>{" "}
            <FormattedMessage
              id="sidebar.user"
              defaultMessage="أحمد خالد الغامدى القحطاني"
            />
          </span>
          <button className="btn btn-link fs-5">
            <i className="bi bi-box-arrow-left"></i>
          </button>
        </p>
      </div>

      {/* Nav Items */}

      <nav className="aside-wrapper__nav">
        <ul className="aside-wrapper__nav__items list-unstyled px-0">
          {navItems("mainNav")}
        </ul>
        <hr className="bg-white" />
        <ul className="aside-wrapper__nav__items list-unstyled px-0 mt-20">
          <p className="opacity-75 text-white px-30 fw-bold">
            <FormattedMessage
              id="sidebar.electronicServices"
              defaultMessage="الخدمات الالكترونية"
            />
          </p>
          {navItems("servicesNav")}
        </ul>
        <hr className="bg-white" />
        <ul className="aside-wrapper__nav__items list-unstyled px-0 mt-20">
          <p className="opacity-75 text-white px-30 fw-bold">
            <FormattedMessage
              id="sidebar.otherLinks"
              defaultMessage="روابط اخري"
            />
          </p>
          {navItems("otherLinks")}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
