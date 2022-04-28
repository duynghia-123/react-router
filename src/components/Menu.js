import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

const menus = [
  {
    label: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    label: "Giới thiệu",
    to: "/about",
    exact: false,
  },
  {
    label: "Liên hệ",
    to: "/contact",
    exact: false,
  },
  {
    label: "Sản phẩm",
    to: "/products",
    exact: false,
  },
  {
    label: "Đăng nhập",
    to: "/login",
    exact: false,
  },
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active abc" : "";
        return (
          <li className={`my-li ${active}`}>
            <Link to={to} className="my-link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          {this.showMenus(menus)}
        </ul>
      </nav>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;
